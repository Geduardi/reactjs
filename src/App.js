import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {onAuthStateChanged} from "firebase/auth"

import './App.css';
import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {Theme} from "./utils/theme";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./screens/Profile/Profile";
import {Articles} from "./screens/Articles/Articles";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {useEffect, useState} from "react";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";
import {auth} from "./services/firebase";


function App() {
    const [authed, setAuthed] = useState(false);

    const handleLogin = () => {
        setAuthed(true)
    }

    const handleLogOut = () => {
        setAuthed(false)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if (user) {
                handleLogin()
            } else {
                handleLogOut()
            }
        })
        return unsubscribe;
    },[])

    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<PublicRoute authed={authed}/>}>
                        <Route path={''} element={<Home/>}/>
                        <Route path={'signup'} element={<Home isSignUp/>}/>
                    </Route>
                    <Route path={''} element={<PrivateRoute authed={authed}/>}>
                        <Route path={'/chat'} element={<ChatList/>}>
                            <Route path={':id'} element={<Chat/>}/>
                        </Route>
                        <Route path={'/profile'} element={<Profile/>}/>
                    </Route>

                    <Route path={'/Articles'} element={<Articles/>}/>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
