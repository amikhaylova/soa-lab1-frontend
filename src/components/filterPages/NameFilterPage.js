import '../../css/table-layout.css';
import {useDispatch} from "react-redux";
import NameFilterForm from "../filterForms/NameFilterForm";
import {SET_FILTER, SHOW_MODAL} from "../../constants/pageActionsConsts";


function NameFilterPage() {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-name");
        let filter = {};
        filter.name = "name";
        filter.like = formData.like;
        dispatch({
            type: SET_FILTER,
            payload: filter
        });
        element.style.color = "rgb(255,255,255)";
        dispatch({
            type: SHOW_MODAL,
            payload: false
        });
    };

    return (
        <div className="table-layout">
            <NameFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default NameFilterPage;
