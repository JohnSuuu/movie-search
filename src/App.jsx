import Home from './pages/Home'
import '../src/css/App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"
import Favorites from './pages/favorites'
import { MovieProvider } from './contexts/MovieContexts'
import Dislike from './pages/Dislike'

function App() {


  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path='/movie-search' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/dislike' element={<Dislike />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
