import {useState} from "react";
import './LoginForm.css'
import {Button, TextField} from "@mui/material";


export const LoginForm = ({onSubmit, isSignUp}) => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit({login, pass, name})
        setName('')
        setLogin('')
        setPass('')
    }

    return (
        <form className={"login-form"} onSubmit={handleSubmit}>
            <Button variant={"contained"} type={"submit"}>Отправить</Button>
            <TextField placeholder={'email'} value={login} onChange={handleChangeLogin}/>
            <TextField type={"password"} minLength={6} value={pass} placeholder={'pass'} onChange={handlePassChange}/>
            {isSignUp && <TextField type={"login"} value={name} placeholder={'name'} onChange={handleNameChange}/>}
        </form>
    )
}