const { getStudentAvgBYArray } = require("../handlers/getAvgOfNStudentHandler");

module.exports = {
  method: "GET",
  path: "/api/student/average",
  handler: getStudentAvgBYArray,
};
