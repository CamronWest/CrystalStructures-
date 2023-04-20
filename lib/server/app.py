from flask import Flask, make_response, request, jsonify, session
from flask_session import Session
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource
from models import User, Problem, Solutions, UserGraph
from sqlalchemy.exc import IntegrityError
from config import app, db, bcrypt, api, ApplicationConfig
from flask_cors import CORS, cross_origin
import logging
from logging.handlers import RotatingFileHandler
import os
import subprocess
import uuid

app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@cross_origin
@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }) 
@cross_origin
@app.route("/signup", methods=["POST"])
def register_user():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    try:
        new_user = User(email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
    
        session["user_id"] = new_user.id

        return jsonify({
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email
        })
    except AssertionError:
        response = make_response(
            request.get_json(),['validate_email'], 400
        )

@cross_origin
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@cross_origin
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop(user_id)
    return "200"

@app.route('/')
def index():
    return '<h1>Hello World of Data Structures</h1>'

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users], 200)

@app.route('/users', methods=['GET', 'PUT', 'DELETE'])
def get_user(id):
    user = User.query.get_or404(id)
    if request.method == 'GET':
        return jsonify(user.to_dict(), 200)
    elif request.method == 'PUT':
        user.username = request.json['username']
        user.email = request.json['email']
        user.password = request.json['password']
        user.solutions = request.json['solutions']
        db.session.commit()
        return jsonify(user.to_dict(), 200)


@app.route('/problems', methods=['GET'])
def get_problem():
    problems = Problem.query.all()
    return jsonify([problem.to_dict() for problem in problems], 200)

@app.route('/solutions', methods=['GET'])
def get_solutions():
    solutions = Solutions.query.all()
    return jsonify([solution.to_dict() for solution in solutions], 200)
@cross_origin
@app.route('/solution', methods=['GET', 'POST'])
def post_solutions():
    solution = Solutions(
        language=request.json['language'],
        code=request.json['code'],
    )
    db.session.add(solution)
    db.session.commit()
    return jsonify(solution.to_dict(), 200)






@app.route('/usergraph', methods=['GET'])
def get_usergraph(id):
    usergraph = UserGraph.query.filter(UserGraph.user_id == id).first()
    return jsonify(usergraph.to_dict(), 200)



logger = logging.getLogger()
logFormatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s", datefmt='%Y-%m-%d %H:%M:%S')

""" ## console log configuration """
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(logFormatter)
logger.addHandler(consoleHandler)

""" ## file log configuration """
fileHandler = RotatingFileHandler('logs.log', backupCount=100, maxBytes=1024)
fileHandler.setFormatter(logFormatter)
logger.addHandler(fileHandler)

if __name__ == '__main__':
    app.run(port=5555, debug=True)