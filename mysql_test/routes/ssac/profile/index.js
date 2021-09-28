var express = require("express");
const profileController = require("../../../controllers/profile/profileController.js");
const con = require("../../../modules/mysql");
var router = express.Router();
const upload = require("../../../modules/awsUpload");

router.post("/images", upload.single("img"), profileController.uploadImage);
router.get("/", profileController, readAllRrofile);
router.post("/", profileController.uploadProfile);

module.exports = router;
