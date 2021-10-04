import '../../css/table-layout.css';
import React, {useEffect} from "react";
import {getPerson} from "../../actions/personsActions";
import {useDispatch, useSelector} from "react-redux";
import {SET_SCREENWRITER_LIST} from "../../constants/additionalActionsConsts";
import {useHistory} from "react-router-dom";
import {getScreenWriterList} from "../../actions/additionalTasksActions";
import PersonTable from "../../personTableComponents/PersonTable";

function ScreenwriterTaskPage() {
    const dispatch = useDispatch();
    const personList = useSelector(state => state.person.personsList);
    const screenwriterList = useSelector(state => state.additional.screenwriterList);
    const history = useHistory();

    useEffect(() => {
        dispatch(getPerson());
    }, []);

    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'POP') {
                dispatch({
                    type: SET_SCREENWRITER_LIST,
                    payload: []
                });
            } else {

            }

        })
    }, [])

    function redirectOnMain() {
        history.push("/soa-lab1");
        dispatch({
            type: SET_SCREENWRITER_LIST,
            payload: []
        });
    }

    function handleOnChangeScreenwriter(event) {
        let input = event.target.value;
        if (input !== "")
            dispatch(getScreenWriterList(input));
    }


    return (
        <div className="task-layout">
            <h1>Screenwriter task</h1>
            <div className={"add-task-container"}>
                <div>List all movies with SCREENWRITER less than</div>
                <select className={"add-select"}
                        onChange={handleOnChangeScreenwriter}>
                    {personList.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
            </div>
            {(!Array.isArray(screenwriterList) || screenwriterList.length > 0) &&
            < PersonTable/>
            }

            <button className={"back-movie-but"} onClick={redirectOnMain}>BACK TO MOVIES</button>
        </div>
    );
}

export default ScreenwriterTaskPage;
