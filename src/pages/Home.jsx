import MovieCard from '../components/Moviecard';
import { useState,useEffect} from 'react';
import { getPopularMovies, searchMovies } from '../Services/api';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        if (searchQuery.trim() === "") {
            getPopularMovies()
                .then(setMovies)
                .catch(() => setError("Failed to fetch movies"))
                .finally(() => setLoading(false));
        } else {
            searchMovies(searchQuery)
                .then(setMovies)
                .catch(() => setError("Failed to fetch movies"))
                .finally(() => setLoading(false));
        }
    }, [searchQuery]);
    return (
        <div>
            <form className="search-form" onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
