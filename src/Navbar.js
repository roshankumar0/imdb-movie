import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#333] text-xl text-white md:py-[10px] flex items-center gap-[50px] md:px-[50px] justify-center'>
           <Link to={`/`}>
           <div className="logo">Home</div>
           </Link>
            <nav>
                <ul className={`flex gap-[5px] py-[20px]`}>
                    <Link to={`/movies/popular`}><li>Popular</li></Link>
                    <Link to={`/movies/top_rated`}><li>Top rated</li></Link>
                    <Link to={`/movies/upcoming`}><li>Upcoming</li></Link>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
