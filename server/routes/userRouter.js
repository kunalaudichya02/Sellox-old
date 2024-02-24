const router = express.Router();
import express from "express";
import { login, print, register, logout } from "../controllers/authDetail.js";
import newCard from "../controllers/newCard.js";
import isAuthenticated from "../middlewares/authenticated.js";
import upload from "../features/images.js";

router.post("/register", register);

router.get("/login", isAuthenticated, print);

router.post("/login", login);

router.get("/logout", logout);

router.post("/sell", upload.single("image"), newCard);

router.post("/rent", upload.single("image"), newCard);


export default router;
