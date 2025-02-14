import express from "express"
import { login,logout,register } from "../controllers/auth.js"
const authRoutes = express.Router()


authRoutes.post("/register",register)
authRoutes.post("/login",login)
authRoutes.post("/logout",logout)

export default authRoutes