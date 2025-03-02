const express = require("express");
const { registerUser } = require("../controllers/userController"); // ✅ Ensure correct import
const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
