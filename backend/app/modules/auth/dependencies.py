from fastapi import Request, HTTPException


def get_refresh_token(request: Request):
    token = request.cookies.get("refresh_token")

    if not token:
        raise HTTPException(401, "Missing token")

    return token