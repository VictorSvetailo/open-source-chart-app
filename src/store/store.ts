import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {setAppThemeTypeLS} from '../utils/local-storage/local-storage'

import {rootReducer} from './reducers'

export type RootReducerType = typeof rootReducer

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

// Installing the application theme in LocalStorage
store.subscribe(() => {
    return setAppThemeTypeLS(store.getState().app.appThemeType)
})

// Type
export type AppRootStateType = ReturnType<RootReducerType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppActionsType = any
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store
