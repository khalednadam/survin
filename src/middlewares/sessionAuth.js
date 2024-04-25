const { surveyService } = require("../services");

const sessionAuth = async (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Please login' });
  }
  const surveyId = req.params.id || req.body.id;
  if (!surveyId) {
    return res.status(401).json({ message: 'id is required' });
  }
  const survey = await surveyService.getSurvey(surveyId);
  const isOwner = survey.owner.id.toString() === req.session.user.id;
  if (!isOwner) {
    return res.status(401).json({ message: 'you are not a member of this board' });
  }
  next();
};

module.exports = sessionAuth;

