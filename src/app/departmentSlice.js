import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

const department = createSlice({
    name: 'department',
    initialState: initialState,
    reducers: {
        setListDepartment: (state, action) => {
            state = { ...state, list: action.payload }
            return state
        },
    },
})

const { reducer, actions } = department
export const { setListDepartment } = actions
export default reducer
