import '../css/movie-table.css';
import PersonTableHeader from "./PersonTableHeader";
import PersonList from "./PersonList";
import {useSelector} from "react-redux";

function PersonTable() {
    const screenwriterList = useSelector(state => state.additional.screenwriterList);

    return (
        <div className="movie-table">
            <PersonTableHeader/>
            <PersonList screenwriterList={screenwriterList}/>
        </div>
    );
}

export default PersonTable;