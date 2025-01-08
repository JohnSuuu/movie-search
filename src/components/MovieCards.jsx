import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContexts"

function MovieCard({movie}){

    const {isFav, addToFav, removeFromFav } = useMovieContext()
    const favorite = isFav(movie.id)

    const onFavClick = (e)=> {
        e.preventDefault()
        if(favorite) removeFromFav(movie.id)
        else addToFav(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                    <button 
                    className={`favorite-btn ${favorite ? "active" : ''} `}
                    onClick = {onFavClick}
                    >❤</button>
                </div>
            </div>

            <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard