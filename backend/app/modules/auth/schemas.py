from pydantic import BaseModel, EmailStr

class RegisterInput(BaseModel):
    email: EmailStr
    password: str


class LoginInput(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: str
    email: EmailStr
    username: str
    role: str


class TokenResponse(BaseModel):
    access_token: str
    user: UserResponse