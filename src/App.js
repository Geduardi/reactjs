import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

import './App.css';
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {Theme} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";
import {Articles} from "./screens/Articles/Articles";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {useState} from "react";


function App() {
    const [authed, setAuthed] = useState(false);

    const authTrigger = () => {
        setAuthed(!authed)
    }

    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<Home authTrigger={authTrigger}/>}/>
                    <Route path={'/profile'} element={<PrivateRoute authed={authed}/>}>
                        <Route path={'/profile'} element={<Profile/>}/>
                    </Route>
                    <Route path={'/chat'} element={<ChatList/>}>
                        <Route path={':id'} element={<Chat/>}/>
                    </Route>
                    <Route path={'/Articles'} element={<Articles/>}/>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
