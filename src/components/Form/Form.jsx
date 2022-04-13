import {useState} from "react";
import './Form.styles.css';
export const Form = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text" />
            <input type="submit" />
        </form>
    )
}