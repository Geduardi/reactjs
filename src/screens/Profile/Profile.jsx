import {useDispatch, useSelector} from "react-redux";
import {setName, toggleCheckBox} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selectors";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleSubmit = (text) => {
        dispatch(setName(text));
    }

    const handleCheckboxChange = () => dispatch(toggleCheckBox);

    return <>
        <h4>Profile page</h4>
        {/*<button onClick={()=>{dispatch(toggleCheckBox)}}>Click</button>*/}
        <input type={"checkbox"} onChange={handleCheckboxChange} checked={showName}/>
        {showName && <span>{name}</span>}
        <Form onSubmit={handleSubmit} label={"Введите новое имя"}/>
    </>
}