const httpStatus = require("http-status");
const { surveyService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");

const createSurvey = catchAsync(async (req, res) => {
  if (!req.session.user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please login")
  }
  req.body.owner = req.session.user.id;
  const survey = await surveyService.createSurvey(req.body);
  res.status(httpStatus.CREATED).send(survey);
});

const getSurvey = catchAsync(async (req, res) => {
  const survey = await surveyService.getSurvey(req.params.id);
  res.send(survey);
});

const querySurveys = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["title", "owner"]);
  const options = pick(req.query, ["sort", "limit", "page"]);
  const surveys = await surveyService.querySurveys(filter, options);
  res.send(surveys);
});

const queryMySurveys = catchAsync(async (req, res) => {
  const filter = { owner: req.session.user.id };
  if (req.query.title && req.query.title.trim().length > 1) {
    filter.title = { $regex: req.query.title, $options: 'i' };
  }
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const surveys = await surveyService.querySurveys(filter, options);
  res.send(surveys);
})

const deleteSurvey = catchAsync(async (req, res) => {
  const survey = await surveyService.deleteSurvey(req.params.id);
  res.status(httpStatus.NO_CONTENT).send(survey);
});

const updateSurvey = catchAsync(async (req, res) => {
  const survey = await surveyService.updateSurvey(req.params.id, req.body);
  res.status(httpStatus.OK).send(survey);
})

module.exports = {
  createSurvey,
  getSurvey,
  querySurveys,
  deleteSurvey,
  queryMySurveys,
  updateSurvey
}
