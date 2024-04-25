const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const schema = mongoose.Schema;
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
    fields: [
      {
        type: schema.Types.ObjectId,
        ref: "Field",
        required: true
      }
    ],
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

// plugin to convert mongoose to JSON

module.exports = Survey;
