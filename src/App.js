import logo from './logo.svg';
import './App.css';
import {Message} from "./components/Message/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/Form/Form";

const name = 'me';
const robotName = 'Bot';


function App() {
    const [messageList,setMessageList] = useState([]);
    const [lastAuthor, setLastAuthor] = useState('');

    const addMsg = (inputText) => {
        setMessageList([...messageList,{author: name, text: inputText}])
        setLastAuthor(name);
    }

    useEffect(()=>{
        if (messageList.length > 0 && lastAuthor !== robotName) {
            setMessageList([...messageList,{author:robotName, text: "Ваше сообщение отправлено"}])
            setLastAuthor(robotName);
        }
    },[messageList,lastAuthor])

  return (
    <div className="App">
        <div className="messageArea">
            {messageList.map((message)=>(<Message msgText={message.text} author={message.author} robotName={robotName} />))}
        </div>
        <Form onSubmit={addMsg} />
    </div>
  );
}

export default App;
