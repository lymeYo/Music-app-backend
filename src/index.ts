import express from 'express'
import path from 'path'
import uploadRouter from './routes/upload.route'
import authRouter from './routes/auth.route'

const app = express()
const PORT = 5050

app.listen(PORT, () => {
  console.log(PORT, ' listen...')
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.use('/', express.static(path.join(__dirname, 'upload/images')))

app.use(uploadRouter)

app.use(authRouter)
