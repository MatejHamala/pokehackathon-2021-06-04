from src.common import Base
from sqlalchemy import Column, String, Integer, Numeric, ForeignKey


class Image(Base):

    __tablename__ = 'image'

    id = Column(Integer, primary_key=True)
    competition_id = Column(ForeignKey('competition.id', ondelete='cascade'))

    owner = Column(String)
    url = Column(String)
    score = Column(Numeric)
