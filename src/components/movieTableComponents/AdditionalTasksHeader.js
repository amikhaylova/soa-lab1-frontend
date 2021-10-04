import '../../css/filter-header.css';
import '../../css/app.css';
import {useHistory} from "react-router-dom";

function AdditionalTasksHeader() {
    const history = useHistory();

    function handleDurationClick(evt) {
        evt.preventDefault();
        history.push("/soa-lab1/additional/duration");
    }

    function handleGenreClick(evt) {
        evt.preventDefault();
        history.push("/soa-lab1/additional/genre");
    }

    function handleScreenwriterClick(evt) {
        evt.preventDefault();
        history.push("/soa-lab1/additional/screenwriter");
    }

    return (
        <div className="filter-header base">
            <div className={"tasks-div"}>
                <button id="new-movie-but" onClick={handleGenreClick}>
                    GENRE TASK
                </button>
                <button id="new-movie-but" onClick={handleDurationClick}>
                    DURATION TASK
                </button>
                <button id="new-movie-but" onClick={handleScreenwriterClick}>
                    SCREENWRITER TASK
                </button>
            </div>
        </div>
    );
}

export default AdditionalTasksHeader;
