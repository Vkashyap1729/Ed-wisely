import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboard.reducer'

const rootReducer = {
  dashboard: dashboardReducer,
}

let store = configureStore({ reducer: rootReducer })

export default store
