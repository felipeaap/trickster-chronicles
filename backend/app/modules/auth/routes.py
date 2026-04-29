from fastapi import APIRouter, Depends, Response
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.rate_limit import rate_limit

from app.db.session import get_db

from . import service
from .schemas import RegisterInput, LoginInput
from .dependencies import get_refresh_token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register",
    dependencies=[
        Depends(
            rate_limit(
                "register", 
                limit=settings.RATE_LIMIT_DEFAULT,
                window_seconds=settings.RATE_LIMIT_WINDOW_SECONDS
                )
            )
        ]
    )
def register(data: RegisterInput, db: Session = Depends(get_db)):
    service.register_user(db, data.email, data.password)
    return {"ok": True}

@router.post("/login",
    dependencies=[
        Depends(
            rate_limit(
                "login", 
                limit=settings.RATE_LIMIT_DEFAULT,
                window_seconds=settings.RATE_LIMIT_WINDOW_SECONDS
                )
            )
        ]
    )
def login(data: LoginInput, response: Response, db: Session = Depends(get_db)):
    access, refresh, user = service.login_user(db, data.email, data.password)

    response.set_cookie(
        key="refresh_token",
        value=refresh,
        httponly=True,
        secure=settings.COOKIE_SECURE,
        samesite=settings.COOKIE_SAMESITE,
    )

    return {
        "access_token": access,
        "user": {
            "id": user.id,
            "email": user.email,
            "username": user.username,
            "role": user.role
        }
    }


@router.get("/me")
def me(
    token: str = Depends(get_refresh_token),
    db: Session = Depends(get_db)
):
    user = service.get_current_user(db, token)

    return {
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "role": user.role
    }


@router.post("/refresh")
def refresh(token: str = Depends(get_refresh_token)):
    access = service.refresh_access_token(token)
    return {"access_token": access}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("refresh_token")
    return {"ok": True}