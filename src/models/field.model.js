const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const fieldSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      minLength: 3
    },
    type: {
      type: String,
      enum: ["text", "textarea", "radio", "checkbox", "dropdown", "rating", "date", "email", "number", "phone number"],
      required: true,
    },
    options: [String], // Only required for fields like radio, checkbox, and dropdown
  },
  {
    timestamps: true,
    strictPopulate: false
  }
);

/**
 * @typedef Field 
 */
fieldSchema.plugin(toJSON);
fieldSchema.plugin(paginate);
const Field = mongoose.model("Field", fieldSchema);


module.exports = Field;
