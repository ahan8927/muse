from .db import db
import datetime


class Board(db.Model):
    __tablename__ = 'boards'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    # beat_data = db.Column(db.ARRAY(db.Integer))
    beat_col = db.Column(db.ARRAY(db.Integer))
    beat_row = db.Column(db.ARRAY(db.Integer))
    date_created = db.Column(db.Date, default=datetime.datetime.today())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='boards')
    pads = db.relationship('Board', back_populates='pads')
    # likes = db.relationship('Likes', back_populates='beat')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'beat_data': self.beat_data,
            'user_id': self.user_id,
            'date_created': self.date_created
        }