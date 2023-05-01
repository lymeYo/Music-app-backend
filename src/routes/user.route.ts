import { Router } from 'express'
import { getProfile } from '../controllers/user/profile.controller'
import passport from 'passport'

const router = Router()

router.get(
  '/user/profile',
  passport.authenticate('jwt', { session: false }),
  getProfile,
)

export default router
