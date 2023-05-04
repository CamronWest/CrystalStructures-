import random
import string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Problem, Solutions, UserGraph
from faker import Faker
import os
import json

fake = Faker()

with app.app_context():
   print('Deleting all problems...')
   Problem.query.delete()

   print('adding new ones... like 10')
   for i in range(10):
    p = Problem(
        title=fake.sentence(),
        description=fake.text(),
        data_structures=fake.word(),
        difficulty=fake.random_int(min=1, max=5)
    )
    db.session.add(p)

    db.session.commit()
