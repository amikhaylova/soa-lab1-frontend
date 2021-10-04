import '../../css/table-layout.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SET_LENGTH_COUNT} from "../../constants/additionalActionsConsts";
import {getLengthCount} from "../../actions/additionalTasksActions";
import {useHistory} from "react-router-dom";

function DurationTaskPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const durationCount = useSelector(state => state.additional.lengthCount);
    const [localDuration, setLocalDuration] = useState("");


    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'POP') {
                dispatch({
                    type: SET_LENGTH_COUNT,
                    payload: ""
                });
            } else {

            }

        })
    }, [])

    function handleOnChangeDuration(event) {
        let input = event.target.value;
        setLocalDuration(input);
    }

    function handleOnFocusDuration(event) {
        setLocalDuration("");
        dispatch({
            type: SET_LENGTH_COUNT,
            payload: ""
        });
    }

    function handleOnBlurDuration(event) {
        let input = event.target.value;
        if (input !== "" && Number.isInteger(Number(input)) && Number(input) > 0) {
            dispatch(getLengthCount(input));
        } else {
            setLocalDuration("")
        }
    }

    function redirectOnMain() {
        dispatch({
            type: SET_LENGTH_COUNT,
            payload: ""
        });
        history.push("/soa-lab1");
    }

    return (
        <div className="task-layout">
            <h1>Duration task</h1>
            <div className={"add-task-container"}>
                <div>How many movies exist with DURATION greater than</div>
                <input type={"number"} className={"add-input"} value={localDuration}
                       onChange={handleOnChangeDuration}
                       onFocus={handleOnFocusDuration}
                       onBlur={handleOnBlurDuration}/>
            </div>
            {durationCount !== "" &&
            <div className={"answer"}> Answer: {durationCount}</div>
            }
            <button className={"back-movie-but"} onClick={redirectOnMain}>BACK TO MOVIES</button>
        </div>
    );
}

export default DurationTaskPage;
