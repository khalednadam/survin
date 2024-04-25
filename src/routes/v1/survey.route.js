const express = require("express");
const { surveyController } = require("../../controllers");
const router = express.Router();

router.post("/", surveyController.createSurvey);
router.route("/:id")
  .get(surveyController.getSurvey)
  .delete(surveyController.deleteSurvey);
router.get("/survies", surveyController.querySurvies);

module.exports = router;
