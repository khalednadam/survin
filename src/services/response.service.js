const { Response } = require("../models");

/**
 * Creates a new response for a survey.
 * @param {Object} responseBody - The body of the response containing the response details.
 * @param {ObjectId} responseBody.surveyId - The ID of the survey to which the response belongs.
 * @param {ObjectId} responseBody.userId - The ID of the user who submitted the response.
 * @param {Array<Object>} responseBody.answers - An array of objects containing the response to each field in the survey.
 * @param {ObjectId} responseBody.answers[].fieldId - The ID of the field to which the response belongs.
 * @param {*} responseBody.answers[].value - The response value.
 * @returns {Promise<Object>} A promise that resolves to the created response object.
 */
const createResponse = async (responseBody) => {
  return Response.create(responseBody);
}

/**
 * Get responses for a survey.
 * @param {ObjectId} surveyId - The ID of the survey for which responses are requested.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array containing responses for the survey.
 */
const getResponsesForSurvey = async (surveyId) => {
  return Response.find({ surveyId }).populate('userId');
}

/**
 * Get responses submitted by a user.
 * @param {ObjectId} userId - The ID of the user for which responses are requested.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array containing responses submitted by the user.
 */
const getResponsesByUser = async (userId) => {
  return Response.find({ userId }).populate('surveyId');
}


module.exports = {
  createResponse,
  getResponsesForSurvey,
  getResponsesByUser,
  deleteResponsesForSurvey
};

