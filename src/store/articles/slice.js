import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allArticles: [],
    singleArticle: null,
    query: '',
    queriedArticles: []
}

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        index(state, action) {
            state.allArticles = action.payload
        },
        show(state, action) {
            state.singleArticle = action.payload
        },
        setQuery(state, action) {
            state.query = action.payload
        },
        search(state, action) {
            state.queriedArticles = action.payload
        }
    }
})

export const articleActions = articleSlice.actions

export default articleSlice