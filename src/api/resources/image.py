from flask_restful import Resource, fields, marshal_with
from flask import request

from src.common import api, session_factory
from src.model import Image, Competition
from src.pokedex.classify import get_score

fields = {
    'id': fields.String,
    'competition_id': fields.String,
    'url': fields.String,
    'owner': fields.String,
    'score': fields.Float
}


class ImageResource(Resource):

    @marshal_with(fields)
    def get(self, competition_id):
        session = session_factory()
        images = session.query(Image).filter(
            Image.competition_id == competition_id
        ).all()
        return images

    @marshal_with(fields)
    def post(self, competition_id):
        session = session_factory()

        competition = session.query(Competition).get(competition_id)
        kwargs = {
            'competition_id': competition_id,
            'url': request.json['url'],
            'owner': request.json['owner'],
            'score': str(get_score(request.json['url'], competition.pokemon))
        }
        image = Image(**kwargs)
        session.add(image)
        session.commit()

        return image


api.add_resource(ImageResource, '/competition/<int:competition_id>/image')
