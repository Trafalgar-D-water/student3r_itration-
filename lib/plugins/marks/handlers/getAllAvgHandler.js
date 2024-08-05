const Mark = require("../schema/markSchema");

exports.getAllAvg = async (request, h) => {
  try {
    const marks = await Mark.find().populate("studentID").populate("testID");

    const markByStudent = marks.reduce((acc, mark) => {
      const studentId = mark.studentID._id.toString();
      const studentName = mark.studentID.name;
      const testName = mark.testID.TestName;

      if (!acc[studentId]) {
        acc[studentId] = {
          studentName: studentName,
          test: {},
        };
      }

      if (!acc[studentId].test[testName]) {
        acc[studentId].test[testName] = {
          totalMark: 0,
          count: 0,
          average: 0,
        };
      }
      acc[studentId].test[testName].totalMark += mark.obtainMark;
      acc[studentId].test[testName].count++;
      acc[studentId].test[testName].average =
        acc[studentId].test[testName].totalMark /
        acc[studentId].test[testName].count;
      return acc;
    }, {});
    console.log(markByStudent);
    return h.response(markByStudent).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "Something went wrong" }).code(500);
  }
};
