import '../../css/table-layout.css';
import {useDispatch, useSelector} from "react-redux";
import IdFilterForm from "../filterForms/IdFilterForm";


function IdFilterPage() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.page.filters);

    const onSubmit = (formData) => {
        let element = document.getElementById("filter-id");
        for (const filter of filters) {
            if (filter.name === "id") {
                dispatch({
                    type: 'REMOVE_FILTER',
                    payload: "id"
                });
            }
        }
        let filter = {};
        filter.name = "id";
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
            <IdFilterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default IdFilterPage;
