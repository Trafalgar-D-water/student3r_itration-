const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClassSchema = new Schema({
  classname: { type: String, required: true },
});

module.exports = mongoose.model("class", ClassSchema);
