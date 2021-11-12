import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.5.124:3334'
})

// 192.168.5.124
export default api