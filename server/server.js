const server = require("http").createServer(require("./app"));
const { port } = require("./config");
const connectDb = require("./utilities/database");

connectDb()
  .then((connected) => {
    console.log("connected to database");
    return connected;
  })
  .then((connected) => {
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
