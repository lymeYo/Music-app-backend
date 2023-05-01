import { Request as ReqExpress, Response as ResExpress } from 'express'
import User, { UserModel } from '../../models/user'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    const user: UserModel | null = await User.findOne({ where: { username } })

    if (!user || user.password !== password)
      return res
        .status(500)
        .send({ message: 'User with this data are not existed' })

    const token = jwt.sign(
      {
        id: user?.id,
        username: user?.username,
      },
      process.env.JWT_SECRET as string,
    )

    return res.json({ token })
  } catch (e) {
    console.error(e)
    return res.status(400).send('Cannot login at the moment')
  }
}
