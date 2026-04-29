import pytest
import os
from unittest.mock import MagicMock

# Set environment variables for testing BEFORE importing anything from app
os.environ["DATABASE_URL"] = "sqlite:///:memory:"
os.environ["JWT_SECRET"] = "test-secret-key"
os.environ["ENV"] = "testing"
os.environ["RATE_LIMIT_ENABLED"] = "False"

# Mock redis before importing app
import app.core.redis
mock_redis = MagicMock()
app.core.redis.redis_client = mock_redis
mock_pipeline = MagicMock()
mock_redis.pipeline.return_value = mock_pipeline
mock_pipeline.execute.return_value = [0, True]

import app.core.rate_limit
app.core.rate_limit.redis_client = mock_redis

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.main import app
from app.db.session import Base, get_db

# Test Database Setup
engine = create_engine(
    "sqlite:///:memory:",
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="session", autouse=True)
def setup_db():
    # This creates the tables for the session
    from app.db.base import Base as AppBase # Ensure all models are loaded
    AppBase.metadata.create_all(bind=engine)
    yield
    AppBase.metadata.drop_all(bind=engine)

@pytest.fixture
def db_session():
    connection = engine.connect()
    transaction = connection.begin()
    session = TestingSessionLocal(bind=connection)
    
    yield session
    
    session.close()
    transaction.rollback()
    connection.close()

@pytest.fixture
def client(db_session):
    def override_get_db():
        try:
            yield db_session
        finally:
            pass
    
    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()
