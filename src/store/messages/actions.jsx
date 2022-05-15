import {delay, put, takeLatest} from "redux-saga/effects";
import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_REPLY = 'MESSAGES::ADD_MESSAGE_WITH_REPLY'
export const CLEAR_MESSAGES = 'MESSAGES::CLEAR_MESSAGES'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    },
})


export const addMessageWithReply = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_REPLY,
    payload: {
        chatId,
        message
    },
})

export const clearMessages = (chatId) => ({
    type: CLEAR_MESSAGES,
    payload: chatId
})

export const addReplyFromBotWatcher = function* () {
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