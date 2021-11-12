import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3334'
})

// 192.168.5.124
export default api