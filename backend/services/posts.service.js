const PostModel = require("../data/posts.model");

const postService = {
    getPosts: async () => {
        return await PostModel.find();
    },

    createPost: async (postData) =>{
        const post = await PostModel.create(postData);
        console.log(post);
    },

    deletePost: (postId) =>{
        console.log(`Reached service post ${postId}`);
        console.log(postId);
    }

}

module.exports = postService;