class ConvertXml {
  async xmlString(xml) {
    try {
      const result = await new Promise((resolve) => {
        const xmlString = xml;
        let reader = new FileReader();
        reader.readAsText(xmlString);

        reader.onload = function (e) {
          return resolve(e.target.result);
        };

      });
      return result;
    } catch (error) {
      console.log(error, 'ocorreu um erro ao ler o arquivo')
    }

  }

  ObjectXmlPurchase(object) {
    try {
      const objectPurchase = {
        fornecedor: {},
        produtos: {}
      }

      objectPurchase.fornecedor = object.data.nfeProc.NFe[0].infNFe[0].emit
      objectPurchase.produtos = object.data.nfeProc.NFe[0].infNFe[0].det
      return objectPurchase
    } catch (error) {
      console.log('error ao atribuir objetos do xml ao objeto da nota de compra')
    }

  }
}

export default new ConvertXml()

