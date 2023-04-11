from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import User, Problem, Solutions, UserGraph
from sqlalchemy.exc import IntegrityError
from config import app, db, bcrypt, api


class Signup(Resource):
    def post(self):
        username = request.json['username']
        email = request.json['email']
        password = request.json['password']
        user = User(username=username, email=email, password=password)

        user.password_hash = password

        try:
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            print(user.to_dict())
            
            return user.to_dict(), 201
        except IntegrityError:
            print('IntegrityError')
            return {'error': '422 Unprocessable Enitity'}, 422
class CheckSesssion(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        else:
            return {'error': '401 Unauthorized'}, 401


class Login(Resource):
    def post(self):
        email = request.json['email']
        password = request.json['password']
        user = User.query.filter(User.email == email).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
            else:
                return {'error': '401 Unauthorized'}, 401

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        return {'error': '401 Unauthorized'}, 401


@app.route('/')
def index():
    return '<h1>Hello World of Data Structures</h1>'

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users], 200)

@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE']) #updates a user's properties
def user_details(id):
    user = User.query.filter(User.id == id).first()
    if request.method == 'GET':
        return jsonify(user.to_dict(), 200)
    elif request.method == 'PUT':
        user.username = request.json['username']
        user.email = request.json['email']
        user.password = request.json['password']
        db.session.commit()
        return jsonify(user.to_dict(), 200)
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify(user.to_dict(), 200)
@app.route('/users', methods=['POST']) #creates a new user
def create_user():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize(), 201)

@app.route('/problems/<int:id>', methods=['GET'])
def get_problem(id):
    problem = Problem.query.filter(Problem.id == id).first()
    return jsonify(problem.to_dict(), 200)

@app.route('/solutions/<int:id>', methods=['GET'])
def get_solutions():
    solutions = Solutions.query.all()
    return jsonify([solution.to_dict() for solution in solutions], 200)

@app.route('/usergraph/<int:id>', methods=['GET'])
def get_usergraph(id):
    usergraph = UserGraph.query.filter(UserGraph.user_id == id).first()
    return jsonify(usergraph.to_dict(), 200)
