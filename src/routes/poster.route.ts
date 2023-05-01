import { Router } from 'express'
import { findPosters } from '../controllers/poster/findPosters.controller'
import { createPoster } from '../controllers/poster/createPoster.controller'
import { findPosterById } from '../controllers/poster/findPosterById.controller'
import passport from 'passport'
import { findPostersByAuthor } from '../controllers/poster/findPostersByAuthor.controller'

const router = Router()

router.get('/poster', findPosters)

router.get(
  '/poster/byAuthor',
  passport.authenticate('jwt', { session: false }),
  findPostersByAuthor,
)

router.get('/poster/:id', findPosterById)

router.post(
  '/poster',
  passport.authenticate('jwt', { session: false }),
  createPoster,
)

export default router
