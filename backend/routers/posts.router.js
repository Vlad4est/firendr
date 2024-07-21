const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");
const tokenMiddleware = require("../middlewares/token.middleware");

//Router for getting all posts
router.get("/", tokenMiddleware, postsController.getPosts);
//Router for creating a post
router.post("/", tokenMiddleware, postsController.createPost);
router.patch("/:id/likes", postsController.updatePostLikes);
router.delete("/:id", tokenMiddleware, postsController.deletePost);
router.get("/:id/likes",tokenMiddleware, postsController.getLikes);


module.exports = router;