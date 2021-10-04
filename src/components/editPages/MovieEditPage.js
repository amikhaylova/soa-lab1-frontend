import '../../css/table-layout.css';
import MovieEditForm from "../editForms/MovieEditForm";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateMovie} from "../../actions/movieActions";


function MovieEditPage() {
    const {id} = useParams();
    const dispatch = useDispatch();


    const onSubmit = (formData) => {
        dispatch(updateMovie(formData));
    };

    return (
        <div className="table-layout">
            <h2>Edit Movie (ID: {id})</h2>
            <hr/>
            <MovieEditForm id={id} onSubmit={onSubmit}/>
        </div>
    );
}

export default MovieEditPage;
