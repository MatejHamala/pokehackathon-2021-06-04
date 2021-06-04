import os

VERSION = '0.0'

NAME = 'Pokedex_' + VERSION

DATABASE_URI = 'sqlite://'

POKEMONS = {
    'pikatchu': 'https://ae01.alicdn.com/kf/H0796eedf43804726819970bb8de51be5Q/4PCS-LOT-Pokemon-Pikachu-Classic-Toys-Sticker-Fashion-Personality-Cartoon-Laptop-Body-Background-Decoration-Sticker.jpg_Q90.jpg_.webp',
    'bulbasaur': 'https://www.pokemongodex.cz/images/256barev/001-bulbasaur.png',
    'charizard': 'https://static.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest?cb=20170727171344',
    'jigglypuff': 'https://e7.pngegg.com/pngimages/966/991/png-clipart-comics-cartoon-jigglypuff-whiskers-fan-art-jigglypuff-face-cat-like-mammal-thumbnail.png',
    'squirtle': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrPhvdWK-LutKLlPw4uMv-_XXfqCy9CHqYw&usqp=CAU',
    # 'psyduck': 'https://static.wikia.nocookie.net/pokemon/images/5/53/054Psyduck.png/revision/latest/scale-to-width-down/200?cb=20140328195856',
    # 'meowth',
    # 'diglett',
    # 'onix',
    # 'mewtwo',
    # 'magikarp'
}

MODEL = os.path.dirname(os.path.abspath(__file__)) + '/pokedex/pokedex.model'
