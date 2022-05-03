import {Alert} from "@mui/material";
import {Link} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {auth, logIn, signUp} from "../../services/firebase";
import {useEffect, useState} from "react";
import {updateProfile} from "firebase/auth";
import "./Home.css"

export const Home = ({isSignUp}) => {
    const [error, setError] = useState('');
    let unsubscribe;

    const handleSubmit = async ({login, pass, name}) => {
        //TODO Move logic in middleware
        try {
            if (isSignUp) {
                await signUp(login, pass)
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    //TODO Set new user in BD
                })

            } else {
                await logIn(login, pass)
            }
        } catch (e) {
            setError(e.message)
            unsubscribe = setTimeout(() => setError(''), 4000)
        }
    }

    useEffect(() => {
        return clearTimeout(unsubscribe)
    }, [])

    return (
        <>
            <h4>Домашняя страница</h4>
            {error && <Alert severity={"error"}>{error}</Alert>}
            <LoginForm onSubmit={handleSubmit} isSignUp={isSignUp}/>
            <Link className={"auth-link"} to={isSignUp ? "/" : "/signup"}
                  onClick={() => setError('')}>{isSignUp ? "To Login" : "To SignUp"}</Link>
        </>
    )
}