import { expect } from 'chai'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import { SearchResult } from '../src/models/searchResult'

describe('Search for rome', async () => {
  config()
  await mongoose.connect(process.env.MONGO_DB_URL || '')
  const result = await SearchResult.find({
    title: {
      $regex: 'rome',
      $options: 'i',
    },
  })
  expect(result.length).to.above(0)
})
