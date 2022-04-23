import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import './Menu.styles.css';

export const Menu = () => {
    return (
        <List className={"menu"}>
            <ListItem disablePadding>
                <NavLink to={'/'} style={({isActive}) => ({color: isActive ? "blueviolet" : "white"})}>
                    <ListItemButton>
                        <ListItemText primary={"Главная"}/>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem disablePadding>
                <NavLink to={'/chat'}
                         style={({isActive}) => ({color: isActive ? "blueviolet" : "white"})}>
                    <ListItemButton>
                        <ListItemText primary={"Чаты"}/>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem disablePadding>
                <NavLink to={'/profile'}
                         style={({isActive}) => ({color: isActive ? "blueviolet" : "white"})}>
                    <ListItemButton>
                        <ListItemText primary={"Профиль"}/>
                    </ListItemButton>
                </NavLink>
            </ListItem>
        </List>
    )
}