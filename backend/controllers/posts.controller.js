const PostModel = require("../data/posts.model");
const postService = require("../services/posts.service")

const postsController = {
    getPosts: async (req, res) => {
        res.status(200).send(await postService.getPosts());
    },
    createPost: async (req, res) =>{
        try {
            const postData = req.body;
            await postService.createPost(postData);
            res.status(201).send("Post created");
        } catch (error) {
            res.status(404).send(error);
        }
       
    },
    deletePost: async (req, res) => {
        try {
            postId = parseInt(req.params.id);
            const result = await postService.deletePost(postId);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    updatePostLikes: async (req, res) => {
        try {
            console.log("am intrat 1");
            const postId = req.params.id;
            const username = req.body.username;
            const result = await postService.updatePostLikes(postId, username);
            
            res.status(200).send(result);
        } catch (error) {
            res.status(404).send(error);
        }
    }
}

module.exports = postsController;