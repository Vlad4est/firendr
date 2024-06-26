const express = require("express");
const router = express.Router();

//Todo remove
const users = [
    {
        id: 1,
        "name": "Vlad"
    },
    {
        id: 2,
        "name": "Gabi"
    },
    {
        id: 3,
        "name": "Marcel"
    }

]



router.get("/:id", (req, res) => {
    for(let user of users)
        {
            
            if(parseInt(user.id) == parseInt(req.params.id))
                {
                    res.send(user);
                    return;
                }
        }
        res.status(404).send({message: "User not found"});
});
router.post("/", (req, res) =>{
    console.log(req.body);
    res.status(201).send("User created");
  });
  
  module.exports = router;