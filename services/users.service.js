const UserModel = require("../data/users.model")

const userService ={
    createUser: async (userData) =>{
        console.log("Reached user service");
        const user = await UserModel.create(userData);
        console.log(user);
    },
    deleteUser: (userId) =>{
        console.log(`Reached service user ${userId}`);
        console.log(userId);
    }

}

module.exports = userService;