import api from "../services/axios";

class SaveAllPurchase{
  async save(dataAllPurchase){
    return await api.post('/save-all-purchase', dataAllPurchase)
  }
}

export default new SaveAllPurchase();