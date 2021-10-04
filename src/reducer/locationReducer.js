import {SET_EDITED_LOCATION, SET_LOCATIONS} from "../constants/locationActionsConsts";

const initialState = {
    locationsList: [{id: "", x: "", y: "", name: ""}],
    editedLocation: {id: "", x: "", y: "", name: ""}
};

export function locationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOCATIONS:
            console.log(action.payload);
            return {
                ...state,
                locationsList: action.payload
            };
        case SET_EDITED_LOCATION:
            console.log(action.payload);
            return {
                ...state,
                editedLocation: action.payload
            };
        default:
            return state;
    }
}

