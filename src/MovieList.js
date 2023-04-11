import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Card'
import { useParams } from 'react-router'
import Pagination from './Pagination'
const MovieList = () => {
    const [movielist, setMovielist] = useState([])
    const [pageno, setPageno] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const goAhead = () => {
        setPageno(pageno + 1)
    }
    const goback = () => {
        if (pageno > 1) {
            setPageno(pageno - 1)
        }
    }
    const { types } = useParams()

    useEffect(() => {


        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=cddb112f0b930f95fcf4a1307f5285d1&query=${searchQuery}`;


        axios.get(apiUrl)
            .then((response) => {
                if (searchQuery !== "") {
                    setMovielist(response.data.results)
                    console.log(response.data.results);
                }
            });
    }, [searchQuery]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${types ? types : "popular"}?api_key=cddb112f0b930f95fcf4a1307f5285d1&page=${pageno}`)
            .then((respons) => {
                setMovielist(respons.data.results)
                console.log(respons.data.results)
            })
    }, [types, pageno])
    
    return (
        <>
            <div className='md:px-4 px-2 '>
                <input type='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='text-red-900 border border-red-900 mx-auto flex mt-4 p-4' placeholder='search movie' />
                <h1>{(types ? types : "POPULAR".toUpperCase())}</h1>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
                    {movielist.map((movie) => (
                        <Cards movies={movie} />
                    ))}
                </div>
                <Pagination page={pageno} goback={goback} goAhead={goAhead} />
            </div>
        </>
    )
}

export default MovieList
