const express = require("express");
const { addTransaction, getTransactions } = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/authMiddleware");  // ✅ Import only once

const router = express.Router();

router.post("/add", authMiddleware, addTransaction);
router.get("/get", authMiddleware, getTransactions);

module.exports = router;
