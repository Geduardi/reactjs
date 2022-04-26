import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_REPLY = 'MESSAGES::ADD_MESSAGE_WITH_REPLY'

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