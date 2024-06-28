const postService ={
    getPosts: async () => {
        console.log("Reached post service");
        
    },
    createPost: (post) =>{
        console.log("Reached post service");
        console.log(post);
    },
    deletePost: (postId) =>{
        console.log(`Reached service post ${postId}`);
        console.log(postId);
    }

}

module.exports = postService;