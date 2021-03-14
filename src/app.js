const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routers/user')
require('./db/db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})