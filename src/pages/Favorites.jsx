import { useMovieContext } from "../contexts/MovieContexts"
import MovieCard from "../components/MovieCards"

function Favorites() {

    const { favorites } = useMovieContext()

    return (
        <>
            {favorites.length === 0 ? (
                <div>nothing</div>
            ) : (
                <div className='movies-grid'>
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </>

    )
}

export default Favorites