import api from "./axios";

class ServiceProductsPurchase{
  async save(productsPurchase) {
    return await api.post("/moviment-purchase", productsPurchase)
  }

  async delete(idProduct){
    await api.delete(`/moviment-purchase/${idProduct}`)
  }

}
export default new ServiceProductsPurchase()