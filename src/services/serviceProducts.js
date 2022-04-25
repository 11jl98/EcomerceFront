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

  async getProductsForSelectBox(){
    const { data } = await api.get("/products");
    return data
  }

  async saveProductsFromXml(dataProducts){
    for(var i = 0; i < dataProducts.length; i++){
      await api.post('/products', {
        id: "",
        nome: dataProducts[i]?.nome[0],
        valor: dataProducts[i]?.valor[0],
        valorVenda: 0.0,
        unidade: dataProducts[i]?.unidade[0],
        estoque: dataProducts[i]?.estoque[0],
        descricao: "",
        codBarras: "",
        corReferencia: "",
        estoqueMin: "0"
      })
    }
    
  }
}

export default new ServiceProducts