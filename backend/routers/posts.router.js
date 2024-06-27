const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");


router.get("/", (req, res) =>{
    res.send("Test");
});

router.get("/:id", (req, res) => {
    res.send("Test");
});


router.post("/", (req, res) =>{
    postsController.createPost(req.body);
  });


  router.delete("/:id", (req, res)=>{
    res.send("Test");
  });

  module.exports = router;