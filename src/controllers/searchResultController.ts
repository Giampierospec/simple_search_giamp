import { Request, Response } from 'express'
import { SearchResult } from '../models/searchResult'

export const searchEndpoint = async (req: Request, res: Response) => {
  try {
    const { q } = req.query
    const results = await SearchResult.find({
      title: {
        $regex: `${q}`,
        $options: 'i',
      },
    })
    if (!results.length) return res.status(404).send('No Result Found')
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error?.message)
  }
}
