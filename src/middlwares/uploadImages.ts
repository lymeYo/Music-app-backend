import multer from 'multer'
import path from 'path'

const imagesPath = path.resolve(__dirname, '../upload/images')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imagesPath)
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + '-' + path.extname(file.originalname))
  },
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
  cb(null, types.includes(file.mimetype))
}

const uploadImages = multer({ storage, fileFilter })
export default uploadImages
