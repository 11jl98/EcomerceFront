class AssigningValuesToTheObject {
  assigningValues(object) {
    const supplierTotal = {
      supplier: {
        id: "",
        nomeFantasia: object.fornecedor[0].xFant[0],
        razaoSocial: object.fornecedor[0].xNome[0],
        cpfCnpj: object.fornecedor[0].CNPJ[0],
        ie: object.fornecedor[0].IE[0],
        endereco: object.fornecedor[0].enderEmit[0].xLgr[0],
        numero: object.fornecedor[0].enderEmit[0].nro[0],
        bairro: object.fornecedor[0].enderEmit[0].xBairro[0],
        cidade: object.fornecedor[0].enderEmit[0].xMun[0],
        uf: object.fornecedor[0].enderEmit[0].UF[0],
        telefone: object.fornecedor[0].enderEmit[0].fone[0],
      },
      products: []
    }

    supplierTotal.products = object.produtos.map((e) => {
      return {
        id: "",
        nome: e.prod[0].xProd,
        valor: e.prod[0].vProd,
        valorVenda: 0.0,
        unidade: e.prod[0].uTrib,
        estoque: e.prod[0].qCom,
      };
    });

    return supplierTotal
  }
}

export default new AssigningValuesToTheObject()