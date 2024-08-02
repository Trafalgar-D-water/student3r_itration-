const mongoose = require("mongoose");
const { Schema } = mongoose;

const MarksSchema = new Schema({
  obtainMark: { type: Number, required: true },
  maxMark: { type: Number, required: true },
  subjectID: { type: Schema.Types.ObjectId, ref: "subject", required: true },
  studentID: { type: Schema.Types.ObjectId, ref: "stduents", required: true },
  testID: { type: Schema.Types.ObjectId, ref: "test", required: true },
  classID: { type: Schema.Types.ObjectId, ref: "class", required: true },
});
module.exports = mongoose.model("marks", MarksSchema);
