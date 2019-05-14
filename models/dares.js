const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dareSchema = new Schema({
    type: { type: String, required: true },
    author: { type: String, required: true },
    details : { type: String, required: true},
    id: Number
  });
  
  const Dare = mongoose.model("Dare", dareSchema);
  
  module.exports = Dare;
  