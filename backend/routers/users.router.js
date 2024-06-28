const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller")



router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.post("/", usersController.createUser);
router.delete("/", usersController.deleteUser);
/*
router.delete("/:id", (req, res)=>{
    const userId = req.params.id;
    usersController.deleteUser(userId);
    res.send({message: "User deleted"});
  });
  */
  module.exports = router;