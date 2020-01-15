const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/db");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDatabase();

// Route files
const auth = require("./routes/auth");
const profile = require("./routes/profile");

const app = express();

// Body parser
app.use(express.json());

app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/profile", profile);

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
