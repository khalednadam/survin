const express = require("express");
const { responseController } = require("../../controllers");
const multer = require("multer");
// const sessionAuth = require("../../middlewares/sessionAuth");
const router = express.Router();
const storage = multer.memoryStorage({
  destination: 'uploads/', // Specify the destination folder for uploaded files
  filename: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.pdf') {
      req.fileValidationError = "Forbidden extension";
      return cb(null, false, req.fileValidationError);
    }
    const timestamp = Date.now();
    const fileExtension = file.originalname.split('.').pop(); // Get the file extension
    const filename = `${file.fieldname}-${timestamp}.${fileExtension}`;
    callback(null, filename);
  }
});
const upload = multer({ storage: storage });

router.post("/", upload.single('file'), responseController.createResponse);
router.get("/:id", responseController.getResponse);
router.get("/of/:surveyId", responseController.queryResponsesBySurvey);

module.exports = router;
