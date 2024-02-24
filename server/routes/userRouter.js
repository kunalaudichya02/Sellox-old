const router = express.Router();
import express from "express";
import { login, print, register, logout } from "../controllers/authDetail.js";
import cardDetails from "../controllers/cardDetails.js";
import newCard from "../controllers/newCard.js";
import isAuthenticated from "../middlewares/authenticated.js";
import upload from "../features/images.js";

router.post("/register", register);

router.get("/login", isAuthenticated, print);

router.post("/login", login);

router.get("/logout", logout);

router.get("/card/cardid", cardDetails);

router.post("/sell", upload.single("image"), newCard);

router.post("/rent", upload.single("image"), newCard);

router.get("/card/cardid")

export default router;
