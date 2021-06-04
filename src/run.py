from src.common import app, session_factory
from src.config import POKEMONS
from src.model import Competition


def run():
    session = session_factory()
    for pokemon in POKEMONS:
        competition = Competition(pokemon=pokemon, image_url=POKEMONS[pokemon])
        session.add(competition)
    session.commit()
    app.run()
