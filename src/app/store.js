import { configureStore } from '@reduxjs/toolkit'
import userEmployee from './employeeSlice'

const rootReducer = {
    employee: userEmployee,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
