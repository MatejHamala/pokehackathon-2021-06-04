from flask import Flask
from flask_restful import Api

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from src.config import DATABASE_URI

engine = create_engine(DATABASE_URI, echo=True)
_SessionFactory = sessionmaker(bind=engine)
Base = declarative_base()


def session_factory():
    Base.metadata.create_all(engine)
    return _SessionFactory()


app = Flask(__name__)
api = Api(app)


from src.model import *
from src.api.resources import *
