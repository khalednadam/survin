const express = require("express");
const { surveyController } = require("../../controllers");
const sessionAuth = require("../../middlewares/sessionAuth");
const router = express.Router();

router.post("/", surveyController.createSurvey);
router.get("/surveys", surveyController.querySurveys);
router.get("/my-surveys", surveyController.queryMySurveys);
router.route("/:id")
  .get(surveyController.getSurvey)
  .put(surveyController.updateSurvey)
  .delete(sessionAuth, surveyController.deleteSurvey);

module.exports = router;
