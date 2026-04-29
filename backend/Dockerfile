# backend/Dockerfile

FROM python:3.11-slim

# Evita logs bufferizados
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# Dependências
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copia projeto
COPY . .

EXPOSE 8000

# 🔥 Rodar migrations + API com hot-reloading otimizado
CMD ["sh", "-c", "alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload --reload-dir app"]