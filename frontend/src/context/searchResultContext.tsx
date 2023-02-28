import React, { Dispatch, SetStateAction, useState, createContext } from 'react'
import { SearchResult } from '../interfaces/searchResults'

interface ISearchResultContext {
  results: SearchResult[]
  setResults: Dispatch<SetStateAction<SearchResult[]>>
}
//@ts-ignore
export const SearchResultContext = createContext<ISearchResultContext>(null)

const SearchResultContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [results, setResults] = useState<SearchResult[]>([])
  return (
    <SearchResultContext.Provider value={{ results, setResults }}>
      {children}
    </SearchResultContext.Provider>
  )
}

export default SearchResultContextProvider
