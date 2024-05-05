const httpStatus = require("http-status");
const { surveyService } = require(".");
const { Response, Survey } = require("../models");
const ApiError = require("../utils/ApiError");
const { sendEmail } = require("./email.service");
const { baseURL } = require("../config/config");
const { response } = require("express");

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
  if (survey.isClosed) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This survey is closed");
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  survey.fields.map((field, i) => {
    if ((!responseBody.answers[i].value || responseBody.answers[i].value.length === 0) && field.required) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Please fill all the required fields");
    }
    if (field.type === 'email' && !emailRegex.test(responseBody.answers[i].value)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email is not valid");
    }
  })
  await Survey.findOneAndUpdate({ _id: survey._id.toString() }, { responsesCount: survey.responsesCount + 1 });
  const response = await Response.create(responseBody);
  await response.populate(['survey', 'user']);
  const msg = `
  <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="color: #333;">New Survey Response!</h1>
  <p style="color: #666; line-height: 1.6;">Hello ${survey.owner.name},</p>
  <p style="color: #666; line-height: 1.6;">You have received a new response on your survey "<strong>${survey.title}</strong>".</p>
  $
      <p style="color: #666; line-height: 1.6;">To view the response click the button below:</p>
  <p style="color: #666; line-height: 1.6;"><a href="${baseURL}/responses/${survey._id}?response=${response._id}" style="display: inline-block; padding: 10px 20px; background-color: #213BAA; color: #fff; text-decoration: none; border-radius: 5px;">View Response</a></p>
      <p style="color: #666; line-height: 1.6;">Thank you for using Survin!</p>
      <p style="color: #666; line-height: 1.6;">Best regards,<br> The Survin Team</p>
    </div>
  `
  await sendEmail(survey.owner.email, `New response to ${survey.title}`, msg);
  return response;
}

const getResponse = async (responseId) => {
  try {
    const response = await Response.findById(responseId).populate('survey')
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

