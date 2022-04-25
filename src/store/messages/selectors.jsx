export const selectMessages = (state) => state.messages;
export const selectMessagesById = (chatId) => (state) => state.messages[chatId];