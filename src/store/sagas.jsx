import {all, delay, put, takeLatest} from 'redux-saga/effects'
import {ADD_MESSAGE_WITH_REPLY, addMessage} from "./messages/actions";
import {apiUrlSpace, AUTHORS} from "../utils/constants";
import {GET_ARTICLES_REQUEST, getArticlesFailure, getArticlesSuccess} from "./articles/actions";

export const rootSaga = function* () {
    yield all([
        addReplyFromBotWatcher(),
        fetchArticlesWatcher(),
    ])
}

const addReplyFromBotWatcher = function* () {
    yield takeLatest(ADD_MESSAGE_WITH_REPLY, addReplyFromBot)
}

const addReplyFromBot = function* ({type, payload}) {
    yield put(addMessage(payload.chatId, payload.message))
    if (payload.message?.author !== AUTHORS.robotName) {
        yield delay(1500)
        yield put(addMessage(
            payload.chatId,
            {
                author: AUTHORS.robotName,
                text: "Ваше сообщение отправлено",
                id: `msg-${Date.now()}`,
            }
        ))
    }
}

const fetchArticlesWatcher = function* () {
    yield takeLatest(GET_ARTICLES_REQUEST, fetchArticles)
}

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