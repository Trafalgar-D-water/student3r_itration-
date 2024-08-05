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

    // console.log(marks)

    const marksByStudent = marks.reduce((acc, mark) => {
      const studentId = mark.studentID._id.toString();
      const studentName = mark.studentID.name;
      const testName = mark.testID.TestName;
      // console.log(studentId);
      // console.log(studentName);
      // console.log(testName);

      if (!acc[studentId]) {
        acc[studentId] = {
          studentName: studentName,
          test: {},
          totalMark: 0,
          totalTestCount: 0,
          totalaverage: 0,
        };
      }

      // console.log(acc[studentId]);
      

      if (!acc[studentId].test[testName]) {
        acc[studentId].test[testName] = {
          totalMark: 0,
          cnt: 0,
          average: 0,
        };
      }
      acc[studentId].test[testName].totalMark += mark.obtainMark;
      // console.log(acc[studentId].test[testName]);

      acc[studentId].test[testName].cnt++;
      // console.log(acc[studentId].test[testName]);

      acc[studentId].test[testName].average =
        acc[studentId].test[testName].totalMark /
        acc[studentId].test[testName].cnt;
      // console.log(acc[studentId].test[testName].average);

      acc[studentId].totalMark += mark.obtainMark;
      acc[studentId].totalTestCount++;
      acc[studentId].totalaverage =
        acc[studentId].totalMark / acc[studentId].totalTestCount;
      return acc;
    }, {});
    // console.log(marksByStudent);
    
    return h.response(marksByStudent).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};










































// const marks = await Mark.find({
//   studentID: { $in: studentIdArray },acc[s]
// }).populate("studentID").populate('testID');

// const marksByStudent = marks.reduce((acc, mark) => {
//   const studentId = mark.studentID.toString();
//   if (!acc[studentId]) {
//     acc[studentId] = {
//       studentName: mark.studentID.name,
//       marks: {
//         test1 : [],
//         test1total : [],
//         test1count : ,
//       },

//       totalMarks: 0,
//       count: 0,
//       testTotals: {},
//     };
//   }
//   acc[studentId].marks.push(mark);
//   acc[studentId].totalMarks += mark.obtainMark;
//   acc[studentId].count++;
//   return acc;
// }, {});

// const markByStduent = marks.reduce((acc , mark)=>{
//   console.log(mark);

// } , {})

// const results = Object.keys(marksByStudent).map((studentId) => {
//   const studentData = marksByStudent[studentId];
//   const { studentName, TestName, marks, totalMarks, count } = studentData;

//   const testAvgResults = Object.entries(testTotals).map((entry) => {
//     const testId = entry[0];
//     const total = entry[1].total;
//     const count = entry[1].count;

//     return {
//       testId: testId,
//       averageMarks: count > 0 ? total / count : 0,
//     };
//   });

//   return {
//     studentName: studentData.studentName,
//     tests: testAvgResults,
//     overallAvg: count > 0 ? totalMarks / count : 0,
//   };
// });
