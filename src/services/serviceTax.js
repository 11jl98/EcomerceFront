import api from "../services/axios";

class ServiceTax {
  async save(taxes){
    const { data } = await api.post('/impostos', taxes)
    return data
  }

  async delete(dataRef) {
     await api.delete(`/impostos/${dataRef.id}?classImposto=${dataRef.ref}`)
  }

  async findAllRefs() {
    const { data } = await api.get('/impostos')
    return data
  }
}

export default new ServiceTax()