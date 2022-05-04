import api from "../services/axios";

class ServicePurchase {
 async savePurchase(dataPurchase){
   const {data} = await api.post('/purchase', dataPurchase)
   return data
 }
 
}

export default new ServicePurchase()