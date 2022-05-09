import {FETCH_STATUSES} from "../../utils/constants";
import {GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS} from "./actions";

const initialState = {
    data:[],
    status: FETCH_STATUSES.IDLE,
    error: null,
}

export const articlesReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_ARTICLES_REQUEST: {
            return {...state,status: FETCH_STATUSES.REQUEST, error: null}
        }
        case GET_ARTICLES_SUCCESS: {
            return {...state,data: payload, status: FETCH_STATUSES.SUCCESS}
        }
        case GET_ARTICLES_FAILURE: {
            return {...state,error: payload, status: FETCH_STATUSES.FAILURE}
        }
        default: return state
    }
}