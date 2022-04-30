import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {Button, Menu, MenuItem} from "@mui/material";

import './ChatListRender.styles.css';



export const ChatListRender = ({chats,handleAddChatClick,handleDeleteChatClick}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleChatListClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChatListClose = () => {
        setAnchorEl(null);
    };


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