import CustomLink from '../components/CustomLink'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { SearchResultContext } from '../context/searchResultContext'
import { SearchResult } from '../interfaces/searchResults'
const Details: React.FC = () => {
  const { id } = useParams()
  const { results } = useContext(SearchResultContext)

  const result = useMemo(() => {
    return results.find((x) => x._id == id) ?? null
  }, [results, id])
  return (
    <div className="flex flex-col gap-y-4 p-8 items-center">
      <CustomLink to="/">Go back to search results</CustomLink>
      {result && (
        <React.Fragment>
          <img src={`/images${result.photo}`} />
          <p className="text-lg xl:text-2xl">{result.description}</p>
        </React.Fragment>
      )}
    </div>
  )
}
export default Details
