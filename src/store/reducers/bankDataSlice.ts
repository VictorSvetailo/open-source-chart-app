import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {AxiosError} from 'axios'

import {api, BankDataType} from '../../api/api'

import {handleAsyncServerNetworkError} from '../../utils/error-utils'

import {setAppStatus} from './appSlice'

export const fetchBankData = createAsyncThunk('bankData/fetchBankData', async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await api.getBankData()
        thunkAPI.dispatch(setAppStatus({status: 'success'}))
        return res.data
    } catch (err) {
        const error = err as AxiosError
        return handleAsyncServerNetworkError(error, thunkAPI)
    }
})
const initialState = {
    bankData: [] as Array<BankDataType>
}

export const bankDataSlice = createSlice({
    name: 'bankData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBankData.fulfilled, (state, action) => {
                state.bankData = action.payload
            })
    }
})

const {reducer} = bankDataSlice
export default reducer


