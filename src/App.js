import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ThemeProvider} from "@mui/material";

import './App.css';
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {Theme} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";
import {addChat, deleteChat} from "./store/chats/actions";
import {useState} from "react";


function App() {

    const dispatch = useDispatch();
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
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/chat'} element={<ChatList handleAddChatClick={handleAddChatClick}/>}>
                        <Route path={':id'} element={<Chat handleDeleteChatClick={handleDeleteChatClick}/>}/>
                    </Route>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
