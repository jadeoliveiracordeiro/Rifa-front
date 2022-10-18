import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8080/" //colocar o banco de dados
})

export const getRiflles = async () => {
    return api.get('/4') //colocar o id da rifa
}