import os
import requests
import tempfile

import cv2

from tensorflow.keras.preprocessing.image import img_to_array
from keras.models import load_model
import numpy as np

from src.config import MODEL, POKEMONS

TMP_FILENAME = 'tmp_filename'


def get_score(img_url, pokemon):
    probabilities = classify(img_url)
    return probabilities[sorted(POKEMONS).index(pokemon)]


def classify(img_url):
    response = requests.get(img_url)

    file = open(TMP_FILENAME, 'wb')
    file.write(response.content)
    file.close()

    image = cv2.imread(TMP_FILENAME)
    image = cv2.resize(image, (96, 96))
    image = image.astype("float") / 255.0
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)

    model = load_model(MODEL)

    probability = model.predict(image)[0]
    os.remove(TMP_FILENAME)

    return probability


def download(img_url):
    response = requests.get(img_url)

    file = tempfile.NamedTemporaryFile()
    file.write(response.content)
    file.close()
    return file.name
