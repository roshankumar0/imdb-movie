import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-900  text-xl text-white md:py-[10px] flex items-center gap-[50px] md:px-[50px]'>
           <Link to={`/`}>
           <div className="logo">Home</div>
           </Link>
            <nav>
                <ul className={`flex md:gap-[50px]`}>
                    <Link to={`/movies/popular`}><li>Popular</li></Link>
                    <Link to={`/movies/top_rated`}><li>Top rated</li></Link>
                    <Link to={`/movies/upcoming`}><li>Upcoming</li></Link>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
