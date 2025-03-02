const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes"); // Import user routes

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Define Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { })
    .then(() => console.log("MongoDB Connected: localhost"))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
