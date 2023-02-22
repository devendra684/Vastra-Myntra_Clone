const PORT = process.env.PORT || 8080;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

//https://classic-world.onrender.com/MensData
//https://classic-world.onrender.com/WomensData
//https://classic-world.onrender.com/ChildrensData
//https://classic-world.onrender.com/WishList
//https://classic-world.onrender.com/Cart
//https://classic-world.onrender.com/UsersList
//https://classic-world.onrender.com/AdminData
//https://classic-world.onrender.com/Checkout
//https://classic-world.onrender.com/CurrentUser