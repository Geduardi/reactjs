import {useDispatch, useSelector} from "react-redux";
import {setName, toggleCheckBox} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {Button} from "@mui/material";
import {useEffect} from "react";
import {usePrev} from "../../utils/hooks";
import {logOut} from "../../services/firebase";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const prevName = usePrev(name);

    const handleSubmit = (text) => {
        dispatch(setName(text));
    }

    const handleCheckboxChange = () => dispatch(toggleCheckBox);

    useEffect(() => {
        prevName && console.log(`Предыдущее имя: ${prevName}`)
    }, [name])

    return <>
        <h4>Profile page</h4>
        <div>
            <input type={"checkbox"} onChange={handleCheckboxChange} checked={showName}/>
            {showName && <span>{name}</span>}
        </div>
        <Form onSubmit={handleSubmit} label={"Введите новое имя"}/>
        <Button onClick={logOut} variant={"outlined"}>Выход</Button>
    </>
}