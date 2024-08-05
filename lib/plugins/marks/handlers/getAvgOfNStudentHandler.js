const Mark = require("../schema/markSchema");

exports.getStudentAvgBYArray = async (request, h) => {
  try {
    const { studentIds } = request.query;

    console.log(studentIds);
    if (studentIds.length === 0) {
      return h.response({ error: "No student IDs provided" }).code(400);
    }

    const marks = await Mark.find({ studentID: { $in: studentIds } })
      .populate("studentID")
      .populate("testID");

    const marksByStudent = marks.reduce((acc, mark) => {
      const studentId = mark.studentID._id.toString();
      const studentName = mark.studentID.name;
      const testName = mark.testID.TestName;

      if (!acc[studentId]) {
        acc[studentId] = {
          studentName: studentName,
          test: {},
          totalMark: 0,
          totalTestCount: 0,
          totalaverage: 0,
        };
      }

      if (!acc[studentId].test[testName]) {
        acc[studentId].test[testName] = {
          totalMark: 0,
          cnt: 0,
          average: 0,
        };
      }
      acc[studentId].test[testName].totalMark += mark.obtainMark;

      acc[studentId].test[testName].cnt++;

      acc[studentId].test[testName].average =
        acc[studentId].test[testName].totalMark /
        acc[studentId].test[testName].cnt;

      acc[studentId].totalMark += mark.obtainMark;
      acc[studentId].totalTestCount++;
      acc[studentId].totalaverage =
        acc[studentId].totalMark / acc[studentId].totalTestCount;
      return acc;
    }, {});

    return h.response(marksByStudent).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
