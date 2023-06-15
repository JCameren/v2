import sendRequest from "./sendRequest";

const BASE_URL = '/api/articles'

export const index = async () => {
    return sendRequest(BASE_URL)
}

export const show = async (slug) => {
    return sendRequest(`${BASE_URL}/${slug}`)
}

export const search = async (query) => {
    return sendRequest(`${BASE_URL}/search/${query}`)
}