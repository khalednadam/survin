const { surveyService } = require(".");
const { Response } = require("../models");
const ApiError = require("../utils/ApiError");
const googleStorage = require("../utils/googleStorage");

/**
 * Creates a new response for a survey.
 * @param {Object} responseBody - The body of the response containing the response details.
 * @param {ObjectId} responseBody.survey- The ID of the survey to which the response belongs.
 * @param {Array<Object>} responseBody.answers - An array of objects containing the response to each field in the survey.
 * @param {ObjectId} responseBody.answers[].fieldId - The ID of the field to which the response belongs.
 * @param {*} responseBody.answers[].value - The response value.
 * @returns {Promise<Object>} A promise that resolves to the created response object.
 */
const createResponse = async (responseBody) => {
  const survey = await surveyService.getSurvey(responseBody.survey);
  // if (file) {
  //   const imgUrl = await googleStorage.uploadToGoogleStorage(file.originalname, file.buffer);
  //   = imgUrl;
  // }
  survey.fields.map((field, i) => {
    if ((!responseBody.answers[i].value || responseBody.answers[i].value.length === 0) && field.required) {
      console.log(responseBody.answers[i].value.length === 0)
      throw new ApiError(httpStatus.METHOD_NOT_ALLOWED, "Please fill all the required fields");
    }
  })
  return Response.create(responseBody);
}

const getResponse = async (responseId) => {
  try {
    const response = await Response.findById(responseId).populate('survey')
    const fields = response.survey.fields;
    console.log(fields);
    return response;
  } catch (error) {
    console.error("Error populating fields for response:", error);
    throw error;
  }
}

/**
 * Get responses submitted by a user.
 * @param {ObjectId} userId - The ID of the user for which responses are requested.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array containing responses submitted by the user.
 */
const getResponsesByUser = async (userId) => {
  return Response.find({ userId }).populate('survey');
}


/**
 * Queries responses based on the provided filter and options.
 * @param {Object} filter - The filter criteria for querying responses.
 * @param {Object} options - The options for pagination and other query settings.
 * @returns {Promise<Object>} A promise that resolves to an object containing paginated response results.
 */
const queryResponses = async (filter, options) => {
  options.populate = 'survey,user';
  const responses = await Response.paginate(filter, options);
  return responses;
}

module.exports = {
  createResponse,
  getResponse,
  getResponsesByUser,
  queryResponses
};

