const Mark = require("../schema/markSchema");
exports.getMarksByTest = async (request, h) => {
  try {
    const { testId } = request.params;
    console.log(testId)
    const marks = await Mark.find({ testID :testId }).populate('studentID')
    console.log(marks);
    return h.response(marks).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
