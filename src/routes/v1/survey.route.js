const express = require("express");
const { surveyController } = require("../../controllers");
const sessionAuth = require("../../middlewares/sessionAuth");
const router = express.Router();

router.post("/", surveyController.createSurvey);
router.get("/survies", surveyController.querySurvies);
router.route("/:id")
  .get(surveyController.getSurvey)
  .delete(sessionAuth, surveyController.deleteSurvey);

module.exports = router;
