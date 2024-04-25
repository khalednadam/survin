const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const responseSchema = mongoose.Schema(
  {
    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    answers: [
      {
        fieldId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        value: {
          type: mongoose.Schema.Types.Mixed,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true,
    strictPoplate: false,
  }
);


/**
 * @typedef Response
 */
responseSchema.plugin(toJSON);
responseSchema.plugin(paginate);
const Response = mongoose.model("Response", responseSchema);

module.exports = Response;

