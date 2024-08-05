const Student = require('../../student/schema/studentSchema');
const Test = require('../../test/schema/testSchema');
const Mark = require('../schema/markSchema');

exports.getAllAvg = async (request, h) => {
    try {
  
        const marks = await Mark.find().populate('studentID').populate('testID');

     
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
                };
            }

            acc[studentId].test[testName].totalMark += mark.obtainMark;
            acc[studentId].test[testName].count++;
            return acc;
        }, {});

        console.log(markByStudent);
        

        const result = Object.keys(markByStudent).map((studentId) => {
            const studentData = markByStudent[studentId];
            const tests = Object.keys(studentData.test).map((testName) => {
                const { totalMark, count } = studentData.test[testName];
                return {
                    testName: testName,
                    avgMarks: count > 0 ? totalMark / count : 0,
                };
            });

            return {
                studentName: studentData.studentName,
                tests: tests,
            };
        });

        return h.response(result).code(200);
    } catch (error) {
        console.log(error);
        return h.response({ error: 'Something went wrong' }).code(500);
    }
};
