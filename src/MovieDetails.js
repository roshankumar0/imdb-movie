import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cddb112f0b930f95fcf4a1307f5285d1&append_to_response=videos`)
            .then((res) => {
                setDetails(res.data);
            });
    }, [id]);

    const videoKey = details.videos?.results[0]?.key;

    return (
        <div>
            {videoKey ? (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoKey}`}
                        title={details.title}
                        allowFullScreen
                    />
                </div>
            ) : (
                <p>No video available</p>
            )}
        </div>
    );
};

export default MovieDetails;
