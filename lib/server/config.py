from flask import Flask
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData




app = Flask(__name__)
app.secret_key = "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data_structures.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata = metadata)
migrate = Migrate(app,db)

db.init_app(app) 

bcrypt = Bcrypt(app)
api = Api(app)

