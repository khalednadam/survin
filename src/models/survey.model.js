const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const schema = mongoose.Schema;
const fieldSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["text", "textarea", "radio", "checkbox", "dropdown", "rating", "date", "file", "email", "number", "phone number"],
    required: true,
  },
  options: [String], // Only required for fields like radio, checkbox, and dropdown
});
const surveySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: schema.Types.ObjectId,
      ref: "User"
    },
    fields: [fieldSchema],
    isClosed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    strictPopulate: false
  }
)


/**
 * @typedef Survey 
 */
surveySchema.plugin(toJSON);
surveySchema.plugin(paginate);
const Survey = mongoose.model("Survey", surveySchema);


module.exports = Survey;
