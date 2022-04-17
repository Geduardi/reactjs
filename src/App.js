import './App.css';
import {useEffect, useRef, useState} from "react";
import {Form} from "./components/Form/Form";
import {AUTHORS, CHATS} from "./utils/constants";
import {MessageList} from "./components/MessageList/MessageList";
import {ChatList} from "./components/ChatList/ChatList";
import {ThemeProvider} from "@mui/material";
import {THEME} from "./utils/theme";



function App() {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState(CHATS);

    const timeout = useRef();

    const addMsg = (Msg) => {
        setMessageList([...messageList, Msg])
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
        // if (messageList.length > 0 && messageList[messageList.length-1].author !== robotName) {
        if (messageList[messageList.length - 1]?.author === AUTHORS.human) { //optional chaining
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


    return (
        <div className="App">
            <ThemeProvider theme={THEME}>
                <ChatList chats={chatList}/>
                <MessageList messages={messageList}/>
                <Form onSubmit={sendMsg}/>
            </ThemeProvider>
        </div>
    );
}

export default App;
