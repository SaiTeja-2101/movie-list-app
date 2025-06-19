import {createContext,useContext,useEffect,useState} from 'react';
const MovieContext=createContext();
export const useMovieContext=()=>{
    return useContext(MovieContext);
}
export const MovieProvider=({children})=>{
    const [favs,setfavs]=useState([]);
    useEffect(()=>{
        const storedFavs=localStorage.getItem('favs');
        if(storedFavs){
            setfavs(JSON.parse(storedFavs));
        }
    },[]);
    useEffect(()=>{
      localStorage.setItem('favs',JSON.stringify(favs));
    },[favs]);
    const addToFavs=(movie)=>{
        console.log("Adding to favorites:", movie);
        setfavs(prev=>[...prev,movie]);
    }
    const removeFromFavs=(movieId)=>{
        console.log("Removing from favorites:", movieId);
        setfavs(prev=>prev.filter(movie=>movie.id!=movieId));
    }
    const isFav=(movieId)=>{
        return favs.some(movie=>movie.id===movieId);
    }
    const value={
        favs,
        addToFavs,
        removeFromFavs,
        isFav                   
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}