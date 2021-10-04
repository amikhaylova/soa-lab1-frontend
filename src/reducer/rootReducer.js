import {combineReducers} from 'redux'
import {movieReducer} from './movieReducer.js'
import {reducer as notifications} from 'react-notification-system-redux';
import {pageReducer} from "./pageReducer";
import {reducer as formReducer} from 'redux-form';
import {coordinatesReducer} from "./coordinatesReducer";
import {locationReducer} from "./locationReducer";
import {personReducer} from "./personReducer";
import {additionalTasksReducer} from "./additionalTasksReducer";

export const rootReducer = combineReducers({
    movies: movieReducer,
    notifications: notifications,
    page: pageReducer,
    coordinates: coordinatesReducer,
    location: locationReducer,
    person: personReducer,
    additional: additionalTasksReducer,
    form: formReducer,
});