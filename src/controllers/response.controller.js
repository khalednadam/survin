const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { responseService, surveyService } = require("../services");

const createResponse = catchAsync(async (req, res) => {
  const response = await responseService.createResponse(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const getResponse = catchAsync(async (req, res) => {
  const response = await responseService.getResponse(req.params.id);
  res.send(response);
})

const queryResponsesBySurvey = catchAsync(async (req, res) => {
  const filter = { survey: req.params.surveyId };
  const survey = await surveyService.getSurvey(req.params.surveyId);
  if (survey.owner._id.toString() !== req.session.user.id.toString()) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
  }
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const responses = await responseService.queryResponses(filter, options);
  res.send(responses);
})

module.exports = {
  createResponse,
  getResponse,
  queryResponsesBySurvey
}
