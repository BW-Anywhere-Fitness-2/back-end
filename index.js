const server = require("./api/server.js");
const PORT = process.env.PORT || 5000;
if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
}
module.exports = server;
