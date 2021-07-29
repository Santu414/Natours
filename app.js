const express = require('express');
const fs = require('fs')
const morgan = require('morgan')

const app = express();

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)


const port = process.env.PORT | 3000;

app.listen(port,console.log(`App is running on port number ${port}`))