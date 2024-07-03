const PostModel = require("../data/posts.model");
const { v4: uuidv4 } = require('uuid');

const postService = {
    getPosts: async () => {
        return await PostModel.find();
    },
    getPost: async (postId) => {
        const foundPost = await PostModel.findOne({id: postId});
        return foundPost;
    },

    createPost: async (postData) =>{
        postData.id = uuidv4();
        const post = await PostModel.create(postData);
        console.log(post);
    },

    deletePost: async(postId) =>{
        return await PostModel.deleteOne({ id: postId });
    },

    updatePostLikes: async (postId, username) => {
        console.log("am intrat 2");
        const post = await postService.getPost(postId);
        console.log(post);
        if(post.likes.includes(username)) {
            console.log("am intrat 3");
            await PostModel.updateOne({ id: postId }, {$pull:  { likes: username} });
        } else {
            console.log("am intrat 4");
        
            await PostModel.updateOne({ id: postId }, {$push:  {likes: username} });
        }
    


    }

}

module.exports = postService;