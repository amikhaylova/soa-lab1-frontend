import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import {RATING} from "../../constants/filterConstants";
import RatingFilterForm from "../filterForms/RatingFilterForm";


function RatingFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-rating");
        let filter = {};
        filter.name = RATING;
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
            <RatingFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default RatingFilterPage;
