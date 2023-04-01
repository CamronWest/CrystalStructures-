from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Solution, Graph


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///event_space.db'
app.config['SECRET_KEY'] = 'secret_key'

migrate = Migrate(app,db)

db.init_app(app)