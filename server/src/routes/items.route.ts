import express from "express";
import { ItemsController } from "../controllers/itemsController";
const router = express.Router();

router.get("/", ItemsController.search);
router.post("/create", ItemsController.create);
export { router as ItemRouter };
