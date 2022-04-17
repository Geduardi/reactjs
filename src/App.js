import logo from './logo.svg';
import './App.css';
import {Message} from "./components/Message/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/Form/Form";
import {AUTHORS} from "./utils/constants";
import {MessageList} from "./components/MessageList/MessageList";



function App() {
    const [messageList,setMessageList] = useState([]);

    const addMsg = (Msg) => {
        setMessageList([...messageList,Msg])
    }

    const sendMsg = (text) => {
        // addMsg({author: human, text: text})
        addMsg({author: AUTHORS.human, text}) //^^Эквивалент^^
    }

    useEffect(()=>{
        let timeout;
        // if (messageList.length > 0 && messageList[messageList.length-1].author !== robotName) {
        if (messageList[messageList.length-1]?.author === AUTHORS.human) { //optional chaining
            timeout = setTimeout(()=>{
                addMsg({author:AUTHORS.robotName, text: "Ваше сообщение отправлено"})
            },1500);
        }

        return () => {
            clearTimeout(timeout);
        };

    },[messageList])



  return (
    <div className="App">
        <MessageList messages={messageList} />
        <Form onSubmit={sendMsg} />
    </div>
  );
}

export default App;
