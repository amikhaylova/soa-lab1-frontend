import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import {createMovie} from "../../actions/movieActions";
import CreateMovieForm from "../createForms/CreateMovieForm";


function CreateMoviePage() {
    /*const history = useHistory();*/
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(createMovie(formData));
        /* history.push('/');*/
    };

    return (
        <div className="table-layout">
            <h1>Create Movie</h1>
            <CreateMovieForm onSubmit={onSubmit}/>
        </div>
    );
}

export default CreateMoviePage;
