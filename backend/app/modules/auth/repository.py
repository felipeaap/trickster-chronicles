from sqlalchemy.orm import Session
from app.modules.user.model import User


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_user_by_id(db: Session, user_id: str):
    return db.query(User).filter(User.id == user_id).first()


def create_user(db: Session, email: str, password: str):
    user = User(
        email=email,
        username=email.split("@")[0],
        password=password
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user