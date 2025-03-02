const Transaction = require("../models/Transaction");

// Add a new transaction
const addTransaction = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;
    const userId = req.user.id; // Get user from token

    const newTransaction = new Transaction({
      userId,
      amount,
      type,
      category,
      date,
      note,
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all transactions for a user
const getTransactions = async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({ userId });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const transactionId = req.params.id;
    await Transaction.findByIdAndDelete(transactionId);
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addTransaction, getTransactions, deleteTransaction };
