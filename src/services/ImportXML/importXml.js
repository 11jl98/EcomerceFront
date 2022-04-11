class ImportXML {
  readXml(file) {
    if (file) {
      let objetcTotal = {
        provider: {

        },
        products: {

        }

      }


      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = function ({ target }) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(
          target.result,
          "application/xml"
        );

        let provider = xmlDoc.getElementsByTagName("emit")[0];
        let dataProvider = Array.from(provider.childNodes);

        let enderProvider = xmlDoc.getElementsByTagName("enderEmit")[0]
        let dataEnderProvider = Array.from(enderProvider.childNodes)

        objetcTotal.provider = dataProvider.reduce((prev, current) => {
          const tag = current.tagName
          const text = current.textContent
          if (tag === "enderEmit") {
            dataEnderProvider.forEach((e) => prev[e.tagName] = e.textContent)
          } else {
            prev[tag] = text
          }
          return prev
        }, {})


        // objetcTotal.products 
        let productsDetails = Array.from(xmlDoc.getElementsByTagName("prod"))
        objetcTotal.products = productsDetails.reduce((prev, current) => {
          let objectProducts = {}

          let dataProductsDetails = Array.from(current.childNodes)
          dataProductsDetails.forEach((e) => {

            const tag = e.tagName
            const text = e.textContent
            objectProducts[tag]=text
            })
            prev.push(objectProducts)
          return prev
        }, [])
        console.log(objetcTotal)
      };
      return objetcTotal
    } else {
      console.log("Error ao ler o arquivo");
    }
  }
}

export default new ImportXML()
