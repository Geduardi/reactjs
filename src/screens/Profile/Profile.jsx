import {useDispatch, useSelector} from "react-redux";
import {onValue,set} from "firebase/database"
import {
    INIT_TRACK,
    initProfileTrack,
    setName,
    STOP_TRACK,
    stopProfileTrack,
    toggleCheckBox
} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {usePrev} from "../../utils/hooks";
import {auth, logOut, userNameRef, userRef, userShowName} from "../../services/firebase";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    // const showName = useSelector(selectShowName);
    // const [name,setName] = useState('DefaultName');
    const [showName,setShowName] = useState(true);
    const prevName = usePrev(name); //Кастомный хук

    const handleSubmit = (text) => {
        dispatch(setName(text));
        // setName(text)
        set(userNameRef, text)
    }

    // const handleCheckboxChange = () => dispatch(toggleCheckBox);
    const handleCheckboxChange = () => {
        // setShowName(!showName)
        set(userShowName, !showName)
    };

    // useEffect(() => {
    //     dispatch({type:INIT_TRACK})
    //     return dispatch({type:STOP_TRACK})
    // },[])

    useEffect(() => {
        // const unsubscribeName = onValue(userNameRef, (snapshot) => {
            console.log(`INIT_TRACK`)
            // dispatch({type:INIT_TRACK})
        dispatch(initProfileTrack())
    // });

    const unsubscribeShowName =  onValue(userShowName, (snapshot => {
        console.log(`snapshot ShowName ${snapshot.val()}`)
        setShowName(snapshot.val())

    }))

    return () => stopProfileTrack();

    },[])

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