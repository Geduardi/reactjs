import { takeEvery,put,call } from 'redux-saga/effects'
import {ADD_MESSAGE_WITH_REPLY, addMessage} from "./messages/actions";
import {AUTHORS} from "../utils/constants";

export const sagaWatcher = function* () {
    yield takeEvery(ADD_MESSAGE_WITH_REPLY,sagaWorker)
}

let timeout;

const wait = ms => {
    clearTimeout(timeout)
    return new Promise(resolve => timeout = setTimeout(resolve,ms))
}

const sagaWorker = function* ({type, payload}) {
    yield put(addMessage(payload.chatId, payload.message))
    if (payload.message?.author !== AUTHORS.robotName) {
        yield call(wait,1500)
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