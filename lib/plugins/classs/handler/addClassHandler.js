const Class = require("../schema/classSchema");
exports.addClass = async (request, h) => {
  try {
    const data = request.payload;
    const newclass = new Class(data);
    const savedClass = await newclass.save();
    return h.response(savedClass).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
