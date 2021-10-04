import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import OscarFilterForm from "../filterForms/OscarFilterForm";
import {OSCAR} from "../../constants/filterConstants";


function OscarFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-oscar");
        let filter = {};
        filter.name = OSCAR;
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
            <OscarFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default OscarFilterPage;
