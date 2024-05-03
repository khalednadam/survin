const express = require("express");
const { responseController } = require("../../controllers");
// const sessionAuth = require("../../middlewares/sessionAuth");
const router = express.Router();

router.post("/", responseController.createResponse);
router.get("/:id", responseController.getResponse);
router.get("/of/:surveyId", responseController.queryResponsesBySurvey);

module.exports = router;
