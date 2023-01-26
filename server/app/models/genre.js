//import mongoose from "mongoose";
/*
const mongoose = require("mongoose");
const Genre = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    livres: {
        type: [String],
    }
});


  module.exports = Genre;
*/

  module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      livres: [String],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Genre = mongoose.model("genre", schema);
  return Genre;
};
