import {useDispatch, useSelector} from "react-redux";
import {toggleCheckBox} from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    return <>
        <h4>Profile page</h4>
        {/*<button onClick={()=>{dispatch(toggleCheckBox)}}>Click</button>*/}
        <input type={"checkbox"} onChange={()=>{dispatch(toggleCheckBox)}} checked={state.showName}/>
        {state.showName && <span>{state.name}</span>}
    </>
}