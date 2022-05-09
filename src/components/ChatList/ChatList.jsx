import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {ChatListRender} from "../ChatListRender/ChatListRender";
import {useNavigate} from "react-router-dom";


export const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, shallowEqual);
    const redirect = useNavigate();

    const handleAddChatClick = () => {
        let newChatName = prompt('Введите название нового чата', '');
        if (newChatName === '') {
            alert('Вы не ввели имя...');
        }
        if (newChatName) {
            let newChatId = `chat-${Date.now()}`;
            dispatch(addChat({id: newChatId, name: newChatName}));
            redirect(`/chat/${newChatId}`, {replace: true})
        }
    }

    const handleDeleteChatClick = (id) => {
        dispatch(deleteChat(id));
    }

    return (
        <ChatListRender chats={chats} handleAddChatClick={handleAddChatClick} handleDeleteChatClick={handleDeleteChatClick}  />
    );
}