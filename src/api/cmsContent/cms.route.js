const rconst router = require("express").Router();
const cmsContent = require("./cms.controller");
const config = require("../../config");

rounter.route("/").get(cmsContent.testing);

module.exports = router;
