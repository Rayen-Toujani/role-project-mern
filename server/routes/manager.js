// server/routes/manager.js
import express from "express";
import { createManager } from "../controllers/managerController.js";
const router = express.Router();

router.post('/create', createManager);

export default router;
