from flask_restful import Resource, fields, marshal_with
from flask import request

from src.common import api, session_factory
from src.model import Competition

fields = {
    'id': fields.String,
    'pokemon': fields.String,
    'image_url': fields.String,
}


class CompetitionResource(Resource):

    @marshal_with(fields)
    def get(self):
        session = session_factory()
        competitions = session.query(Competition).all()
        return competitions

    @marshal_with(fields)
    def post(self):
        session = session_factory()

        kwargs = {
            'pokemon': request.json['pokemon'],
            'image_url': request.json['image_url'],
        }
        competition = Competition(**kwargs)
        session.add(competition)
        session.commit()

        return competition


api.add_resource(CompetitionResource, '/competition')
