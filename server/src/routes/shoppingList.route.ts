import express from "express";
import { ShoppingListController } from "../controllers/shoppingList.controller";
const router = express.Router();

router.post("/create", ShoppingListController.create);

export { router as CategoryRouter };
