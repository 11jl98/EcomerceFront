import api from './axios'

class ServiceNotaFiscal{
  async saveNote(dataNote){
    const {data} = await api.post('/nota', dataNote)
    return data
  }
}

export default new ServiceNotaFiscal()