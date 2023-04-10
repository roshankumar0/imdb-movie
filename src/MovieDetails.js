import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const MovieDetails = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cddb112f0b930f95fcf4a1307f5285d1`)
            .then((res) => {
                setDetails(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                alt="" />
            <h1>{details.title}</h1>
        </div>
    )
}

export default MovieDetails
