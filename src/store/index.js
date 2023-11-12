import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../Reducers'

const store = configureStore({
  reducer: 
    authSlice
  
})

export default store