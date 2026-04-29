export type User = {
    id: string
    email: string
    username: string
    role: 'player' | 'admin' | 'gm'
  }
  
  export type LoginInput = {
    email: string
    password: string
  }
  
  export type RegisterInput = {
    email: string
    password: string
  }
  
  export type AuthResponse = {
    access_token: string
    user: User
  }