const postService = require("../services/posts.service")

const postsController = {
    getPosts: () => {
        return postService.getPosts();
    },
    createPost: (post) =>{
        console.log("Reached post controller");
        console.log(post);
        postService.createPost(post);
    },
    deletePost: (postId) => {
        console.log(`Deleted post with id ${postId}`);
        postService.deletePost(postId);
    }
}

module.exports = postsController;