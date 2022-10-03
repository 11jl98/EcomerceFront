import api from "../services/axios";
class ServicePurchase {
  async savePurchase(dataPurchase) {
    const { data } = await api.post('/purchase', dataPurchase)
    return data
  }

  async getProductsForGrid(id) {
    const { data } = await api.get(`/moviment-purchase/${id}`)
    console.log(data)
    return data
  }

  async updatePurchase(id, dataPurchase) {
    const { data } = await api.put(`/purchase/update/${id}`, dataPurchase)
    return data
  }

  async searchPurchase(textPesquisa, type, page, startDate, endDate) {
    const { data } = await api.get(
      `/purchase/search?q=${textPesquisa}&type=${type}&page=${page}&startDate=${startDate}&endDate=${endDate}`
    );

    return data
  }

  async deleteAll(id){
    const {data} = await api.delete(`/moviment-purchase/${id}`)
    return data
  }

  async findPurchaseById(id){
    const {data} = await api.get(`purchase/edit/purchase/${id}`)
    return data.data
  }

  async stockAddOrRemove() {
    const { data } = await api.post('/products/stock')
    console.log(data, "to por aqui 1313")
    return data
  }
}

export default new ServicePurchase()