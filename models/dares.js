const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)

const dareSchema = new Schema({
    type: { type: String},
    author: { type: String},
    details : { type: String},
    id: {type: Number, unique: true}
  });
  
  const Dare = mongoose.model("Dare", dareSchema);
  
  module.exports = Dare;
  