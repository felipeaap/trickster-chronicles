from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.modules.news.model import News

router = APIRouter(prefix="/news")

@router.get("/")
def list_news(
    category: str | None = None,
    featured: bool | None = None,
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db),
):
    query = db.query(News).filter(News.published == True)

    if category:
        query = query.filter(News.category == category)

    if featured:
        query = query.filter(News.is_featured == True)

    total = query.count()

    items = (
        query.order_by(News.created_at.desc())
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )

    return {
        "items": items,
        "total": total,
        "page": page
    }