const express = require('express')
const userRouter = require('./routes/user.js')
const patientPostAPIsRouter = require('./routes/patientPostRouter.js')
const patientGetAPIsRouter = require('./routes/patientGetRouter.js')
const cors = require('cors')
const sessionsRouter = require('./routes/sessionsRouter.js')

const app = express()
app.use('/uploads', express.static('uploads'))
app.use(express.json()) // For JSON bodies
app.use(express.urlencoded({ extended: true })) // For form data
app.use(cors())

app.get('/hello', (req, res) => {
  res.send('HI I EXIST!!')
})

app.use('/api/user', userRouter)
app.use('/patients/post', patientPostAPIsRouter)
app.use('/patients/get', patientGetAPIsRouter)
app.use('/sessions', sessionsRouter)

// Your middleware and routes here

const PORT = 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err)
  app.exit(1)
})

app.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  app.exit(1)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`)
  } else {
    console.error('Server error:', err)
  }
  process.exit(1)
})
