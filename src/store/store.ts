import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {FieldErrorType} from '../api/api'

import {rootReducer} from './reducers'

export type RootReducerType = typeof rootReducer

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})



// Type
export type AppRootStateType = ReturnType<RootReducerType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppActionsType = any
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type ThunkError = {
    rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> }
}

// @ts-ignore
window.store = store
