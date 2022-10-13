import api from './axios'

class ServiceNotaFiscal {
  async saveNota(dataNote) {
    const { data } = await api.post('/nota', dataNote)
    return data
  }

  async saveNotaItem(noteItem) {
    const { data } = await api.post('/nota-item', noteItem)
    return data
  }

  async findProductsByIdNota(id) {
    const { data } = await api.get(`/nota-item/${id}`)
    return data
  }

  async findNotaById(id) {
    const { data } = await api.get(`/nota/${id}`)
    return data
  }

  async updateNota(dataNota) {
    const { data } = await api.put(`/nota/${dataNota.id}`, dataNota)
    return data
  }

  async deleteItemFromNote(id){
    await api.delete(`/nota-item/${id}`)
  }

  async deleteNotaAndItem(id){
    await api.delete(`/nota-item/delete-all/${id}`)
  }
}

export default new ServiceNotaFiscal()