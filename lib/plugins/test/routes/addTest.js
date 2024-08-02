const { addTest } = require("../handlers/addTesthandler");

module.exports = {
  method: "POST",
  path: "/api/test",
  handler: addTest,
};
