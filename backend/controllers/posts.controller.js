const PostModel = require("../data/posts.model");
const postService = require("../services/posts.service")

const postsController = {
    getPosts: async (req, res) => {
        const posts = await postService.getPosts();
        
        res.status(200).send(posts.filter(post => post.author === req.user.username));
    },
    createPost: async (req, res) =>{
        try {
            let postData = req.body;
            postData.author = req.user.username;
            await postService.createPost(postData);
            res.status(201).send({message: "Post created"});
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
            await postService.updatePostLikes(postId, username);
            res.status(200).send("Likes updated");
        } catch (error) {
            res.status(404).send("Error "+ error);
        }
    },
    getLikes: async (req, res) => {
        const postId = req.params.id;
        try {
            console.log("am intrat 1");
            const likes = await postService.getLikes(postId);
            res.send({likes: likes});
        } catch (error) {
            console.log("am intrat 2");
            console.log(error);
            res.status(400).send(error);
        }
       
    }
}

module.exports = postsController;