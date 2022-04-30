import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selctors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {ChatListRender} from "../ChatListRender/ChatListRender";


export const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, shallowEqual);

    const handleAddChatClick = () => {
        let newChatName = prompt('Введите название нового чата', '');
        if (newChatName === '') {
            alert('Вы не ввели имя...');
        }
        if (newChatName) {
            dispatch(addChat({id: `chat-${Date.now()}`, name: newChatName}));
        }
    }

    const handleDeleteChatClick = (id) => {
        dispatch(deleteChat(id));
    }

    return (
        <ChatListRender chats={chats} handleAddChatClick={handleAddChatClick} handleDeleteChatClick={handleDeleteChatClick} />
    );
}