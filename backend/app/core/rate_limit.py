# app/core/rate_limit.py
from fastapi import Request, HTTPException

from app.core.redis import redis_client

def rate_limit(key_prefix: str, limit: int, window_seconds: int):
    async def dependency(request: Request):
        client_ip = request.client.host
        key = f"rate_limit:{key_prefix}:{client_ip}"

        pipeline = redis_client.pipeline()

        pipeline.incr(key)
        pipeline.expire(key, window_seconds)

        current, _ = pipeline.execute()

        if current > limit:
            raise HTTPException(429, "Too many requests")

    return dependency