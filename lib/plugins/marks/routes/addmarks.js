const { addMarks } = require("../handlers/addmarksHandler");

module.exports = {
  method: "PUT",
  path: "/api/mark",
  handler: addMarks,
};
