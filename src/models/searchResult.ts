import { model, Schema } from 'mongoose'

export interface ISearchResult {
  title: string
  photo: string
  description: string
  shortDescription: string
}

const SearchResultSchema = new Schema<ISearchResult>({
  title: { type: String },
  photo: { type: String },
  description: { type: String },
  shortDescription: { type: String },
})

export const SearchResult = model<ISearchResult>(
  'searchResult',
  SearchResultSchema
)
