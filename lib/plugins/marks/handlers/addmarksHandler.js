const Mark = require("../schema/markSchema");
exports.addMarks = async (request, h) => {
  try {
    const data = request.payload;
    const newMarks = new Mark(data);
    const saved = await newMarks.save();
    return h.response(saved).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ message: "something went wrong" }).code(500);
  }
};
