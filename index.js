const express = require('express');
const mongoose = require("mongoose");
const app = express();
const usersRouter = require("./routers/users.router");
const postsRouter = require("./routers/posts.router");
const e = require('express');

const port = 3000;
app.use(express.json());

//Routers
app.use("/users", usersRouter);
app.use("/posts", postsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoose.connect("mongodb+srv://vlad:1q2q3q4q@cluster0.rgkzjm4.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    console.log("Connected");
    /* Testing mongodb creation
    const Cat = mongoose.model("Cat", {name: String});
    const cat1 = await Cat.create({name: "kitty"});
    console.log(cat1);
    */
  }).catch((err) => console.log(err));
});


