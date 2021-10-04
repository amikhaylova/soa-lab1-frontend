import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import CoordinateFilterForm from "../filterForms/CoordinateFilterForm";
import {COORDINATE} from "../../constants/filterConstants";


function CoordinateFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-coordinate");
        let filter = {};
        filter.name = COORDINATE;
        filter.xfrom = formData.xfrom;
        filter.xto = formData.xto;
        filter.yfrom = formData.yfrom;
        filter.yto = formData.yto;
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
            <CoordinateFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default CoordinateFilterPage;
