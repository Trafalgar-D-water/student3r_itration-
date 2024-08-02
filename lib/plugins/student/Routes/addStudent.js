const { addStduent } = require("../handlers/addStudentHandler");

module.exports = {
  method: "POST",
  path: "/api/student",
  handler: addStduent,
};
