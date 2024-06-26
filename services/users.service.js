const  createUser  = require("../controllers/users.controller");

const userService ={
    createUser: (user) =>{
        console.log("Reached user service");
        console.log(user);
    },
    deleteUser: (userId) =>{
        console.log(`Reached service user ${userId}`);
        console.log(userId);
    }

}

module.exports = userService;