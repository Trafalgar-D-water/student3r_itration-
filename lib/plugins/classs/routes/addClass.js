const { addClass } = require("../handler/addClassHandler");

module.exports = {
  method: "POST",
  path: "/api/class",
  handler: addClass,
};
