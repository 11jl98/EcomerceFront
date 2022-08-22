import api from "../services/axios";
class ServicePurchase {
  async savePurchase(dataPurchase) {
    const { data } = await api.post('/purchase', dataPurchase)
    return data
  }

  async getProductsForGrid(id) {
    const { data } = await api.get(`/moviment-purchase/${id}`)
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
    console.log(data)

    return data 
  }

  async delete(id){
    await api.delete(`purchase/${id}`)
    console.log("oioi")
  }

}

export default new ServicePurchase()