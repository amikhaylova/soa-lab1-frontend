import {SET_COORDINATES, SET_EDITED_COORDINATES} from "../constants/coordinatesActionsConsts";

const initialState = {
    coordinatesList: [],
    editedCoordinates: {id: "", x: "", y: ""}
};

export function coordinatesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COORDINATES:
            console.log(action.payload);
            return {
                ...state,
                coordinatesList: action.payload
            };
        case SET_EDITED_COORDINATES:
            console.log(action.payload);
            return {
                ...state,
                editedCoordinates: action.payload
            };
        default:
            return state;
    }
}

