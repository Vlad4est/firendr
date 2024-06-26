const express = require('express');
const app = express();
const usersRouter = require("./routers/users.router")

const port = 3000;
app.use(express.json());

//Routers
app.use("/users", usersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});