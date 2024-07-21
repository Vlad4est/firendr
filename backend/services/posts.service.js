const PostModel = require("../data/posts.model");
const axios = require("axios");
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
        return post;
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
    },
    getLikes: async (postId) => {
        const post = await postService.getPost(postId);
        return post.likes.length;
    },
    searchUnsplashImage: async (query) => {
        const UNSPLASH_ACCESS_KEY = "htLC7yav7r7PV6hQZIHEiutAR1Zty6I1-7VUuNveIlA";
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
              params: { 
                query: query,
                per_page: 1
              },
              headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` }
            });
            
            if (response.data.results.length > 0) {
              return response.data.results[0].urls.small;
            } else {
              throw new Error('No image found for the given query');
            }
          } catch (error) {
            console.error('Error searching Unsplash:', error);
            throw error;
          }
    }
    

}

module.exports = postService;