const Mark = require("../schema/markSchema");
exports.addMarks = async (request, h) => {
  try {
    const data = request.payload;
    console.log(data);
    const { studentID, testID, subjectID } = data;

    const filter = { studentID, testID, subjectID };

    const options = { upsert: true, new: true };

    const updateDoc = await Mark.findOneAndUpdate(filter, data, options);

    return h.response(updateDoc).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ message: "something went wrong" }).code(500);
  }
};
