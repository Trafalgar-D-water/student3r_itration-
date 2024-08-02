const { getAvgOfStudent } = require("../handlers/getAvgOfStduenthandler");

module.exports = {
  method: "GET",
  path: "/api/mark/student/{id}/avg",
  handler: getAvgOfStudent,
};
