import {createSlice} from '@reduxjs/toolkit'

import {getAppThemeTypeLS} from '../../utils/local-storage/local-storage'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isInitializeApp: 'idle' as RequestStatusType,
        appThemeType: getAppThemeTypeLS() as AppThemeType,
        error: null as string | null
    },
    reducers: {
        setAppStatus(state, action) {
            state.isInitializeApp = action.payload.status
        },
        setAppThemeType(state, action) {
            state.appThemeType = action.payload
        },
        setAppError(state, action) {
            state.error = action.payload.error
        }
    }
})

const {reducer, actions} = appSlice
export const {setAppStatus, setAppThemeType, setAppError} = actions
export default reducer

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'
export type AppThemeType = 'light' | 'dark'
