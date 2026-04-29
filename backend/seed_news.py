from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.modules.news.model import News
import uuid

db: Session = SessionLocal()

mock_news = [
    {
        "title": "Spring Festival Event is Live!",
        "slug": "spring-festival-event",
        "summary": "Join the seasonal event and earn exclusive rewards.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "event",
        "is_featured": True,
    },
    {
        "title": "April Patch Notes Released",
        "slug": "april-patch-notes",
        "summary": "Balance changes and new content.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "patch",
        "is_featured": True,
    },
    {
        "title": "Server Maintenance Notice",
        "slug": "server-maintenance",
        "summary": "Scheduled downtime announcement.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "notice",
    },
    {
        "title": "New Dungeon Unlocked",
        "slug": "new-dungeon",
        "summary": "Explore the new endgame dungeon.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "patch",
    },
    {
        "title": "Weekend EXP Boost Event",
        "slug": "exp-boost",
        "summary": "Double EXP for all players.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "event",
    },
]

for item in mock_news:
    db.add(News(**item))

db.commit()
db.close()