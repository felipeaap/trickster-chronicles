from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.modules.news.model import News
import uuid

db: Session = SessionLocal()

mock_news = [
    # Featured Events
    {
        "title": "Spring Festival Event is Live!",
        "slug": "spring-festival-event",
        "summary": "Join the seasonal event and earn exclusive rewards.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "event",
        "is_featured": True,
    },
    {
        "title": "Midsummer Night's Adventure",
        "slug": "midsummer-adventure",
        "summary": "Embark on a special quest under the moonlight and receive the Moonlit Cloak.",
        "content": "Complete the new story questline during the event period to unlock the exclusive Moonlit Cloak cosmetic. Speak to NPC Lyra in the Central Square to begin your journey.",
        "category": "event",
        "is_featured": True,
    },
    {
        "title": "PvP Tournament: Season 7",
        "slug": "pvp-tournament-s7",
        "summary": "Compete in the bi-weekly 3v3 arena tournament for legendary gear.",
        "content": "Registration opens every Saturday at 20:00 server time. Top 8 teams advance to the finals for a chance at the Season 7 Champion title and exclusive weapon skins.",
        "category": "event",
        "is_featured": False,
    },
    # Patch Notes
    {
        "title": "April Patch Notes Released",
        "slug": "april-patch-notes",
        "summary": "Balance changes and new content.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "patch",
        "is_featured": True,
    },
    {
        "title": "Version 2.8.3 - Bug Fixes & Quality of Life",
        "slug": "v283-patch",
        "summary": "Resolved login issues, improved inventory UI, and optimized mob AI.",
        "content": "Fixed an issue where players would get stuck on the loading screen after the login server disconnected. Added a new 'Sell All' button to the inventory. Mob behavior in the Shadowcrypt dungeon has been improved.",
        "category": "patch",
        "is_featured": False,
    },
    {
        "title": "New Dungeon Unlocked",
        "slug": "new-dungeon",
        "summary": "Explore the new endgame dungeon.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "patch",
    },
    {
        "title": "Skill Rebalance - Mage & Archer Classes",
        "slug": "skill-rebalance",
        "summary": "Adjusted ability cooldowns and damage coefficients for balance.",
        "content": "After reviewing player feedback and performance data, the following changes have been made: Meteor Strike cooldown reduced from 12s to 10s. Piercing Arrow damage increased by 15%. Fireball mana cost reduced by 20%.",
        "category": "patch",
        "is_featured": False,
    },
    # Notices
    {
        "title": "Server Maintenance Notice",
        "slug": "server-maintenance",
        "summary": "Scheduled downtime announcement.",
        "content": "Full details about the Spring Festival event. Rewards, quests, and more.",
        "category": "notice",
    },
    {
        "title": "Account Security Reminder",
        "slug": "account-security",
        "summary": "Enable 2FA to protect your account from unauthorized access.",
        "content": "We strongly recommend enabling Two-Factor Authentication on your account. Visit the Account Settings page to set up 2FA using an authenticator app. Accounts with 2FA enabled are eligible for monthly security rewards.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Holiday Schedule: Maintenance Windows",
        "slug": "holiday-schedule",
        "summary": "Updated maintenance times during the upcoming festive season.",
        "content": "Due to the upcoming holidays, server maintenance will be moved from Tuesdays to Thursdays for the next two weeks. Expected downtime: December 24th, 26th, and 31st from 06:00 to 10:00 server time.",
        "category": "notice",
        "is_featured": False,
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