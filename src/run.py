from src.common import app, session_factory
from src.config import POKEMONS
from src.model import Competition

def test():
    with app.test_client() as c:
        r = c.post('/competition/1/image', json={
    "owner": "abc",
    "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
})
        return r


def run():
    session = session_factory()
    for pokemon in POKEMONS:
        competition = Competition(pokemon=pokemon, image_url=POKEMONS[pokemon])
        session.add(competition)
    session.commit()
    app.run()

#
# run()
r = test()