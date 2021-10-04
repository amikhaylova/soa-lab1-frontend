import '../../css/table-header.css';
import '../../css/app.css';
import {FaFilter, FaSortAmountDown} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {COORDINATE, DATE, DURATION, GENRE, ID, NAME, OSCAR, RATING, WRITER} from '../../constants/filterConstants';
import {REMOVE_FILTER, REMOVE_SORT, SET_CUR_CRITERION, SET_SORT, SHOW_MODAL} from "../../constants/pageActionsConsts";


function TableHeader() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.page.sortBy);
    const filters = useSelector(state => state.page.filters);
    const currentCriterion = useSelector(state => state.page.curCriterion);

    function sortHandler(criterion) {
        let element = document.getElementById("sort-" + criterion);
        if (!sort.includes(criterion)) {
            dispatch({
                type: SET_SORT,
                payload: criterion
            });
            element.style.color = "rgb(255,255,255)";
        } else {
            dispatch({
                type: REMOVE_SORT,
                payload: criterion
            });
            element.style.color = "rgba(255,255,255,0.5)";
        }
    }

    function setActive(value, criterion) {
        console.log("CUR = " + currentCriterion);
        let element = document.getElementById("filter-" + criterion);
        for (const filter of filters) {
            if (filter.name === criterion) {
                dispatch({
                    type: REMOVE_FILTER,
                    payload: criterion
                });
                element.style.color = "rgba(255,255,255,0.5)";
                return;
            }
        }
        if (value) {
            dispatch({
                type: SET_CUR_CRITERION,
                payload: criterion
            });
        }
        dispatch({
            type: SHOW_MODAL,
            payload: value
        });
    }

    return (
        <div className="table-header base" id="table-header">

            <div className="id-div">
                <span>Id</span>
                <FaSortAmountDown color="rgba(255,255,255,0.5)" className="pointer" id="sort-id"
                                  onClick={() => sortHandler(ID)}/>
                <FaFilter color="rgba(255,255,255,0.5)" className="pointer" id="filter-id"
                          onClick={() => setActive(true, ID)}/>
            </div>
            <div>
                <span>Name</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-name"
                                  onClick={() => sortHandler(NAME)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-name"
                          onClick={() => setActive(true, NAME)}/>
            </div>
            <div>
                <span>Coordinates</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-coordinate"
                                  onClick={() => sortHandler(COORDINATE)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-coordinate"
                          onClick={() => setActive(true, COORDINATE)}/>
            </div>
            <div>
                <span>Creation Date</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-date"
                                  onClick={() => sortHandler(DATE)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-date"
                          onClick={() => setActive(true, DATE)}/>
            </div>
            <div>
                <span>Oscars</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-oscar"
                                  onClick={() => sortHandler(OSCAR)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-oscar"
                          onClick={() => setActive(true, OSCAR)}/>
            </div>
            <div>
                <span>Duration</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-duration"
                                  onClick={() => sortHandler(DURATION)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-duration"
                          onClick={() => setActive(true, DURATION)}/>
            </div>
            <div>
                <span>Genre</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-genre"
                                  onClick={() => sortHandler(GENRE)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-genre"
                          onClick={() => setActive(true, GENRE)}/>
            </div>
            <div>
                <span>Rating</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-rating"
                                  onClick={() => sortHandler(RATING)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-rating"
                          onClick={() => setActive(true, RATING)}/>
            </div>
            <div>
                <span>Screen Writer</span>
                <FaSortAmountDown className="pointer" color="rgba(255,255,255,0.5)" id="sort-screenWriter"
                                  onClick={() => sortHandler(WRITER)}/>
                <FaFilter className="pointer" color="rgba(255,255,255,0.5)" id="filter-screenWriter"
                          onClick={() => setActive(true, WRITER)}/>
            </div>
            <div>
                <span>Action</span>
            </div>
        </div>
    );
}

export default TableHeader;
