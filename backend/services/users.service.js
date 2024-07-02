const UserModel = require("../data/users.model")
const { v4: uuidv4 } = require('uuid');

const userService ={
    getUser: async (username) => {
        const foundUser = await UserModel.findOne({username: username});
        return foundUser;
    },

    getUsers: async () => {
        const users = await UserModel.find();
        return users;
    },

    createUser: async (userData) =>{
        console.log("Reached user service");
        userData.id = uuidv4();
        const user = await UserModel.create(userData);
        console.log(user);
    },

    deleteUser: (userId) =>{
        console.log(`Reached service user ${userId}`);
        console.log(userId);
    }

}

module.exports = userService;