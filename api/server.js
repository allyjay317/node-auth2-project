const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const userRouter = require('../users/userrouter')
const authRouter = require('../auth/authrouter')
const errorMiddleware = require('./error-middleware')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)


module.exports = server