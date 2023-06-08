import articleSlice from "./articles/slice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        articles: articleSlice.reducer
    }
})

export default store