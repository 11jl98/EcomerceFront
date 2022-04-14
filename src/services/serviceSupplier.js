import api from "../services/axios";

class ServiceSupplier {

  async saveSupllier(dadosSupplier) {
      const { data } = await api.post("/Providers", dadosSupplier);
      return data.id;
  }


}

export default new ServiceSupplier()