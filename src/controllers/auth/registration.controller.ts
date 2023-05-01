import { Request as ReqExpress, Response as ResExpress } from 'express'
import User from '../../models/user'

export const registration = async (req: ReqExpress, res: ResExpress) => {
  try {
    const { username, password } = req.body

    const existUser = await User.findOne({ where: { username } })
    if (existUser)
      return res.status(400).send('User with this name already exist')

    const newUser = await User.create({ username, password })
    if (newUser) return res.send('succesfull')
  } catch (e) {
    console.error(e)
    return res.status(500).send('Cannot create user at the moment')
  }
}
