import { Request, Response } from 'express'
import Poster, { IPoster, PosterModel } from '../../models/poster'

export const createPoster = async (req, res) => {
  try {
    const posterData: IPoster = {
      authorId: +req?.user?.id,
      category: req.body.category,
      price: req.body.price,
      name: req.body.name,
      condition: req.body.condition,
      location: req.body.location,
      description: req.body.description,
      images: req.body.images,
    }

    const poster = await Poster.create(posterData)
    return res.json(poster)
  } catch (e) {
    console.error(e)
    res.status(400).send('Cannot create poster at the moment')
  }
}
