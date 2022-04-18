import {Button, Menu, MenuItem} from "@mui/material";
import './ChatList.styles.css';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {CHATS} from "../../utils/constants";


export const ChatList = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
                            onClick={handleClick}
                    >
                        Список чатов
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {CHATS.map((chat) =>
                            <MenuItem onClick={handleClose}>
                                <Link to={`/chat/${chat.id}`} key={chat.id}>
                                    {chat.name}
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>

                </div>
                <div>
                    <Button onClick={() => {
                    }}>Добавить чат</Button>
                </div>
                <Button onClick={() => {
                }}>Удалить чат</Button>
            </div>
            <Outlet/>
        </>
    );
}