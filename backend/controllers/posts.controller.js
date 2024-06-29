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
            res.status(400).send(error);
        }
       
    },
    deletePost: (postId) => {
        console.log(`Deleted post with id ${postId}`);
        postService.deletePost(postId);
    }
}

module.exports = postsController;