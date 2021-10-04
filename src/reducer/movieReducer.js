import {SET_EDITED_MOVIE, SET_MOVIES} from "../constants/movieActionsConsts";

const initialState = {
    movieList: [],
    editedMovie: {
        coordinates: {id: "", x: "", y: ""},
        screenWriter: {
            id: "", eyeColor: "", name: "", weight: "",
            location: {id: "", x: "", name: "", y: ""}
        }
    }
};

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MOVIES:
            console.log(action.payload);
            return {
                ...state,
                movieList: action.payload
            };
        case SET_EDITED_MOVIE:
            console.log(action.payload);
            return {
                ...state,
                editedMovie: action.payload
            };
        default:
            return state;
    }
}

