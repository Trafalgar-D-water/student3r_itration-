const { updateMark } = require("../handlers/updateMarksHandler");

module.exports = {
  method: "PUT",
  path: "/api/marks/{id}",
  handler: updateMark,
};
