import api from "../services/axios";

class ServiceProducts {
  async saveProducts(dataProducts){
    const {data} = await api.post('/products', {
      id: "",
      nome: dataProducts?.nome[0],
      valor: dataProducts?.valor[0],
      valorVenda: 0.0,
      unidade: dataProducts?.unidade[0],
      estoque: dataProducts?.estoque[0],
      descricao: "",
      codBarras: "",
      corReferencia: "",
      estoqueMin: "0"
    })
    return data.id
  }
}

export default new ServiceProducts