from faker import Faker
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
import re
from config import db, bcrypt
from uuid import uuid4

def get_uuid():
    return uuid4().hex

class User(db.Model, SerializerMixin):
    __tablename__ = 'user'

    id = db.Column(db.String(32), primary_key=True, default=get_uuid)
    username = db.Column(db.String())
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String(), nullable=False)

    solutions = db.relationship('Solutions', backref='user')   

    def __repr__(self):
        return f"User(username={self.username}, email={self.email})"
    
    @validates('email')
    def validate_email(self, key, email):
        assert '@' in email
        return email
    
        


class Problem(db.Model, SerializerMixin):
    __tablename__ = 'problem'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(1000))


    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    problem_solutions = db.relationship('UserGraph', backref='problem')
    
    def __repr__(self):
        return f"Problem(contents={self.contents})"

class Solutions(db.Model, SerializerMixin):
    __tablename__ = 'solution'

    id = db.Column(db.Integer, primary_key=True)
    solution_name = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    problems = db.relationship('UserGraph', backref='solution')

    def __repr__(self):
        return f"Solutions(solution_name={self.solution_name})"
    
class UserGraph(db.Model,SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    contents = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    problem_id = db.Column(db.Integer, db.ForeignKey('problem.id'))
    solution_id = db.Column(db.Integer, db.ForeignKey('solution.id'))