import sendRequest from "./sendRequest";

const BASE_URL = '/api/projects'

export const index = async () => {
    return sendRequest(BASE_URL)
}

export const show = async (id) => {
    return sendRequest(`${BASE_URL}/${id}`)
}