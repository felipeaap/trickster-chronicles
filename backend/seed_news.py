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
    {
        "title": "Double Gold Weekend",
        "slug": "double-gold-weekend",
        "summary": "Earn double gold from all sources this weekend!",
        "content": "Get ready for massive gold gains! All gold drops, quest rewards, and merchant profits will be doubled from Friday to Sunday. Make sure to complete your daily quests and farm your favorite dungeons!",
        "category": "event",
        "is_featured": False,
    },
    {
        "title": "New Pet System Coming Soon",
        "slug": "new-pet-system",
        "summary": "Train and evolve your own companion pets with unique abilities.",
        "content": "We're excited to announce the upcoming Pet System! Capture wild creatures, raise them from babies to adults, and unlock special evolutions. Each pet will provide unique buffs and companion abilities in combat.",
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
        "published": True,
    },
    {
        "title": "Skill Rebalance - Mage & Archer Classes",
        "slug": "skill-rebalance",
        "summary": "Adjusted ability cooldowns and damage coefficients for balance.",
        "content": "After reviewing player feedback and performance data, the following changes have been made: Meteor Strike cooldown reduced from 12s to 10s. Piercing Arrow damage increased by 15%. Fireball mana cost reduced by 20%.",
        "category": "patch",
        "is_featured": False,
    },
    {
        "title": "Memory Optimization Update",
        "slug": "memory-optimization",
        "summary": "Server performance improvements for smoother gameplay.",
        "content": "We've implemented new memory management systems that reduce server lag during peak hours. Average ping has been reduced by 30ms and instance stability has been significantly improved.",
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
        "published": True,
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
        "published": True,
    },
    {
        "title": "Item Mall Summer Sale",
        "slug": "summer-sale",
        "summary": "Up to 50% off on selected items in the Item Mall.",
        "content": "The Item Mall is having a huge summer sale! Get premium costumes, pets, and consumables at discounted prices. Sale runs until the end of the month.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "New Player Welcome Bonus",
        "slug": "welcome-bonus",
        "summary": "New players receive a free starter pack on account creation.",
        "content": "Welcome to Trickster Chronicles! All newly created accounts will receive a Welcome Pack containing: 7-day EXP boost, starter gear set, 1000 in-game currency, and an exclusive newcomer pet.",
        "category": "notice",
        "is_featured": False,
    },
    # 🆕 NEWLY ADDED FOR SEEDING 🆕
    {
        "title": "Winter Wonderland Update",
        "slug": "winter-wonderland-update",
        "summary": "Snow has fallen in the Central Square! Discover new winter quests and items.",
        "content": "Experience the magic of winter in Trickster Chronicles! The entire Central Square has been transformed into a winter wonderland. Catch snowflakes to trade for limited-edition costumes and furniture.",
        "category": "event",
        "is_featured": False,
    },
    {
        "title": "Server Expansion: New Channel Added",
        "slug": "server-expansion",
        "summary": "To accommodate our growing community, we've added a new server channel.",
        "content": "Due to the recent influx of new players, we've added Channel 5 to help reduce lag and provide more farming spots for everyone. Thank you for your continued support!",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Class Spotlight: The Master Alchemist",
        "slug": "class-spotlight-alchemist",
        "summary": "Learn about the unique playstyle and abilities of the Alchemist class.",
        "content": "The Alchemist is a versatile support class that uses potions and transmutations to buff allies and debuff enemies. In this spotlight, we cover the best builds for solo leveling and group raids.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Community Fan Art Contest",
        "slug": "fan-art-contest",
        "summary": "Show off your artistic skills and win premium in-game currency!",
        "content": "Submit your Trickster-themed artwork on our Discord for a chance to win 5000 Item Mall points and have your art featured on our loading screens!",
        "category": "event",
        "is_featured": False,
    },
    {
        "title": "Developer Blog: The Future of Trickster Chronicles",
        "slug": "dev-blog-future",
        "summary": "Our lead developer shares the roadmap for the next six months.",
        "content": "We have big plans for the future! In this blog post, we discuss upcoming features like the Guild Territory Wars, the Awakening System, and our first major story expansion.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Emergency Reboot - May 5",
        "slug": "emergency-reboot-may-5",
        "summary": "Short downtime to address a critical bug in the trade system.",
        "content": "We will be performing an emergency server reboot at 14:00 server time to fix an issue where trades would occasionally fail to complete. Estimated downtime: 15 minutes.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Pet Breeding Guide for Beginners",
        "slug": "pet-breeding-guide",
        "summary": "Master the art of pet breeding with our comprehensive guide.",
        "content": "Breeding pets can be complex, but rewarding! This guide covers everything from compatibility to inheritance of special traits. Learn how to breed the ultimate companion.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Rare Drop Rate Boost: Shadowcrypt",
        "slug": "drop-rate-boost-shadowcrypt",
        "summary": "Increased drop rates for legendary items in the Shadowcrypt dungeon.",
        "content": "For this week only, the drop rates for legendary weapons and armor in the Shadowcrypt dungeon have been increased by 20%. Form your party and start hunting!",
        "category": "event",
        "is_featured": False,
    },
    {
        "title": "New Mount: Royal Griffon",
        "slug": "new-mount-griffon",
        "summary": "Soar through the skies on the majestic Royal Griffon mount.",
        "content": "The Royal Griffon has arrived! This majestic flying mount is now available in the Item Mall. It offers a 50% movement speed bonus and unique aerial animations.",
        "category": "notice",
        "is_featured": False,
    },
    {
        "title": "Balance Update - Paladin Shield Block",
        "slug": "balance-update-paladin",
        "summary": "Adjustments to the Paladin's shield block mechanics for better PVP balance.",
        "content": "We've adjusted the Paladin's shield block chance to be more consistent in PVP scenarios. The base block rate has been slightly reduced, but the bonus from dexterity has been increased.",
        "category": "patch",
        "is_featured": False,
    },
]

# Clean existing news if any (optional, but good for fresh seed)
db.query(News).delete()

for item in mock_news:
    db.add(News(**item))

db.commit()
db.close()
print(f"Seeded {len(mock_news)} news items.")
