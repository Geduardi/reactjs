import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import './ChatList.styles.css';

export const ChatList = ({chats}) => {
    return (
        <List className="chatArea">
            {chats.map((chat)=>
                <ListItem key={chat.id} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={chat.name} />
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )
}