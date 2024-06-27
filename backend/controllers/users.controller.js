const userService = require("../services/users.service");


const usersController = {
    getUser: async (req, res) =>{
        console.log(req.params.id);
        userId = parseInt(req.params.id);
        const foundUser = await userService.getUser(userId);
        res.send(foundUser);  
    },
    createUser: async (req, res) => {
        console.log("Reached user controller");
        const userData = req.body;
        if(!userData?.id ||!userData?.name || !userData?.password)
            {
            res.status(400).send("Invalid data");
            return;
            }
        userService.createUser(userData);
        res.status(201).send("User created");
    },
    deleteUser: async (req, res) => {
        console.log(`Deleted user with id ${userId}`);
        userService.deleteUser(userId);
    }
}

module.exports = usersController;