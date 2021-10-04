import {
    DELETE_MOVIE,
    REMOVE_FILTER,
    REMOVE_SORT,
    SET_CUR_CRITERION,
    SET_CUR_PAGE,
    SET_FILTER,
    SET_ITEM_COUNT,
    SET_PER_PAGE,
    SET_SORT,
    SHOW_MODAL
} from "../constants/pageActionsConsts";

const initialState = {
    perPage: 10,
    currentPage: 1,
    itemCount: "",
    deleteItem: 0,
    sortBy: [],
    modalActive: false,
    filters: [],
    curCriterion: "",
};


export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload
            };
        case SET_CUR_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case SET_CUR_CRITERION:
            return {
                ...state,
                curCriterion: action.payload
            };
        case SET_ITEM_COUNT:
            return {
                ...state,
                itemCount: action.payload
            };
        case DELETE_MOVIE:
            return {
                ...state,
                deleteItem: state.deleteItem + 1
            };
        case SET_SORT:
            return {
                ...state,
                sortBy: [...state.sortBy, action.payload]
            };
        case REMOVE_SORT:
            return {
                ...state,
                sortBy: state.sortBy.filter(item => item !== action.payload)
            };
        case SHOW_MODAL:
            return {
                ...state,
                modalActive: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filters: [...state.filters, action.payload]
            };
        case REMOVE_FILTER:
            return {
                ...state,
                filters: state.filters.filter(item => item.name !== action.payload)
            };
        default:
            return state;
    }
}

