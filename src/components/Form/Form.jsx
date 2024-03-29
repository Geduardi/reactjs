import {useEffect, useRef, useState} from "react";
import './Form.styles.css';
import {Button, TextField} from "@mui/material";

export const Form = ({onSubmit, label = '', inputFocus}) => {

    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
        inputRef.current?.focus();
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event)
        }
    }


    useEffect(() => {
        inputFocus && inputRef.current?.focus();
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <TextField variant={"outlined"} label={label} onSubmit={handleSubmit} onKeyDown={handleEnter} multiline maxRows={3}
                       size={"small"} value={value} onChange={handleChange} inputRef={inputRef}/>
            <Button type={"submit"} variant={"contained"}>Отправить</Button>
        </form>
    )
}