const Mark = require("../schema/markSchema");
exports.getMarkFromSubject = async (request, h) => {
  try {
    const { id } = request.params;
    console.log(id);
    const allMarksReletedToSubject = await Mark.find({ subjectID: id });
    return h.response(allMarksReletedToSubject).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
