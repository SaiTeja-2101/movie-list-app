import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/Moviecard';
function  Favorites(){
    const {favs} = useMovieContext();
    if(favs){
        return <div className="favorites">
            <h2><b>Your Favorites</b></h2>
            <div className="movies-grid">
                {favs.map(movie=>(
                    <MovieCard movie={movie} key={movie.id} />
                ))}

                </div>
            </div>
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Start adding some movies to your favorites!</p>
        </div>
    )
}
export default Favorites;