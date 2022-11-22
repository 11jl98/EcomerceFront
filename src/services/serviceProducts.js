import api from "../services/axios";

class ServiceProducts {
  async saveProducts(dataProducts) {
    const { data } = await api.post('/products', dataProducts)
    return data.id
  }

  async updateProducts(dataProducts) {
    await api.put(`/products/${dataProducts.id}`, dataProducts)
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

  async getProductById(idProduct){
    const { data } = await api.get(`/products/${idProduct}`);
    return data
  }
}

export default new ServiceProducts