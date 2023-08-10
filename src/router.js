const express = require("express");

const router = express.Router();

const playerController = require("./controllers/playerControllers");

router.get("/player", playerController.browse);
router.get("/player/:id", playerController.read);
router.post("/player", playerController.add);
router.put("/player", playerController.edit);
router.delete("/player/:id", playerController.destroy);

module.exports = router;
