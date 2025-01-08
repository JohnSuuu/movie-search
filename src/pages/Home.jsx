import "../css/Home.css"
import MovieCard from "../components/MovieCards"
import { useEffect, useState } from "react"

import { getPopularMovies, searchMovies } from "../services/api"

function Home() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovie = async ()=>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError('there is something wrong...')
            }finally{
                setLoading(false)
            }
        }
        loadPopularMovie()
    }, [])

    const handleSubmit = async (e)=> {
        e.preventDefault()
        if (!query.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(query)
            setMovies(searchResults)
        }catch(err){
            console.log(err)
            setError("there's something wrong")
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className='home'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input 
                className='search-input'
                type="text"
                placeholder="search movies...."
                value = {query}
                onChange={(e)=> setQuery(e.target.value)} />
                <button className='search-button' type="Submit">Search</button>
            </form>
            {loading ? ('nono'):(<div className='movies-grid'>
                
                {movies.map(movie => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>)}
            
        </div>
    )
}

export default Home