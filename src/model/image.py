from src.common import Base
from sqlalchemy import Column, String, Integer, ForeignKey, DECIMAL


class Image(Base):

    __tablename__ = 'image'

    id = Column(Integer, primary_key=True)
    competition_id = Column(ForeignKey('competition.id', ondelete='cascade'))

    owner = Column(String)
    url = Column(String)
    score = Column(String, default=0)
