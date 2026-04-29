# importa o Base
from app.db.session import Base

# 🔥 IMPORTA TODOS OS MODELS AQUI
from app.modules.user.model import User
from app.modules.news.model import News

# (adicione outros conforme crescer)