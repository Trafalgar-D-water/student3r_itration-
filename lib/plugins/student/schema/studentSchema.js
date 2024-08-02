const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("stduents", StudentSchema);
