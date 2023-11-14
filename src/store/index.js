import { configureStore } from '@reduxjs/toolkit'
import authSlice, { cartReducer } from '../Reducers'

const store = configureStore({
  reducer: 
   { auth: authSlice, cart: cartReducer}
  
})

export default store