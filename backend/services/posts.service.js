const PostModel = require("../data/posts.model");
const { v4: uuidv4 } = require('uuid');

const postService = {
    getPosts: async () => {
        return await PostModel.find();
    },

    createPost: async (postData) =>{
        postData.id = uuidv4();
        const post = await PostModel.create(postData);
        console.log(post);
    },

    deletePost: async(postId) =>{
        return await PostModel.deleteOne({ id: postId });
    }

}

module.exports = postService;