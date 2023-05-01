import dotenv from 'dotenv'
dotenv.config() //config должен быть в самом начале, иначе .env переменные не работают в authRouter

import express from 'express'
import path from 'path'
import uploadRouter from './routes/upload.route'
import authRouter from './routes/auth.route'
import userRouter from './routes/user.route'
import posterRouter from './routes/poster.route'
import './auth/passport'

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(PORT, ' listen...')
})

app.use(express.json())

app.use(express.urlencoded())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.use('/', express.static(path.join(__dirname, 'upload/images')))

// app.use('test', (req, res) => {})

app.use(uploadRouter)

app.use(authRouter)

app.use(userRouter)

app.use(posterRouter)
