import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import {DATE} from "../../constants/filterConstants";
import DateFilterForm from "../filterForms/DateFilterForm";


function DateFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-date");
        let filter = {};
        filter.name = DATE;
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
            <DateFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default DateFilterPage;
