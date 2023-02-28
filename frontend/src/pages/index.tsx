import { callSearch } from '../api/searchResults/callSearch'
import SearchBox from '../components/SearchBox'
import { SearchBoxValues } from '../interfaces/searchBox'
import React, { useState, useCallback, useContext } from 'react'
import { SearchResult } from '../interfaces/searchResults'
import { SearchResultContext } from '../context/searchResultContext'
import CustomLink from '../components/CustomLink'

const MainPage: React.FC = () => {
  const { results, setResults } = useContext(SearchResultContext)
  const onSubmit = useCallback(
    async (values: SearchBoxValues) => {
      const searchResults = await callSearch(values.query)
      if (typeof searchResults !== 'string') setResults(searchResults)
    },
    [results]
  )
  return (
    <div className="flex flex-col gap-y-4 p-8 mx-auto justify-center items-center">
      <SearchBox onSubmit={onSubmit} />
      {results?.length > 0 && (
        <div className="grid grid-cols-2 gap-4 py-2">
          {results.map((x, key) => (
            <React.Fragment key={key}>
              <img
                src={`/images${x.photo}`}
                className="max-w-96 xl:max-w-[500px]"
              />
              <div className="flex flex-col gap-y-4 justify-center">
                <CustomLink to={`/${x._id}`}>
                  <h4 className="font-bold font-mono text-lg xl:text-2xl uppercase">
                    {x.title}
                  </h4>
                </CustomLink>
                <p className="text-md text-slate-400">{x.shortDescription}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default MainPage
