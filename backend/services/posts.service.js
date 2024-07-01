const PostModel = require("../data/posts.model");

const postService = {
    getPosts: async () => {
        return await PostModel.find();
    },

    createPost: async (postData) =>{
        const post = await PostModel.create(postData);
        console.log(post);
    },

    deletePost: async(postId) =>{
        return await PostModel.deleteOne({ id: postId });
    }

}

module.exports = postService;