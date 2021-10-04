import '../../css/table-layout.css';
import {useDispatch, useSelector} from "react-redux";
import {createLocation} from "../../actions/locationsActions";
import LocationCreateForm from "../createForms/CreateLocationForm";


function CreateLocationPage() {

    const dispatch = useDispatch();
    const movieId = useSelector(state => state.movies.editedMovie.id);

    const onSubmit = (formData) => {
        dispatch(createLocation(formData, movieId));
    };

    return (
        <div className="table-layout">
            <h2>Create Location</h2>
            <hr/>
            <LocationCreateForm onSubmit={onSubmit}/>
        </div>
    );
}

export default CreateLocationPage;
