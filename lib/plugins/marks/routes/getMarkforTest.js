const { getMarksByTest } = require("../handlers/getMarkForTestHandler");

module.exports = {
  method: "GET",
  path: "/api/marks/test/{testId}",
  handler: getMarksByTest,
};
