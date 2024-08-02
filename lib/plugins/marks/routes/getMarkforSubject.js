const { getMarkFromSubject } = require("../handlers/getMarkFormSubject");

module.exports = {
  method: "GET",
  path: "/api/mark/subject/{id}", // id is subject_id
  handler: getMarkFromSubject,
};
