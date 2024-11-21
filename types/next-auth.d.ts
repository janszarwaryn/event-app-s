import "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      username: string
      role: "ADMIN" | "USER"
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    name: string
    username: string
    role: "ADMIN" | "USER"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: "ADMIN" | "USER"
    username: string
  }
} 