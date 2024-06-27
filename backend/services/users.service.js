const UserModel = require("../data/users.model")

const userService ={
    getUser: async (userId)=>{
        const foundUser = await UserModel.findOne({id: userId});
        return foundUser;
    },
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