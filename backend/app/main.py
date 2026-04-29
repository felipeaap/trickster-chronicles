from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.middleware import LoggingMiddleware, ErrorHandlerMiddleware

from app.modules.auth.routes import router as auth_router
from app.modules.news.routes import router as news_router

def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.APP_NAME,
        version="1.0.0"
    )

    # =========================
    # 🧠 MIDDLEWARES
    # =========================
    app.add_middleware(ErrorHandlerMiddleware)
    app.add_middleware(LoggingMiddleware)

    # =========================
    # 🌐 CORS
    # =========================
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # =========================
    # 📦 ROUTES
    # =========================
    app.include_router(auth_router)
    app.include_router(news_router)
    @app.get("/")
    def root():
        return {"status": "ok"}

    return app


app = create_app()