import os
from datetime import datetime, timedelta, timezone
from typing import Optional, Literal, TypedDict

import jwt
from jwt import PyJWTError
from app.core.config import settings

# =========================
# ⚙️ CONFIG
# =========================

SECRET_KEY = settings.JWT_SECRET
ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 15
REFRESH_TOKEN_EXPIRE_DAYS = 7


# =========================
# 🧾 TYPES
# =========================

TokenType = Literal["access", "refresh"]


class TokenPayload(TypedDict):
    sub: str
    type: TokenType
    exp: int


# =========================
# 🔐 CREATE TOKENS
# =========================

def create_access_token(user_id: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload: TokenPayload = {
        "sub": user_id,
        "type": "access",
        "exp": int(expire.timestamp()),
    }

    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def create_refresh_token(user_id: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(
        days=REFRESH_TOKEN_EXPIRE_DAYS
    )

    payload: TokenPayload = {
        "sub": user_id,
        "type": "refresh",
        "exp": int(expire.timestamp()),
    }

    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


# =========================
# 🔍 DECODE / VALIDATE
# =========================

def decode_token(token: str, expected_type: Optional[TokenType] = None) -> TokenPayload:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        # valida tipo (access vs refresh)
        if expected_type and payload.get("type") != expected_type:
            raise ValueError("Invalid token type")

        return payload  # type: ignore

    except PyJWTError:
        raise ValueError("Invalid or expired token")


# =========================
# 🧠 HELPERS (OPCIONAL)
# =========================

def decode_access_token(token: str) -> TokenPayload:
    return decode_token(token, expected_type="access")


def decode_refresh_token(token: str) -> TokenPayload:
    return decode_token(token, expected_type="refresh")