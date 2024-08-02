const Subject = require("../schema/subjectSchema");
exports.addSubject = async (request, h) => {
  try {
    const data = request.payload;
    const newSubject = new Subject(data);
    const savedSubject = await newSubject.save();
    return h.response(savedSubject).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ message: "something went wrong" }).code(500);
  }
};
