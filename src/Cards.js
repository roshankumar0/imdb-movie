import React, { useState } from 'react';

const Cards = ({ movies }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=''>
      <div className=''>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
        />
      </div>
      <div className=''>
        <h1 className=''>{movies.title}</h1>
        <p className=''>{movies.overview}</p>
        {movies.video && (
          <div className=''>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? 'Stop' : 'Play'}
            </button>
            {isPlaying && (
              <video
                controls
                src={`https://www.youtube.com/watch?v=${movies.video}`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
