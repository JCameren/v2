import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allArticles: [],
    singleArticle: {}
}

const articleSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        index(state, action) {
            state.allArticles = action.payload
        },
        show(state, action) {
            state.singleArticle = action.payload
        }
    }
})

export const articleActions = articleSlice.actions

export default articleSlice