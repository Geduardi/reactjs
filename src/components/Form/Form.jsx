import {useEffect, useRef, useState} from "react";
import './Form.styles.css';
import {Button, TextField} from "@mui/material";

export const Form = ({onSubmit,label=''}) => {

    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        console.log(value)
        setValue('');
        inputRef.current?.focus();
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.which === 13) {
            event.preventDefault();
            handleSubmit(event);
        }
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <TextField variant={"outlined"} label={label} onKeyDown={handleKeyDown} multiline maxRows={3}
                       size={"small"} value={value} onChange={handleChange} inputRef={inputRef}/>
            <Button type={"submit"} variant={"contained"}>Отправить</Button>
        </form>
    )
}