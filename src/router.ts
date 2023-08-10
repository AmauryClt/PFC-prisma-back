import express from "express";
import * as playerController from "./controllers/playerControllers";
import { checkNameMiddleware } from "./validator/chekPlayer";

const router = express.Router();

router.get("/player", playerController.browse);
router.get("/player/:id", playerController.read);
router.post("/player", checkNameMiddleware, playerController.add);
router.put("/player", playerController.edit);
router.delete("/player/:id", playerController.destroy);

export default router;
