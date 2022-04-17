import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import './ChatList.styles.css';
import PropTypes from "prop-types";


export const ChatList = ({chats}) => {
    ChatList.prototype = {
        chats: PropTypes.array
    }

    return (
        <List className="chatArea">
            {chats.map((chat) =>
                <ListItem key={chat.id} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={chat.name}/>
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )
}