require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//Express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

// connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //listener to requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT)
})
    })
    .catch((error) =>{
        console.log(error)
    })

