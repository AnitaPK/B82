import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Info from './components/Info'
import CharsInDoremon from './components/CharsInDoremon'
import MovieCollection from './components/MovieCollection'
import {movies,funFacts} from './tributeData'

function App() {

  return (
    <>
      <Header />
      <Gallery />
      <Info />
      <CharsInDoremon />
      <MovieCollection movies={movies} funFacts={funFacts} />
     </>
  )
}

export default App
