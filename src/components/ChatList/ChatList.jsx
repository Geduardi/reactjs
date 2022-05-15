import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {ChatListRender} from "../ChatListRender/ChatListRender";
import {useNavigate} from "react-router-dom";
import {onValue, set} from "firebase/database";
import {chatsRef, getChatRefById, getMessagesRefByChatId} from "../../services/firebase";
import {useEffect, useState} from "react";


export const ChatList = () => {
    const dispatch = useDispatch();
    // const chats = useSelector(selectChats, shallowEqual);
    const [chats,setChats] = useState([])
    const redirect = useNavigate();

    const handleAddChatClick = () => {
        let newChatName = prompt('Введите название нового чата', '');
        if (newChatName === '') {
            alert('Вы не ввели имя...');
        }
        if (newChatName) {
            let newChatId = `chat-${Date.now()}`;
            // dispatch(addChat({id: newChatId, name: newChatName}));
            set(getChatRefById(newChatId),{id: newChatId, name: newChatName})
            set(getMessagesRefByChatId(newChatId),{exist:true})
            redirect(`/chat/${newChatId}`, {replace: true})
        }
    }

    const handleDeleteChatClick = (id) => {
        // dispatch(deleteChat(id));
        set(getChatRefById(id),null)
        set(getMessagesRefByChatId(id),null)
    }

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, snapshot => {
            setChats(Object.values(snapshot.val() || {}))
        })
        return unsubscribe;
    },[])

    return (
        <ChatListRender chats={chats} handleAddChatClick={handleAddChatClick} handleDeleteChatClick={handleDeleteChatClick}  />
    );
}