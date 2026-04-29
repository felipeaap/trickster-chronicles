# app/modules/user/repository.py

from sqlalchemy.orm import Session
from typing import Optional, List

from app.modules.user.model import User
from app.shared.utils import generate_uuid, utc_now, normalize_email

def get_by_id(db: Session, user_id: str) -> Optional[User]:
    return db.query(User).filter(User.id == user_id).first()


def get_by_email(db: Session, email: str) -> Optional[User]:
    email = normalize_email(email)
    return db.query(User).filter(User.email == email).first()


def get_all(db: Session, skip: int = 0, limit: int = 50) -> List[User]:
    return db.query(User).offset(skip).limit(limit).all()


def create(
    db: Session,
    *,
    email: str,
    password: str,
    username: Optional[str] = None,
    role: str = "player"
) -> User:
    email = normalize_email(email)

    user = User(
        id=generate_uuid(),
        email=email,
        username=username or email.split("@")[0],
        password=password,
        role=role,
        created_at=utc_now()
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

def update(
    db: Session,
    user: User,
    **fields
) -> User:
    for key, value in fields.items():
        if hasattr(user, key) and value is not None:
            setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return user

def delete(db: Session, user: User) -> None:
    db.delete(user)
    db.commit()

def update_password(db: Session, user: User, hashed_password: str) -> User:
    user.password = hashed_password
    db.commit()
    db.refresh(user)
    return user

def exists_by_email(db: Session, email: str) -> bool:
    email = normalize_email(email)
    return db.query(User).filter(User.email == email).first() is not None