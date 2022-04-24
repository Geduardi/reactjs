import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {Button, Menu, MenuItem} from "@mui/material";

import './ChatList.styles.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selctors";
import {addChat, deleteChat} from "../../store/chats/actions";


export const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, shallowEqual);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleChatListClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChatListClose = () => {
        setAnchorEl(null);
    };


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
                        {chats.map((chat) =>
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
            </div>
            <Outlet context={handleDeleteChatClick}/>
        </>
    );
}