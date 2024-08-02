const { updateStduentName } = require("../handlers/updateStduentNameHAndler");

module.exports = {
  method: "PUT",
  path: "/api/student/{id}",
  handler: updateStduentName,
};
