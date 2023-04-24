import {combineReducers} from 'redux'

import bankDataReducer from './reducers/bankDataSlice'
import appReducer from './reducers/appSlice'

export const rootReducer = combineReducers({
   bankData: bankDataReducer,
   app: appReducer
})