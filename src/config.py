import os

VERSION = '0.0'

NAME = 'Pokedex_' + VERSION

DATABASE_URI = 'sqlite://'

POKEMONS = {
    'pikatchu': 'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/200?cb=20200620223403',
    'bulbasaur': 'https://static.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest/scale-to-width-down/350?cb=20200620223551',
    'charizard': 'https://static.wikia.nocookie.net/pokemon/images/7/7e/006Charizard.png/revision/latest/scale-to-width-down/200?cb=20200731134217',
    'jigglypuff': 'https://static.wikia.nocookie.net/pokemon/images/3/3e/039Jigglypuff.png/revision/latest/scale-to-width-down/200?cb=20140328193313',
    'squirtle': 'https://static.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest/scale-to-width-down/350?cb=20200620223922',
    # 'psyduck': 'https://static.wikia.nocookie.net/pokemon/images/5/53/054Psyduck.png/revision/latest/scale-to-width-down/200?cb=20140328195856',
    # 'meowth',
    # 'diglett',
    # 'onix',
    # 'mewtwo',
    # 'magikarp'
}

MODEL = os.path.dirname(os.path.abspath(__file__)) + '/pokedex/pokedex.model'
