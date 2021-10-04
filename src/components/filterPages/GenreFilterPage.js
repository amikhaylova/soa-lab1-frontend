import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import {GENRE} from "../../constants/filterConstants";
import GenreFilterForm from "../filterForms/GenreFilterForm";


function GenreFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-genre");
        let filter = {};
        filter.name = GENRE;
        filter.like = formData.compare;
        dispatch({
            type: 'SET_FILTER',
            payload: filter
        });
        element.style.color = "rgb(255,255,255)";
        dispatch({
            type: 'SHOW_MODAL',
            payload: false
        });
    };

    return (
        <div className="table-layout">
            <GenreFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default GenreFilterPage;
