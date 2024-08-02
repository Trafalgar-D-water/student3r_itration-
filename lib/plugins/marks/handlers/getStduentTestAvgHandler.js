const Mark = require("../schema/markSchema");
exports.getStudentTestAvg = async (request, h) => {
  try {
    const { stduentId, testId } = request.params;
    // console.log(stduentId , testId)
    const marks = await Mark.find({
      studentID: stduentId,
      testID: testId,
    }).populate("studentID");
    const mm = await Mark.find({
      studentID: stduentId,
      testID: testId,
    }).countDocuments();
    console.log(mm);

    if (marks.length <= 0)
      return h.response({ message: "no student and test present" }).code(404);

    const totalMarks = marks.reduce((acc, mark) => acc + mark.obtainMark, 0);
    const stduentName = marks[0].studentID.name;
    console.log(stduentName);
    const avg = totalMarks / marks.length;
    console.log(avg);

    return h.response({ stduentName, avg }).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
