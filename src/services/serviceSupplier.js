import api from "../services/axios";

class ServiceSupplier {
  async saveSupllier(dataSupplier) {
      if(dataSupplier === undefined){
       return
      }
      const { data } = await api.post("/Providers", dataSupplier);
      return data.id;
  }
}

export default new ServiceSupplier()