import { configureStore } from '@reduxjs/toolkit'
import userEmployee from './employeeSlice'
import userDepartment from './departmentSlice'

const rootReducer = {
    employee: userEmployee,
    department: userDepartment,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
