from random import choice as rc
from faker import Faker
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Problem, Solutions, UserGraph

with app.app_context():

    print("Deleting data from database")
    db.drop_all()

    print('creating problems')
    
