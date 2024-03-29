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

  async findProductsByIdNota(idNota) {
    const { data } = await api.get(`/nota-item/${idNota}`)
    return data
  }

  async findNotaById(idNota) {
    const { data } = await api.get(`/nota/${idNota}`)
    return data
  }

  async findNotaByChaveReferenciada(chave) {
    const { data } = await api.get(`/nota/buscar/nota/referenciada/${chave}`)
    return data
  } 

  async updateNota(dataNota) {
    const { data } = await api.put(`/nota/${dataNota.id}`, dataNota)
    return data
  }

  async deleteItemFromNote(idItem){
    await api.delete(`/nota-item/${idItem}`)
  }

  async deleteNotaAndItem(idNota){
    await api.delete(`/nota-item/delete-all/${idNota}`)
  }

  async sendExitNota(idNota) {
    const { data } = await api.get(`/nota/send/${idNota}`)
    return data
  }

  async sendEntryNotaDevolution(dataReturnNota, id) {
    const { data } = await api.put(`/nota/send/exit/nota/entry/${id}`, dataReturnNota)
    return data
  }
  
  async sendExitNotaDevolution(idNota) {
    const { data } = await api.get(`/nota/send/devolution/nota/exit/provider/${idNota}`)
    return data
  }

  async cancelNota(dataNota, idNota) {
    const { data } = await api.put(`/nota/cancel/nota/${idNota}`, dataNota)
    return data
  }
}

export default new ServiceNotaFiscal()