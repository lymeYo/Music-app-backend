import { Op } from 'sequelize'
import Poster, { PosterModel } from '../../models/poster'
import { Request, Response } from 'express'

export const findPosters = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line prefer-const
    let { searchBy = '', orderBy, page } = req.query
    const pageNubmer = page ? +page : 1
    orderBy = orderBy == 'DESC' ? 'DESC' : 'ASC'
    const limit = 8
    const offset: number = (pageNubmer - 1) * limit

    const posters: PosterModel[] | null = await Poster.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${searchBy}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${searchBy}%`,
            },
          },
        ],
      },
      limit,
      offset,
      order: [['createdAt', orderBy]],
    })
    return res.json(posters)
  } catch (e) {
    return res.status(400).send('Cannot find posters at this moment')
  }
}
