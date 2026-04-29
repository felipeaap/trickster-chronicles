from sqlalchemy.orm import Session
from fastapi import HTTPException

from .repository import get_user_by_email, create_user, get_user_by_id
from app.core.security import hash_password, verify_password
from app.core.jwt import create_access_token, create_refresh_token, decode_token


def register_user(db: Session, email: str, password: str):
    existing = get_user_by_email(db, email)

    if existing:
        raise HTTPException(400, "User already exists")

    hashed = hash_password(password)

    return create_user(db, email, hashed)


def login_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)

    if not user or not verify_password(password, user.password):
        raise HTTPException(401, "Invalid credentials")

    access = create_access_token(user.id)
    refresh = create_refresh_token(user.id)

    return access, refresh, user


def get_current_user(db: Session, refresh_token: str):
    try:
        payload = decode_token(refresh_token)
    except Exception:
        raise HTTPException(401, "Invalid token")

    user = get_user_by_id(db, payload["sub"])

    if not user:
        raise HTTPException(404, "User not found")

    return user


def refresh_access_token(refresh_token: str):
    payload = decode_token(refresh_token)
    return create_access_token(payload["sub"])