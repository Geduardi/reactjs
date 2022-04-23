import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {ThemeProvider} from "@mui/material";
import {THEME} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";


function App() {
    return (
        <ThemeProvider theme={THEME}>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/chat'} element={<ChatList/>}>
                        <Route path={':id'} element={<Chat/>}/>
                    </Route>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
