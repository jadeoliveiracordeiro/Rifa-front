import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const getRiflles = async () => {
    return api.get('/')
}