import api from './axios'

class ServiceNotaFiscal {
  async saveNote(dataNote) {
    const { data } = await api.post('/nota', dataNote)
    return data
  }

  async saveNoteItem(noteItem) {
    const { data } = await api.post('/nota-item', noteItem)
    return data
  }

  async getProductsByIdNota(noteItem) {
    const { data } = await api.get(`/nota-item/${noteItem}`)
    return data
  }
}

export default new ServiceNotaFiscal()