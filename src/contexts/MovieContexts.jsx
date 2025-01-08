import { useContext, useState, createContext, useEffect  } from "react";

const MovieContext = createContext()

export const useMovieContext = ()=> useContext(MovieContext)

export const MovieProvider = ({children})=> {

    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        console.log('Stored favorites from localStorage:', storedFavs); 
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

     useEffect(() => {
        if (favorites.length > 0 ){
            localStorage.setItem('favorites', JSON.stringify(favorites));  
    }
        }, [favorites]);

    const isFav = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const addToFav = (movie)=> {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFav = (movieId) => {
        setFavorites(favorites.filter(movie => movie.id !== movieId
        ))
    }


    const value = {
        favorites,
        isFav,
        addToFav,
        removeFromFav
    }
    return (
        <MovieContext.Provider value = {value}>
            {children}
        </MovieContext.Provider>        
    )

}

