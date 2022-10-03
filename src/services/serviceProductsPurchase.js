import api from "./axios";

class ServiceProductsPurchase{
  async save(productsPurchase) {
    console.log(productsPurchase, "22221111")
    return await api.post("/moviment-purchase", productsPurchase)
  }

  async delete(idProduct){
    await api.delete(`/moviment-purchase/deleteProductsMoviment/${idProduct}`)
  }

}
export default new ServiceProductsPurchase()