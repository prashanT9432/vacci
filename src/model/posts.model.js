const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  DOB: {
    type: Schema.Types.Date,
    required: true,
  },
  Gender: {
    type: Schema.Types.String,
    required: true,
  },
  Place_of_Birth: {
    type: Schema.Types.String,
    required: true,
  },
  Blood_Group: {
    type: Schema.Types.String,
    required: true,
  },
  Height: {
    type: Schema.Types.Number,
    required: true,
  },
  Weight: {
    type: Schema.Types.Number,
    required: true,
  },
});

const PostModel = model("Patient_data", postSchema);

module.exports = PostModel;
