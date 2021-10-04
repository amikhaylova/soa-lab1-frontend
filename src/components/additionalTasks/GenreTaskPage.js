import '../../css/table-layout.css';
import {genres} from "../../constants/enumConstants";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SET_GENRE_COUNT} from "../../constants/additionalActionsConsts";
import {getGenreCount} from "../../actions/additionalTasksActions";

function GenreTaskPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [localGenre, setLocalGenre] = useState("");
    const genreCount = useSelector(state => state.additional.genreCount);

    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'POP') {
                dispatch({
                    type: SET_GENRE_COUNT,
                    payload: ""
                });
            } else {

            }

        })
    }, [])

    function redirectOnMain() {
        history.push("/soa-lab1");
        dispatch({
            type: SET_GENRE_COUNT,
            payload: ""
        });
    }

    function handleOnChangeGenre(event) {
        let input = event.target.value;
        setLocalGenre(input);
        if (input !== "")
            dispatch(getGenreCount(input));
        else
            dispatch({
                type: SET_GENRE_COUNT,
                payload: ""
            });
    }

    function handleOnFocusGenre(event) {
        setLocalGenre("");
        dispatch({
            type: SET_GENRE_COUNT,
            payload: ""
        });
    }

    return (
        <div className="task-layout">
            <h1>Genre task</h1>
            <div className={"add-task-container"}>
                <div>How many movies exist with GENRE equals to</div>
                <select className={"add-select"} value={localGenre}
                        onChange={handleOnChangeGenre}
                        onFocus={handleOnFocusGenre}>
                    {genres.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
            </div>
            {genreCount !== "" &&
            <div className={"answer"}> Answer: {genreCount}</div>
            }
            <button className={"back-movie-but"} onClick={redirectOnMain}>BACK TO MOVIES</button>
        </div>
    );
}

export default GenreTaskPage;
