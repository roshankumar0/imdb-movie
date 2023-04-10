import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cddb112f0b930f95fcf4a1307f5285d1&page=1")
      .then((respons) => {
        setMovie(respons.data.results)
        // console.log(respons.data.results)
      })
  }, [])
  return (
    <div >
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1}
        showStatus={false}
        showThumbs={false}
      >
        {movie?.map((imdb) => {
          return (
            <Link to={`/movie/${imdb.id}`}>
              <div key={imdb.id}>
                <div className=''>
                  <img className='h-[40vh] '
                    src={`https://image.tmdb.org/t/p/original/${imdb.backdrop_path}`}
                    alt={imdb.original_title}
                  />
                </div>
                <div className='text-xl text-white py-2 bg-[#333]'>
                  <h1 >{imdb.original_title}</h1>
                  <h1>{`${imdb?.overview.length > 150 ? `${imdb.overview.slice(0, 150)}...` : imdb.overview}`}</h1>
          
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>

  )
}

export default Banner