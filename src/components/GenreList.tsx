import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { data, error, isLoading } = useGenres()
    return (
        <div>
            {data.map(g => <p>{g.name}</p>)}
        </div>
    )
}

export default GenreList