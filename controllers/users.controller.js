const userService = require("../services/users.service");


const usersController = {
    createUser: (user) =>{
        console.log("Reached user controller");
        console.log(user);
        userService.createUser(user);
    },
    deleteUser: (userId) => {
        console.log(`Deleted user with id ${userId}`);
        userService.deleteUser(userId);
    }
}

module.exports = usersController;