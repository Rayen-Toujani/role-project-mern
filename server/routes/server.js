// server/routes/manager.js
import express from "express";
import { createServer } from "../controllers/serverController.js";
const router = express.Router();

router.post('/create', createServer);

export default router;
