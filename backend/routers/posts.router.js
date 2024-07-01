const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

//Router for getting all posts
router.get("/", postsController.getPosts);
//Router for creating a post
router.post("/", postsController.createPost);

router.delete("/:id", postsController.deletePost);


module.exports = router;