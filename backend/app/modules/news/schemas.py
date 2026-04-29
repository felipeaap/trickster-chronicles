from pydantic import BaseModel
from datetime import datetime

class NewsOut(BaseModel):
    id: str
    title: str
    slug: str
    summary: str | None
    cover_image: str | None
    category: str
    is_featured: bool
    created_at: datetime

    class Config:
        from_attributes = True