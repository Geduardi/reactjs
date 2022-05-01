import {useMemo} from "react";
import {Navigate, useOutletContext, useParams} from "react-router-dom";

import './Chat.css'
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {Button} from "@mui/material";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addMessageWithReply, clearMessages} from "../../store/messages/actions";
import {selectMessagesById} from "../../store/messages/selectors";
import {selectName} from "../../store/profile/selectors";

export const Chat = () => {
    const {id} = useParams();
    const handleDeleteChatClick = useOutletContext();
    const getMessages = useMemo(() => selectMessagesById(id), [id]);
    const messageList = useSelector(getMessages, shallowEqual);
    const author = useSelector(selectName);
    const dispatch = useDispatch();

    const addMsg = (Msg) => {
        dispatch(addMessageWithReply(id, Msg));
    }

    const sendMsg = (text) => {
        addMsg({
            author: author,
            text,//^^Эквивалент "text: text"^^
            id: `msg-${Date.now()}`,
        })
    }

    const handleClearMessagesClick = (id) => {
        dispatch(clearMessages(id))
    }

    if (!messageList) {
        return <Navigate to={"/chat"} replace/>
    }

    return (
        <div className="chat">
            <div className='chat-buttons'>
                <Button className={"delete-btn"} onClick={() => handleDeleteChatClick(id)}>Удалить этот чат</Button>
                <Button className={"delete-btn"} onClick={() => handleClearMessagesClick(id)}>Очистить чат</Button>
            </div>
            <MessageList messages={messageList}/>
            <Form onSubmit={sendMsg} label={"Написать сообщение"} inputFocus/>
        </div>
    );
}