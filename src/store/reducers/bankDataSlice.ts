import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'

import {api, BankDataType} from '../../api/api'


export const fetchBankData = createAsyncThunk('bankData/fetchBankData', async () => {
   try {
      const res = await api.getBankData()
      return res.data
   } catch (err) {
      const error = err as AxiosError
      console.log(error)
      return error
      //@ts-ignore
      // return handleAsyncServerNetworkError(error, thunkAPI)
   }
})
const initialState = {
   bankData: [] as Array<BankDataType>,
   statusBankData: 'idle' as RequestStatusType
}

export const bankDataSlice = createSlice({
   name: 'bankData',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchBankData.pending, state => {
            state.statusBankData = 'loading'
         })
         .addCase(fetchBankData.fulfilled, (state, action) => {
            state.statusBankData = 'success'
            // @ts-ignore
            state.bankData = action.payload
         })
         .addCase(fetchBankData.rejected, state => {
            state.statusBankData = 'failed'
         })
   }
})

const {reducer} = bankDataSlice
export default reducer


export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'