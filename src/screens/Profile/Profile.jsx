import {useDispatch, useSelector} from "react-redux";
import {set} from "firebase/database"
import {initProfileTrack, setNameDB, setShowName, setShowNameDB, stopProfileTrack} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {Button} from "@mui/material";
import {useEffect} from "react";
import {usePrev} from "../../utils/hooks";
import {logOut, userNameRef, userShowName} from "../../services/firebase";
import {selectName, selectShowName} from "../../store/profile/selectors";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const prevName = usePrev(name); //Кастомный хук

    const handleSubmit = (text) => {
        dispatch(setNameDB(text))
    }

    const handleCheckboxChange = () => {
        dispatch(setShowNameDB(!showName))
    };


    useEffect(() => {
        dispatch(initProfileTrack())

        return () => dispatch(stopProfileTrack());
    }, [])

    // useEffect(() => {
    //     prevName && console.log(`Предыдущее имя: ${prevName}`)
    // }, [name])

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