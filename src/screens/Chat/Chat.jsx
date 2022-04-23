import {useEffect, useRef, useState} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {Navigate, useOutletContext, useParams} from "react-router-dom";
import {Button} from "@mui/material";

export const Chat = () => {
    const { id } = useParams();
    const [startMessageList,handleDeleteChatClick] = useOutletContext();
    const [messageList, setMessageList] = useState(startMessageList);


    const timeout = useRef();

    const addMsg = (Msg) => {
        setMessageList({...messageList, [id]: [...messageList[id],Msg]})
    }

    const sendMsg = (text) => {
        // addMsg({author: human, text: text})
        addMsg({
            author: AUTHORS.human,
            text,//^^Эквивалент "text: text"^^
            id: `msg-${Date.now()}`,
        })
    }


    useEffect(() => {
        const lastMsg = messageList[id]?.[messageList[id]?.length - 1];
        if (lastMsg?.author === AUTHORS.human) { //optional chaining
            timeout.current = setTimeout(() => {
                addMsg({
                    author: AUTHORS.robotName,
                    text: "Ваше сообщение отправлено",
                    id: `msg-${Date.now()}`,
                })
            }, 1500);
        }


        return () => {
            clearTimeout(timeout.current);
        };

    }, [messageList])

    if (!messageList[id]){
        return <Navigate to={"/chat"} replace />
    }

    return (
        <div className="App">
                <Button onClick={()=>handleDeleteChatClick(id)}>Удалить чат</Button>
                <MessageList messages={messageList[id]}/>
                <Form onSubmit={sendMsg}/>

        </div>
    );
}