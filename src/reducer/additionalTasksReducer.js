import {
    SET_GENRE,
    SET_GENRE_COUNT,
    SET_LENGTH,
    SET_LENGTH_COUNT,
    SET_SCREENWRITER,
    SET_SCREENWRITER_LIST
} from "../constants/additionalActionsConsts";

const initialState = {
    genre: "",
    genreCount: "",
    length: "",
    lengthCount: "",
    screenwriter: {},
    screenwriterList: []
};

export function additionalTasksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GENRE_COUNT:
            return {
                ...state,
                genreCount: action.payload
            };
        case SET_GENRE:
            return {
                ...state,
                genre: action.payload
            };
        case SET_SCREENWRITER_LIST:
            return {
                ...state,
                screenwriterList: action.payload
            };
        case SET_LENGTH:
            return {
                ...state,
                length: action.payload
            };
        case SET_LENGTH_COUNT:
            return {
                ...state,
                lengthCount: action.payload
            };
        case SET_SCREENWRITER:
            return {
                ...state,
                screenwriter: action.payload
            };
        default:
            return state;
    }
}

