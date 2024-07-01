import express from "express";
import { signInUserPage } from "../controller/userController.js";

const router = express.Router();

router.get("/", signInUserPage);

export default router;
