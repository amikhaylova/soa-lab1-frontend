import '../../css/page-footer.css';
import '../../css/app.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {SET_CUR_PAGE, SET_PER_PAGE} from "../../constants/pageActionsConsts";
import {BsPlusCircleFill, IoMdArrowRoundBack, IoMdArrowRoundForward} from "react-icons/all";

function PageFooter() {
    const perPage = useSelector(state => state.page.perPage);
    const currentPage = useSelector(state => state.page.currentPage);
    const itemCount = useSelector(state => state.page.itemCount);
    const dispatch = useDispatch();
    const history = useHistory();

    const [localPerPage, setLocalPerPage] = useState("10");
    const [localCurPage, setLocalCurPage] = useState("1");

    function handleOnChangePerPage(event) {
        let input = event.target.value;
        setLocalPerPage(input);
    }

    function handleOnFocusPerPage(event) {
        setLocalPerPage("");
    }

    function handleOnBlurPerPage(event) {
        let input = event.target.value;
        if (input !== "" && Number.isInteger(Number(input)) && Number(input) > 0)
            dispatch({
                type: SET_PER_PAGE,
                payload: input
            });
        else {
            setLocalPerPage("10")
            dispatch({
                type: SET_PER_PAGE,
                payload: 10
            });
        }
    }

    function handleOnChangeCurPage(event) {
        let input = event.target.value;
        setLocalCurPage(input);
    }

    function handleOnFocusCurPage(event) {
        setLocalCurPage("");
    }

    function handleOnBlurCurPage(event) {
        let input = event.target.value;
        dispatch({
            type: SET_CUR_PAGE,
            payload: input
        });
        if (input !== "" && Number.isInteger(Number(input)) && Number(input) > 0)
            dispatch({
                type: SET_CUR_PAGE,
                payload: input
            });
        else {
            setLocalCurPage("1")
            dispatch({
                type: SET_CUR_PAGE,
                payload: 1
            });
        }
    }

    function createHandler() {
        history.push("/soa-lab1/new");
    }

    function changePage(value) {
        if (value > 0 && ((value - 1) * perPage - itemCount) < 0) {
            setLocalCurPage(value);
            dispatch({
                type: SET_CUR_PAGE,
                payload: value
            });
        }

    }


    return (
        <div className="footer base">
            <button id="new-movie-but" onClick={() => createHandler()}>
                <div className={"icon-but"}>
                    <div className={"icon"}>
                        <BsPlusCircleFill color={"#4683de"}/>
                    </div>
                    ADD MOVIE
                </div>
            </button>
            <div className="page-footer">
                <span>Per Page</span>
                <input id="current-num" value={localPerPage} onChange={handleOnChangePerPage}
                       onFocus={handleOnFocusPerPage} onBlur={handleOnBlurPerPage}/>
                <span>Total</span>
                <input id="current-page" value={itemCount} contentEditable={"false"}/>
                <div id={"left-arrow"}>
                    <IoMdArrowRoundBack className="pointer" color="rgb(70,131,222)"
                                        onClick={() => changePage(currentPage - 1)}/>
                </div>
                <input id="current-page" value={localCurPage} onChange={handleOnChangeCurPage}
                       onFocus={handleOnFocusCurPage} onBlur={handleOnBlurCurPage}/>
                <div id={"right-arrow"}>
                    <IoMdArrowRoundForward className="pointer" color="rgb(70,131,222)"
                                           onClick={() => changePage(currentPage + 1)}/>
                </div>

            </div>
        </div>

    );
}

export default PageFooter;
