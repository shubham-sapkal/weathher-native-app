import { createSlice } from '@reduxjs/toolkit'


const initalState = {
    selectedCity: null
}


export const slice = createSlice({
    name: 'slice',
    initialState: initalState,
    reducers: {
        setSelectedCity: (state, payload) => {
            state.selectedCity = payload.payload
        }
    }
})

export const { setSelectedCity } = slice.actions;
export default slice.reducer;