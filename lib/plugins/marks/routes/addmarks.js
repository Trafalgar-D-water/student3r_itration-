const { addMarks } = require("../handlers/addmarksHandler");

module.exports = {
  method: "POST",
  path: "/api/mark",
  handler: addMarks,
};
