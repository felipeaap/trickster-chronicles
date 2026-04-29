from sqlalchemy import Column, String, Text, DateTime, Boolean, UUID
from datetime import datetime
import uuid

from app.db.session import Base

class News(Base):
    __tablename__ = "news"

    id = Column(UUID, primary_key=True, default=uuid.uuid4)

    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True)

    content = Column(Text, nullable=False, default="")
    summary = Column(String(500))

    cover_image = Column(String)

    category = Column(String(50), index=True)
    is_featured = Column(Boolean, default=False)

    published = Column(Boolean, default=True)

    created_at = Column(DateTime, default=datetime.utcnow)