from src.common import Base
from sqlalchemy import Column, String, Date, Integer, Boolean


class Competition(Base):

    __tablename__ = 'competition'

    id = Column(Integer, primary_key=True)
    pokemon = Column(String)
    image_url = Column(String)
