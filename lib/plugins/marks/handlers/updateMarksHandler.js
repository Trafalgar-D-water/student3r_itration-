const Mark = require("../schema/markSchema");
exports.updateMark = async (request, h) => {
  try {
    const markID = request.params.id;
    console.log(markID);
    const payload = request.payload;

    const updateMark = await Mark.findOneAndUpdate(
      { _id: markID },
      {
        $set: {
          obtainMark: payload.obtainMark,
          maxMark: payload.maxMark,
          subjectID: payload.subjectID,
          studentID: payload.studentID,
          testID: payload.testID,
          classID: payload.classID,
        },
      },
      { new: true }
    );

    if (!updateMark) {
      return h.response({ message: "mark not found" }).code(404);
    }

    return h.response(updateMark).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ message: "someting went wrong" });
  }
};
