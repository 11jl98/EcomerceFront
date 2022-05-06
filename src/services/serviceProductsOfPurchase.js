import api from "../services/axios";

class ServiceProductsOfPurchase{

  async save(dataProductsPurchase){
    return await api.post('/productspurchase', dataProductsPurchase)
  }
}

export default new ServiceProductsOfPurchase();