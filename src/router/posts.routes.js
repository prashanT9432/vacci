const express = require("express");
const { getPosts, onSave } = require("../controller/post.controller");

const router = express.Router();




// http://localhost:9090/views/Home
router.get("/Home", onSave)

module.exports = router;