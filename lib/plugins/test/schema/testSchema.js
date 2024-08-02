const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestSchema = new Schema({
  TestName: { type: String, required: true },
});
module.exports = mongoose.model("test", TestSchema);
