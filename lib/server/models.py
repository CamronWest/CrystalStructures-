from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata = metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String(), nullable=False)
    
    def __repr__(self):
        return f"User(username={self.username}, email={self.email})"
    
    def serialize(self):
        return {
            'id':self.id,
            'username': self.username,
            'email': self.email
        }

class Solutions(db.Model, SerializerMixin):
    __tablename__ = 'solutions'

    id = db.Column(db.Integer, primary_key=True)
    solution_name = db.Column(db.String)

class graph(db.Model,SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    