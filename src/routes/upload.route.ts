import { Router } from 'express'
import uploadImages from '../middlwares/uploadImages'

const router = Router()

router.post('/upload/image', uploadImages.array('images'), (req, res) => {
  if (!req.files) return res.status(400).json({ msg: 'No uploaded file' })

  const photosData = req.files.map((file) => ({
    fileName: file.filename,
    filePath: `http://localhost:5050/${file.filename}`, //путь, который будет доступен от localhost'а клиента
  }))
  res.json(photosData)
})

export default router
