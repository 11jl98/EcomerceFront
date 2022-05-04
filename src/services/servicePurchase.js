import api from "../services/axios";

class ServicePurchase {
 async savePurchase(dataPurchase){
   console.log(dataPurchase,'log')
   const {data} = await api.post('/purchase', dataPurchase)
   return data
 }
 
}

export default new ServicePurchase()