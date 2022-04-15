class ConvertXml {
  async xmlString(xml) {
      if(xml.type === 'text/xml'){
        const result = await new Promise((resolve) => {
          const xmlString = xml;
          let reader = new FileReader();
          reader.readAsText(xmlString);
  
          reader.onload = function (e) {
            return resolve(e.target.result);
          };
        });
        return result;
      } else {
        return null
      }
  }

  ObjectPurchase(object) {
    
      const objectPurchase = {
        fornecedor: {},
        produtos: {}
      }

      objectPurchase.fornecedor = object.data.nfeProc.NFe[0].infNFe[0].emit
      objectPurchase.produtos = object.data.nfeProc.NFe[0].infNFe[0].det
      return objectPurchase
    
  }
}

export default new ConvertXml()

