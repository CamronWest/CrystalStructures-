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
    user_name = db.Column(db.String)

class Solutions(db.Model, SerializerMixin):
    __tablename__ = 'solution'

    id = db.Column(db.Integer, primary_key=True)
    solution_name = db.Column(db.String)

class graph(db.Model,SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    