import api from './axios'

class ServiceNotaFiscal{
  async saveNote(dataNotaFiscal){
    return await api.post('/nota', dataNotaFiscal)
  }
}

export default new ServiceNotaFiscal()