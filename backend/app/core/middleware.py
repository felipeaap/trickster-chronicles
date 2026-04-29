# app/core/middleware.py

import time
import uuid

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

from app.core.logger import logger
from app.shared.exceptions import AppException


class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        request_id = str(uuid.uuid4())
        start_time = time.time()

        try:
            response = await call_next(request)

            duration = round((time.time() - start_time) * 1000, 2)

            logger.info(
                f"[{request_id}] {request.method} {request.url.path} "
                f"{response.status_code} {duration}ms"
            )

            response.headers["X-Request-ID"] = request_id
            return response

        except Exception as e:
            duration = round((time.time() - start_time) * 1000, 2)

            logger.error(
                f"[{request_id}] ERROR {request.method} {request.url.path} "
                f"{str(e)} {duration}ms"
            )

            return JSONResponse(
                status_code=500,
                content={
                    "message": "Internal Server Error",
                    "request_id": request_id
                }
            )


class ErrorHandlerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            return await call_next(request)

        except AppException as e:
            return JSONResponse(
                status_code=e.status_code,
                content=e.detail
            )

        except Exception:
            return JSONResponse(
                status_code=500,
                content={
                    "message": "Unexpected error",
                    "code": "INTERNAL_ERROR"
                }
            )
