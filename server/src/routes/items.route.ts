import express from "express";
import { ItemsController } from "../controllers/items.controller";
const router = express.Router();

router.get("/", ItemsController.search);
router.post("/create", ItemsController.create);
router.post("/update", ItemsController.update);
export { router as ItemRouter };
