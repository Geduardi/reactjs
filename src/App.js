import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";

import './App.css';
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {THEME} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";
import {store} from "./store";


function App() {
    return (
        <Provider store={store}>
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
        </ThemeProvider></Provider>
    )
}

export default App;
