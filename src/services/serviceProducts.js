import api from "../services/axios";

class ServiceProducts {
  async saveProducts(dataProducts) {
    const { data } = await api.post('/products', {
      id: "",
      nome: dataProducts?.nome[0],
      valor: dataProducts?.valor[0],
      valorVenda: 0.0,
      unidade: dataProducts?.unidade[0],
      estoque: dataProducts?.estoque[0],
      descricao: null,
      codBarras: null,
      codReferencia: null,
      estoqueMin: 0
    })
    return data.id
  }

  async getProductsForSelectBox() {
    const { data } = await api.get("/products");
    return data
  }

  async saveProductsFromXml(dataProducts) {
    const adjustedProducts = dataProducts.map((e) => {
      return {
        id: e.id,
        nome: e.nome[0],
        valor: e.valor[0],
        valorVenda: e.valorVenda,
        unidade: e.unidade[0],
        estoque: e.estoque[0],
        descricao: null,
        codBarras: null,
        codReferencia: null,
        estoqueMin: 0
      }
    })

    await api.post('/products', adjustedProducts)
  }
}

export default new ServiceProducts