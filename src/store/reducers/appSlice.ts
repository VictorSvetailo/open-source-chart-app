import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RequestStatusType} from './bankDataSlice'


const appSlice = createSlice({
   name: 'app',
   initialState: {
      status: 'idle' as RequestStatusType,
      error: null as string | null
   },
   reducers: {
      setAppStatus(state, action) {
         state.status = action.payload.status
      },
      setAppError(state, action) {
         state.error = action.payload.error
      }
   }
})


const {reducer, actions} = appSlice
export const {setAppStatus, setAppError} = actions
export default reducer

