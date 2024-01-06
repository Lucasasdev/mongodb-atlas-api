const express = require("express");
const router = express.Router();

const controller = require("./controllers/controller");

//routes
router.get("/users", controller.getUser);
router.get("/users/:id", controller.getUserById);
router.post("/users", controller.createUser);
router.delete("/users/:id", controller.deleteUser);
router.put("/users/:id", controller.changeUser);
router.patch("user/:id", controller.modifyUser);

module.exports = router;
