import '../../css/table-layout.css';
import {useDispatch, useSelector} from "react-redux";
import CreatePersonForm from "../createForms/CreatePersonForm";
import {createPerson} from "../../actions/personsActions";


function CreatePersonPage() {

    const dispatch = useDispatch();
    const movieId = useSelector(state => state.movies.editedMovie.id);

    const onSubmit = (formData) => {
        dispatch(createPerson(formData, movieId));
    };

    return (
        <div className="table-layout">
            <h2>Create Person</h2>
            <hr/>
            <CreatePersonForm onSubmit={onSubmit}/>
        </div>
    );
}

export default CreatePersonPage;
