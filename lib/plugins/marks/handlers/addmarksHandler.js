const Mark = require("../schema/markSchema");
exports.addMarks = async (request, h) => {
  try {
    const data = request.payload;
    console.log(data);
    const {studentID , testID , obtainMark} = data;
    // console.log(studentID);
    // console.log(testID)
    // console.log(obtainMark)

    const filter = {studentID , testID}

    const options = {upsert: true, new : true }

    const updateDoc = await Mark.findOneAndUpdate(filter , data , options)
    
  
    return h.response(updateDoc).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ message: "something went wrong" }).code(500);
  }
};
