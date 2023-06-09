import { articleActions } from "./slice";
import * as articleAPI from "../../utils/articleAPI"

export const index = () => {
    return async (dispatch) => {
        const allArticles = async () => {
            return await articleAPI.index()
        }

        try {
            const articles = await allArticles()
            dispatch(articleActions.index(articles))
        } catch (err) {
            throw new Error("Failed to index all articles.")
        }
    }
}


export const show = (slug) => {
    return async (dispatch) => {
        const singleArticle = async () => {
            return await articleAPI.show(slug)
        }

        try {
            const article = await singleArticle()
            dispatch(articleActions.show(article))
        } catch (err) {
            throw new Error("Failed to query specified article.")
        }
    }
}