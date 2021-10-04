import '../../css/movie-table.css';
import AdditionalTasksHeader from "./AdditionalTasksHeader";
import TableHeader from "./TableHeader";
import PageFooter from "./PageFooter";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../actions/movieActions";
import MovieList from "./MovieList";
import {getCoordinates} from "../../actions/coordinatesActions";

function MovieTable() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const movies = useSelector(state => state.movies.movieList);


    useEffect(() => {
        //dispatch(getMovies(page.perPage, page.currentPage));
        dispatch(getMovies(page));
        dispatch(getCoordinates());
    }, [page.currentPage, page.perPage, page.deleteItem, page.sortBy, page.filters]);


    return (
        <div className="movie-table">
            <AdditionalTasksHeader/>
            <TableHeader/>
            <MovieList movies={movies}/>
            <PageFooter/>
        </div>
    );
}

export default MovieTable;