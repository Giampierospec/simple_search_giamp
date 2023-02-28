import client from '../../helpers/axios-helper'
import { SearchResult } from '../../interfaces/searchResults'

export const callSearch = async (
  query: string
): Promise<SearchResult[] | string> => {
  try {
    const { data } = await client.get(`api/search?q=${query}`)
    return data
  } catch (error: any) {
    return error?.message
  }
}
