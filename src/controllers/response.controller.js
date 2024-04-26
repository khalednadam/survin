const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const { ApiError } = require("../utils/ApiError");
const httpStatus = require("http-status");
const { responseService } = require("../services");

const createResponse = catchAsync(async (req, res) => {
  const response = await responseService.createResponse(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const getResponse = catchAsync(async (req, res) => {
  const response = await responseService.getResponse(req.params.id);
  console.log(req.params.id);
  res.send(response);
})

module.exports = {
  createResponse,
  getResponse
}
