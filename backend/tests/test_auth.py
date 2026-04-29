import pytest

def test_register_success(client):
    response = client.post(
        "/auth/register",
        json={"email": "test@example.com", "password": "password123"}
    )
    assert response.status_code == 200
    assert response.json() == {"ok": True}

def test_register_duplicate(client):
    # First registration
    client.post(
        "/auth/register",
        json={"email": "duplicate@example.com", "password": "password123"}
    )
    # Second registration
    response = client.post(
        "/auth/register",
        json={"email": "duplicate@example.com", "password": "password123"}
    )
    assert response.status_code == 400
    assert "User already exists" in response.json()["detail"]

def test_login_success(client):
    # Register first
    client.post(
        "/auth/register",
        json={"email": "login@example.com", "password": "password123"}
    )
    
    # Login
    response = client.post(
        "/auth/login",
        json={"email": "login@example.com", "password": "password123"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["user"]["email"] == "login@example.com"
    assert "refresh_token" in response.cookies

def test_login_invalid_credentials(client):
    response = client.post(
        "/auth/login",
        json={"email": "wrong@example.com", "password": "wrong"}
    )
    assert response.status_code == 401
    assert "Invalid credentials" in response.json()["detail"]

def test_me_success(client):
    # Register and login
    email = "me@example.com"
    client.post(
        "/auth/register",
        json={"email": email, "password": "password123"}
    )
    client.post(
        "/auth/login",
        json={"email": email, "password": "password123"}
    )
    
    # Call /me
    response = client.get("/auth/me")
    assert response.status_code == 200
    assert response.json()["email"] == email

def test_me_no_token(client):
    # Use a fresh client or clear cookies
    client.cookies.clear()
    response = client.get("/auth/me")
    assert response.status_code == 401
    assert "Missing token" in response.json()["detail"]

def test_refresh_token(client):
    # Register and login
    email = "refresh@example.com"
    client.post(
        "/auth/register",
        json={"email": email, "password": "password123"}
    )
    login_res = client.post(
        "/auth/login",
        json={"email": email, "password": "password123"}
    )
    old_access_token = login_res.json()["access_token"]
    
    # Refresh
    response = client.post("/auth/refresh")
    assert response.status_code == 200
    new_access_token = response.json()["access_token"]
    assert new_access_token is not None

def test_logout(client):
    # Login first
    email = "logout@example.com"
    client.post(
        "/auth/register",
        json={"email": email, "password": "password123"}
    )
    client.post(
        "/auth/login",
        json={"email": email, "password": "password123"}
    )
    assert "refresh_token" in client.cookies
    
    # Logout
    response = client.post("/auth/logout")
    assert response.status_code == 200
    assert "refresh_token" not in client.cookies
