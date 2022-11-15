const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('../config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
const userRoute = require('./routes/users/userRoutes');
const app = express();

//env file
dotenv.config()

// dbConnect
dbConnect()

//middleware
app.use(express.json())

//routes
app.use('/api/users', userRoute)

//Error
app.use(notFound)
app.use(errorHandler)

//income

//expenses

module.exports = app; 