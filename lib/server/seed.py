import random
import string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Problem, Solutions, UserGraph
import os
import json

def generate_problem():
   
   Problem.query.delete()
   
   print('generating problems...')
   
   title = ''.join(random.choices(string.ascii_uppercase, k=10))
   description = ''.join(random.choices(string.ascii_uppercase + string.digits, k=100))

   problem = Problem()
   problem.title = title
   problem.description = description
   problem.difficulty = random.randint(1, 5)
   db.session.add_all(problem)
   db.session.commit()

with app.app_context():

   for i in range(15):
      generate_problem()
