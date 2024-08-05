const { getAllAvg } = require("../handlers/getAllAvgHandler");

module.exports = {
  method: "GET",
  path: "/api/all/avg",
  handler: getAllAvg,
};
