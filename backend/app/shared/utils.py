# app/shared/utils.py

import uuid
from datetime import datetime, timezone

def generate_uuid() -> str:
    return str(uuid.uuid4())

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

def normalize_email(email: str) -> str:
    return email.strip().lower()

def slugify(text: str) -> str:
    return text.lower().replace(" ", "-")

def safe_get(obj: dict, key: str, default=None):
    return obj.get(key, default)