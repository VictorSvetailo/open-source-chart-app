import {setAppError, setAppStatus} from '../store/reducers/appSlice'

export const handleAsyncServerNetworkError = (error: { message: string }, thunkAPI: ThunkAPIType, showError = true) => {
   console.log(error)
   if (showError) {
      thunkAPI.dispatch(setAppError({error: error.message ? error.message : 'Some error occurred'}))
   }
   thunkAPI.dispatch(setAppStatus({status: 'failed'}))
   return thunkAPI.rejectWithValue({errors: [error.message], fieldsErrors: undefined})
}


export type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}