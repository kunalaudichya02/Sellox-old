const router = express.Router();
import express from "express";
import { login, print, register, logout } from "../controllers/authDetail.js";
import isAuthenticated from "../middlewares/authenticated.js";

router.post("/register", register);

router.get("/login", isAuthenticated, print);

router.post("/login", login);

router.get("/logout", logout);

export default router;
