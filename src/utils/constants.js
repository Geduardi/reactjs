export const AUTHORS = {
    human: "me",
    robotName: "Bot"
}

export const initChats = [
    {
        id: 1,
        name: 'Чат 1',
    },
    {
        id: 2,
        name: 'Чат 2',
    },
    {
        id: 3,
        name: 'Чат 3',
    }
]
export const initMessages = initChats.reduce((acc,chat)=>{
    acc[chat.id] = [];
    return acc;
},{});
