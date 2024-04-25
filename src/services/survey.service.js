const { Survey } = require("../models")

/**
 * Creates a new survey.
 * @param {Object} surveyBody - The body of the survey containing the survey details and fields.
 * @param {string} surveyBody.title - The title of the survey.
 * @param {string} surveyBody.owner - The ID of the user who created the survey.
 * @param {boolean} surveyBody.isClosed - Indicates whether the survey is closed.
 * @param {Array<Object>} surveyBody.fields - An array of field objects containing the details of each field.
 * @param {string} surveyBody.fields[].label - The label or question text for the field.
 * @param {string} surveyBody.fields[].type - The type of the field (e.g., "text", "radio", "textarea").
 * @param {Array<string>} [surveyBody.fields[].options] - An array of options for fields like radio, checkbox, and dropdown.
 * @returns {Promise<Object>} A promise that resolves to the created survey object.
 */
const createSurvey = async (surveyBody) => {
  return Survey.create(surveyBody);
}

/**
 * get a survey by id
 * @param {ObjectId} surveyId
 * @returns {Promise<Object>}
 */
const getSurvey = async (surveyId) => {
  const survey = await Survey.findById(surveyId).populate('owner');
  return survey;
}

/**
 * Queries surveys based on the provided filter and options.
 * @param {Object} filter - The filter criteria for querying surveys.
 * @param {Object} options - The options for pagination and other query settings.
 * @returns {Promise<Object>} A promise that resolves to an object containing paginated survey results.
 */
const querySurvies = async (filter, options) => {
  const survies = await Survey.paginate(filter, options).populate('owner');
  return survies;
}

// const updateSurvey = async (surveyId, surveyBody) => {
//   const 
// }

/**
 * @param {ObjectId} surveyId
 * @returns {Promise<Object>}
 */
const deleteSurvey = async (surveyId) => {
  const deletedSurvey = await Survey.deleteOne({ _id: surveyId })
  return deletedSurvey;
}

module.exports = {
  createSurvey,
  getSurvey,
  querySurvies,
  deleteSurvey
}
