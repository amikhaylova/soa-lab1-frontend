import '../../css/table-layout.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updatePerson} from "../../actions/personsActions";
import EditPersonForm from "../editForms/EditPersonForm";


function EditPersonPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movieId = useSelector(state => state.movies.editedMovie.id);

    const onSubmit = (formData) => {
        dispatch(updatePerson(formData, movieId));
    };

    return (
        <div className="table-layout">
            <h2>Edit Person (ID: {id})</h2>
            <hr/>
            <EditPersonForm id={id} onSubmit={onSubmit}/>
        </div>
    );
}

export default EditPersonPage;
