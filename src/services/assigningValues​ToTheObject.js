import moment from "moment";
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
      products: [],
      purchase: {
        id: "",
        idEmpresa: "",
        idFornecedor: "",
        dataCompra: moment().format("YYYY-MM-DD"),
        numeroNfe: object.purchase[0].nNF[0],
        modeloNfe: object.purchase[0].mod[0],
        serieNfe: object.purchase[0].serie[0],
        dadosAdicionais: null,
      }

    }

    supplierTotal.products = object.produtos.map((e) => {
      return {
        id: "",
        nome: e.prod[0].xProd[0],
        valor: e.prod[0].vProd[0],
        valorVenda: 0.0,
        unidade: e.prod[0].uTrib[0],
        estoque: e.prod[0].qCom[0],
        estoqueMin: 0
      };
    });
    return supplierTotal
  }
}

export default new AssigningValuesToTheObject()