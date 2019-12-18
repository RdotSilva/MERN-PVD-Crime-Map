const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDatabase();

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections by logging error and closing server
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
