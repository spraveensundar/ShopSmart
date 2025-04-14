import { combineReducers } from "redux";

import quantityReducer from "./quantityReducer";

const appReducer = combineReducers({
    cart: quantityReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer;