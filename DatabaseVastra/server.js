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

//https://vastra.onrender.com/MensData
//https://vastra.onrender.com/WomensData
//https://vastra.onrender.com/ChildrensData
//https://vastra.onrender.com/WishList
//https://vastra.onrender.com/Cart
//https://vastra.onrender.com/UsersList
//https://vastra.onrender.com/AdminData
//https://vastra.onrender.com/Checkout
//https://vastra.onrender.com/CurrentUser