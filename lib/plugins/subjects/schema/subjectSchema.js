const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubjectSchema = new Schema({
  subjectName: { type: String, required: true },
});
module.exports = mongoose.model("subject", SubjectSchema);
