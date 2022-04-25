import api from "../services/axios";

class ServiceSupplier {
  async saveSupllier(dataSupplier) {
      if(dataSupplier === undefined){
       return
      }
      const { data } = await api.post("/Providers", dataSupplier);
      return data.id;
  }

  async getSuppliersForSelectBox(){
    const { data } = await api.get("/providers/fill/combobox");
    return data
  }
}

export default new ServiceSupplier()