require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');
const room = require("./routes/roomRoutes");
const { errorHandler } = require('./middleware/errorHandler');
const bookingRoutes = require("./routes/bookingRoutes")
const userRoutes = require("./routes/userRoutes")
const cookieParser = require("cookie-parser");
const { auth } = require('./middleware/authMidlleware');

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middlewares
app.use(cookieParser())
app.use(express.json());

//routes
app.use("/auth", auth)
app.use("/api/rooms", room)
app.use("/api/bookings", bookingRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`));
