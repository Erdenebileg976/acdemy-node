import { Router } from "express";
import {
  getRestaurants,
  getRestaurantsById,
} from "../controllers/restaurantsController";

const router = Router();

router.get("/", getRestaurants);
router.get("/:id", getRestaurantsById);
export default router;
