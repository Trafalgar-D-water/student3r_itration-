const addClassRoute = require("./routes/addClass");
const classPlugin = {
  name: "class",
  version: "1.0.0",
  register: (server, options) => {
    server.route(addClassRoute);
  },
};

module.exports = classPlugin;
