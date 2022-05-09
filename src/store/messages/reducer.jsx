import {ADD_MESSAGE, CLEAR_MESSAGES} from "./actions";
import {ADD_CHAT, DELETE_CHAT} from "../chats/actions";

const initMessages = {};

export const messagesReducer = (state = initMessages, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {...state, [payload.chatId]: [...state[payload.chatId], payload.message]}
        }
        case ADD_CHAT: {
            return {...state, [payload.id]: []}
        }
        case DELETE_CHAT: {
            let copy = {...state};
            delete copy[payload];
            console.log(copy)
            return copy;
        }
        case CLEAR_MESSAGES: {
            return {...state, [payload]:[]}
        }
        default: {
            return state;
        }
    }
}
