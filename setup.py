import uuid

from pip._internal.req import parse_requirements
from setuptools import setup, find_packages


def requirements(path):
    items = parse_requirements(path, session=uuid.uuid1())
    return [r.requirement for r in items]

setup(
    name='pokehackathon',
    packages=find_packages(),
    install_requires=requirements('./requirements.txt'),
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'pokehackathon = src.run:run',
        ],
    }
)
