import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    detail: null,
}

const employee = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        setListEmployees: (state, action) => {
            state = { ...state, list: action.payload }
            return state
        },

        setDetailEmployee: (state, action) => {
            state = { ...state, detail: action.payload }
            return state
        },
    },
})

const { reducer, actions } = employee
export const { setListEmployees, setDetailEmployee } = actions
export default reducer
