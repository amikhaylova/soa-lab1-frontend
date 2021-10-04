import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import {DURATION} from "../../constants/filterConstants";
import DurationFilterForm from "../filterForms/DurationFilterForm";


function DurationFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-duration");
        let filter = {};
        filter.name = DURATION;
        filter.from = formData.from;
        filter.to = formData.to;
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
            <DurationFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default DurationFilterPage;
