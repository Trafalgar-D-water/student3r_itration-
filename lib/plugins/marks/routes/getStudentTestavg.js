const { getStudentTestAvg } = require("../handlers/getStduentTestAvgHandler");

module.exports = {
  method: "GET",
  path: "/api/mark/student/{stduentId}/test/{testId}/avg",
  handler: getStudentTestAvg,
};
