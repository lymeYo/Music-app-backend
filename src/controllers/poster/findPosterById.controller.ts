import Poster, { PosterModel } from '../../models/poster'
import { Request, Response } from 'express'

export const findPosterById = async (req: Request, res: Response) => {
  try {
    const { id: posterId } = req.params
    const poster: PosterModel | null = await Poster.findOne({
      where: { id: +posterId },
    })
    if (!poster)
      return res.status(500).send('Poster with this id are not existed')

    return res.json(poster)
  } catch (e) {
    console.error(e)

    return res.status(400).send('Cannot find poster at this moment')
  }
}
