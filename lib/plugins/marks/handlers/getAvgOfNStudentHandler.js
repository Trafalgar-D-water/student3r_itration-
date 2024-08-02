const Mark = require("../schema/markSchema");
const Student = require("../../student/schema/studentSchema");
const Test = require("../../test/schema/testSchema");

exports.getStudentAvgBYArray = async (request, h) => {
  try {
    const { studentIds } = request.query;
    const studentIdArray = studentIds.split(",");
    if (studentIdArray.length === 0) {
      return h.response({ error: "No student IDs provided" }).code(400);
    }
    const marks = await Mark.find({
      studentID: { $in: studentIdArray },
    }).lean();

    const marksByStudent = marks.reduce((acc, mark) => {
      const studentId = mark.studentID.toString();
      if (!acc[studentId]) {
        acc[studentId] = {
          marks: [],
          totalMarks: 0,
          count: 0,
          testTotals: {},
        };
      }
      acc[studentId].marks.push(mark);
      acc[studentId].totalMarks += mark.obtainMark;
      acc[studentId].count++;
      return acc;
    }, {});

    const results = Object.keys(marksByStudent).map((studentId) => {
      const studentData = marksByStudent[studentId];
      const { marks, totalMarks, count } = studentData;

      const testTotals = marks.reduce((acc, mark) => {
        const { testID, obtainMark } = mark;
        acc[testID] = acc[testID] || { total: 0, count: 0 };
        acc[testID].total += obtainMark;
        acc[testID].count++;
        return acc;
      }, {});

      const testAvgResults = Object.entries(testTotals).map(
        ([testId, { total, count }]) => ({
          testId,
          averageMarks: count > 0 ? total / count : 0,
        })
      );

      return {
        studentName: studentData.studentName,
        tests: testAvgResults,
        overallAvg: count > 0 ? totalMarks / count : 0,
      };
    });

    return h.response(results).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
