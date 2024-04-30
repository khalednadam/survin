const { Response } = require("../models");

/**
 * Creates a new response for a survey.
 * @param {Object} responseBody - The body of the response containing the response details.
 * @param {ObjectId} responseBody.surveyId - The ID of the survey to which the response belongs.
 * @param {Array<Object>} responseBody.answers - An array of objects containing the response to each field in the survey.
 * @param {ObjectId} responseBody.answers[].fieldId - The ID of the field to which the response belongs.
 * @param {*} responseBody.answers[].value - The response value.
 * @returns {Promise<Object>} A promise that resolves to the created response object.
 */
const createResponse = async (responseBody) => {
  return Response.create(responseBody);
}

const getResponse = async (responseId) => {
  try {
    const response = Response.findById(responseId).populate('survey')
    return response;
  } catch (error) {
    console.error("Error populating fields for response:", error);
    throw error;
  }
}


/**
 * Get responses for a survey.
 * @param {ObjectId} surveyId - The ID of the survey for which responses are requested.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array containing responses for the survey.
 */
const getResponsesForSurvey = async (surveyId) => {
  try {
    const aggregationPipeline = [
      {
        $match: { survey: ObjectId(surveyId) } // Match responses for a specific survey
      },
      {
        $lookup: {
          from: "surveys",
          localField: "survey",
          foreignField: "_id",
          as: "survey"
        }
      },
      {
        $unwind: "$survey" // Unwind the survey array created by the lookup
      },
      {
        $addFields: {
          "fields": "$survey.fields" // Add fields from the survey to each response
        }
      }
    ];

    const populatedResponses = await Response.aggregate(aggregationPipeline);
    return populatedResponses;
  } catch (error) {
    console.error("Error populating fields for responses:", error);
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
  options.populate = options.populate ? `survey` : 'survey';
  const responses = await Response.paginate(filter, options);
  return responses;
}

module.exports = {
  createResponse,
  getResponse,
  getResponsesForSurvey,
  getResponsesByUser,
  queryResponses
};

