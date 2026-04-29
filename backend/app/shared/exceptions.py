# app/shared/exceptions.py

from fastapi import HTTPException, status


class AppException(HTTPException):
    def __init__(
        self,
        status_code: int,
        message: str,
        code: str = "error"
    ):
        super().__init__(
            status_code=status_code,
            detail={
                "message": message,
                "code": code
            }
        )

class InvalidCredentials(AppException):
    def __init__(self):
        super().__init__(
            status.HTTP_401_UNAUTHORIZED,
            "Invalid credentials",
            "INVALID_CREDENTIALS"
        )


class Unauthorized(AppException):
    def __init__(self):
        super().__init__(
            status.HTTP_401_UNAUTHORIZED,
            "Unauthorized",
            "UNAUTHORIZED"
        )


class Forbidden(AppException):
    def __init__(self):
        super().__init__(
            status.HTTP_403_FORBIDDEN,
            "Forbidden",
            "FORBIDDEN"
        )


class NotFound(AppException):
    def __init__(self, resource: str = "Resource"):
        super().__init__(
            status.HTTP_404_NOT_FOUND,
            f"{resource} not found",
            "NOT_FOUND"
        )


class BadRequest(AppException):
    def __init__(self, message: str):
        super().__init__(
            status.HTTP_400_BAD_REQUEST,
            message,
            "BAD_REQUEST"
        )