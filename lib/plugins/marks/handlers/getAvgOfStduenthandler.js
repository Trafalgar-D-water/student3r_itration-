const Mark = require("../schema/markSchema");
exports.getAvgOfStudent = async (request, h) => {
  try {
    const { id } = request.params;
    console.log(id);

    const marks = await Mark.find({ studentID: id }).populate("studentID");
    console.log(marks);
    if (marks.length <= 0)
      return h.response({ message: "no stdudent found" }).code(404);

    const totalMark = marks.reduce((acc, mark) => acc + mark.obtainMark, 0);
    const average = totalMark / marks.length;

    console.log(marks[0].studentID.name);
    const studentName = marks[0].studentID.name;

    return h.response({ id, studentName, average }).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
