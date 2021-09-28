var express = require("express");
const membershipController = require("../../controllers/membership/membershipController");
const con = require("../../modules/mysql");
var router = express.Router();
const upload = require("../../modules/awsUpload");

router.get("/:gender", membershipController.detailMembership);
router.post("/", membershipController.uploadMembership);
router.post("/images", upload.single("img"), membershipController.uploadImage);
router.get("/", membershipController.readAllMembership);

module.exports = router;
