import {combineReducers} from 'redux'


const formReducer = (formState = {}, action) => {
    if (action.type === 'UPDATE_STATE' ){
        let obj = Object.entries(action.payload)[0]
        let key = obj[0]
        let val = obj[1]
        return {...formState, [key]: val}
    }
    return formState
}


export default combineReducers({
    formState : formReducer
}) 