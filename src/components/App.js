import '../css/app.css';
import TablePage from "./movieTableComponents/TablePage";
import Notifications from 'react-notification-system-redux';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieEditPage from "./editPages/MovieEditPage";
import CreateMoviePage from "./createPages/CreateMoviePage";
import createBrowserHistory from 'history/createBrowserHistory'
import {COORDINATE, DATE, DURATION, GENRE, ID, NAME, OSCAR, RATING, WRITER} from "../constants/filterConstants";
import IdFilterPage from "./filterPages/IdFilterPage";
import NameFilterPage from "./filterPages/NameFilterPage";
import CoordinateFilterPage from "./filterPages/CoordinateFilterPage";
import DateFilterPage from "./filterPages/DateFilterPage";
import OscarFilterPage from "./filterPages/OscarFilterPage";
import DurationFilterPage from "./filterPages/DurationFilterPage";
import GenreFilterPage from "./filterPages/GenreFilterPage";
import RatingFilterPage from "./filterPages/RatingFilterPage";
import ScreenWriterFilterPage from "./filterPages/ScreenWriterFilterPage";
import Modal from "./modal/Modal";
import EditCoordinatesPage from "./editPages/EditCoordinatesPage";
import CreateCoordinatesPage from "./createPages/CreateCoordinatesPage";
import LocationEditPage from "./editPages/LocationEditPage";
import CreateLocationPage from "./createPages/CreateLocationPage";
import EditPersonPage from "./editPages/EditPersonPage";
import CreatePersonPage from "./createPages/CreatePersonPage";
import GenreTaskPage from "./additionalTasks/GenreTaskPage";
import DurationTaskPage from "./additionalTasks/DurationTaskPage";
import ScreenwriterTaskPage from "./additionalTasks/ScreenwriterTaskPage";

export const history = createBrowserHistory()

/*class DebugRouter extends Router {
    constructor(props){
        super(props);
        console.log('initial history is: ', JSON.stringify(this.history, null,2))
        this.history.listen((location, action)=>{
            console.log(
                `The current URL is ${location.pathname}${location.search}${location.hash}`
            )
            console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
        });
    }
}*/

function App() {
    const notifications = useSelector(state => state.notifications);
    const modalActive = useSelector(state => state.page.modalActive);
    const dispatch = useDispatch();
    const currentCriterion = useSelector(state => state.page.curCriterion);

    function setActive(value) {
        dispatch({
            type: 'SHOW_MODAL',
            payload: value
        });
    }

    return (
        <div className="app">
            <Modal active={modalActive} setActive={setActive} id="modal">
                {currentCriterion === ID && <IdFilterPage/>}
                {currentCriterion === NAME && <NameFilterPage/>}
                {currentCriterion === COORDINATE && <CoordinateFilterPage/>}
                {currentCriterion === DATE && <DateFilterPage/>}
                {currentCriterion === OSCAR && <OscarFilterPage/>}
                {currentCriterion === DURATION && <DurationFilterPage/>}
                {currentCriterion === GENRE && <GenreFilterPage/>}
                {currentCriterion === RATING && <RatingFilterPage/>}
                {currentCriterion === WRITER && <ScreenWriterFilterPage/>}
            </Modal>
            <Router history={history}>
                <Switch>
                    <Route path="/soa-lab1/edit/:id">
                        <MovieEditPage/>
                    </Route>
                    <Route path="/soa-lab1/coordinates/edit/:id">
                        <EditCoordinatesPage/>
                    </Route>
                    <Route path="/soa-lab1/location/edit/:id">
                        <LocationEditPage/>
                    </Route>
                    <Route path="/soa-lab1/person/edit/:id">
                        <EditPersonPage/>
                    </Route>
                    <Route exact path="/soa-lab1/coordinates/new">
                        <CreateCoordinatesPage/>
                    </Route>
                    <Route exact path="/soa-lab1/location/new">
                        <CreateLocationPage/>
                    </Route>
                    <Route exact path="/soa-lab1/person/new">
                        <CreatePersonPage/>
                    </Route>
                    <Route exact path="/soa-lab1/additional/genre">
                        <GenreTaskPage/>
                    </Route>
                    <Route exact path="/soa-lab1/additional/duration">
                        <DurationTaskPage/>
                    </Route>
                    <Route exact path="/soa-lab1/additional/screenwriter">
                        <ScreenwriterTaskPage/>
                    </Route>
                    <Route path="/soa-lab1/new">
                        <CreateMoviePage/>
                    </Route>
                    <Route exact path="/soa-lab1">
                        <TablePage/>
                    </Route>
                </Switch>
            </Router>
            <Notifications notifications={notifications}/>
        </div>
    );
}

export default App;
