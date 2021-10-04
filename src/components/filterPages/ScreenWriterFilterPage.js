import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import ScreenWriterFilterForm from "../filterForms/ScreenWriterFilterForm";
import {WRITER} from "../../constants/filterConstants";


function ScreenWriterFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-screenWriter");
        let filter = {};
        filter.name = WRITER;
        filter.like = formData.like;
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
            <ScreenWriterFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default ScreenWriterFilterPage;
