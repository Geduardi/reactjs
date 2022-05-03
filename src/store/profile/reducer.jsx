import {SET_NAME, TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    showName:false,
    name:'Вы'
}

export const profileReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            }
        }
        case SET_NAME: {
            console.log(`New name: ${payload}`)
            return {
                ...state,
                name: payload
            }
        }
        default:
            return state;
    }
}