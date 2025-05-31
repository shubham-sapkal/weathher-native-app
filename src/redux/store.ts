import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './slice/slice'

const store = configureStore({
    reducer: {
        slice: sliceReducer
    },
})

export default store;