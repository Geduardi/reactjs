import {useState} from "react";
import {Link, Navigate, Outlet} from "react-router-dom";
import {Button, Menu, MenuItem} from "@mui/material";

import './ChatList.styles.css';
import {initChats, initMessages} from "../../utils/constants";


export const ChatList = () => {

    const [chatList, setChatList] = useState(initChats);
    const [messageList, setMessageList] = useState(initMessages);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleChatListClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChatListClose = () => {
        setAnchorEl(null);
    };

    const handleAddChatClick = () => {
        let newChatName = prompt('Введите название нового чата','');
        if (newChatName === '') {
            alert('Вы не ввели имя...');
        }
        if (newChatName) {
            let newId = chatList.length + 1;
            setChatList((pervChatList)=>([...pervChatList,{id: newId, name: newChatName}]));
            setMessageList((prevMessageList)=>({...prevMessageList, [newId]:[]}));
        }
    }
    const handleDeleteChatClick = () => {

    }

    return (
        <>
            <div className={"chatButtons"}>
                <div className={"chatArea"}>
                    <Button variant={"outlined"}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleChatListClick}
                    >
                        Список чатов
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleChatListClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {chatList.map((chat) =>
                            <MenuItem key={chat.id} onClick={handleChatListClose}>
                                <Link to={`/chat/${chat.id}`} key={chat.id}>
                                    {chat.name}
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>

                </div>
                <div>
                    <Button onClick={handleAddChatClick}>Добавить чат</Button>
                </div>
                <Button onClick={handleDeleteChatClick}>Удалить чат</Button>
            </div>
            <Outlet context={messageList}/>
        </>
    );
}