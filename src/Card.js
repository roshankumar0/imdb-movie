import React from 'react'
import { Link } from 'react-router-dom'
const Cards = ({ movies }) => {
    return (
        <Link to={`/movies/${movies.id}`}>
            <div className='flex flex-col'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                    alt={movies.original_title}
                />
                <div><h1>{movies.original_title}</h1></div>
            </div>
        </Link >
    )
}

export default Cards
