import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

import './App.css';
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {Theme} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";
import {Articles} from "./screens/articles/Articles";


function App() {

    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/chat'} element={<ChatList/>}>
                        <Route path={':id'} element={<Chat/>}/>
                    </Route>
                    <Route path={'/articles'} element={<Articles/>}/>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
