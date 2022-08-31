import api from "./axios";

class SaveAllPurchase{
  async save(dataAllPurchase){
    return await api.post('/save-all-purchase', dataAllPurchase)
  }
}

export default new SaveAllPurchase();