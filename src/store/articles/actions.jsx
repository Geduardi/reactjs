import {put, takeLatest} from "redux-saga/effects";
import {apiUrlSpace} from "../../utils/constants";

export const GET_ARTICLES_REQUEST = 'ARTICLES::GET_ARTICLES_REQUEST'
export const GET_ARTICLES_SUCCESS = 'ARTICLES::GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'ARTICLES::GET_ARTICLES_FAILURE'

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST
})

export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data,
})

export const getArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error,
})

const fetchArticles = function* () {
    try {
        const response = yield fetch(apiUrlSpace)
        if (!response.ok) {
            throw new Error(`Response failed with error: ${response.status}`)
        }
        const result = yield response.json();
        yield put(getArticlesSuccess(result))
    } catch (e) {
        yield put(getArticlesFailure(e.message))
    }
}

export const fetchArticlesWatcher = function* () {
    yield takeLatest(GET_ARTICLES_REQUEST, fetchArticles)
}