const Test = require("../schema/testSchema");
exports.addTest = async (request, h) => {
  try {
    const data = request.payload;
    const newTest = new Test(data);
    const savedTest = await newTest.save();

    return h.response(savedTest).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ message: "somthing went wrong" }).code(500);
  }
};
