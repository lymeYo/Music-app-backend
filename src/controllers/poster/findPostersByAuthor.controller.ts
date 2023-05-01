import Poster, { PosterModel } from '../../models/poster'

export const findPostersByAuthor = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let { orderBy, page } = req.query
    const pageNubmer = page ? +page : 1
    orderBy = orderBy == 'DESC' ? 'DESC' : 'ASC'
    const limit = 3
    const offset = (pageNubmer - 1) * limit
    const authorId = req?.user?.id
    const posters: PosterModel[] | null = await Poster.findAll({
      where: { authorId },
      limit,
      offset,
      order: [['createdAt', orderBy]],
    })
    return res.json(posters)
  } catch (e) {
    return res.status(400).send('Cannot find posters at this moment')
  }
}
