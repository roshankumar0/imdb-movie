import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Card'
import { useParams } from 'react-router'
const MovieList = () => {
    const [movielist, setMovielist] = useState([])
    const { types } = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${types ? types : "popular"}?api_key=cddb112f0b930f95fcf4a1307f5285d1&page=1`)
            .then((respons) => {
                setMovielist(respons.data.results)
                console.log(respons.data.results)
            })
    }, [types])
    return (
        <>
        <div className='md:px-4'>
            <h1>{(types ? types : "POPULAR".toUpperCase())}</h1>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
                {movielist.map((movie) => (
                    <Cards movies={movie} />
                ))}
            </div>
            </div>
        </>
    )
}

export default MovieList
