import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Navbar from './Navbar'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'

const App = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movie/:id' element={<MovieDetails />} />
                <Route path='movies/:types' element={<MovieList />} />
                <Route path='*' element={<div>this page is not found</div>} />
            </Routes>
        </>
    )
}

export default App
