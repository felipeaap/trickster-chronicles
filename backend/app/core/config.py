# app/core/config.py

from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Literal


class Settings(BaseSettings):
    # =========================
    # 🌐 APP
    # =========================
    APP_NAME: str = "Trickster Chronicles API"
    ENV: Literal["development", "production", "testing"] = "development"
    DEBUG: bool = True

    # =========================
    # 🗄️ DATABASE
    # =========================
    DATABASE_URL: str

    # =========================
    # 🔴 REDIS
    # =========================
    REDIS_URL: str = "redis://redis:6379"

    # =========================
    # 🔐 JWT
    # =========================
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # =========================
    # 🍪 COOKIES
    # =========================
    COOKIE_SECURE: bool = False
    COOKIE_SAMESITE: Literal["lax", "strict", "none"] = "lax"
    COOKIE_DOMAIN: str | None = None

    # =========================
    # ⚡ RATE LIMIT (GLOBAL DEFAULTS)
    # =========================
    RATE_LIMIT_ENABLED: bool = True
    RATE_LIMIT_DEFAULT: int = 100
    RATE_LIMIT_WINDOW_SECONDS: int = 60

    # =========================
    # 🧠 LOGGING
    # =========================
    LOG_LEVEL: Literal["DEBUG", "INFO", "WARNING", "ERROR"] = "INFO"

    # =========================
    # ⚙️ CONFIG
    # =========================
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


# 🔥 singleton global
settings = Settings()