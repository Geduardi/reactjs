import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    },
})

let timeout;

export const addMessageWithReply = (chatId, newMsg) => (dispatch) => {
    dispatch(addMessage(chatId, newMsg));
    if (newMsg?.author !== AUTHORS.robotName) { //optional chaining
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dispatch(addMessage(
                chatId,
                {
                    author: AUTHORS.robotName,
                    text: "Ваше сообщение отправлено",
                    id: `msg-${Date.now()}`,
                }
            ))
        }, 1500);
    }
}