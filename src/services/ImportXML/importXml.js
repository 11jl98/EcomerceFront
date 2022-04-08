class ImportXML {
  readXml(file) {
    if (file) {
      let objetcTotal = []
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
        let textContentProviderInTagName;
        let tagNameProvider;

        let enderProvider = xmlDoc.getElementsByTagName("enderEmit")[0]
        let dataEnderProvider = Array.from(enderProvider.childNodes)
        let textContentEnderProviderInTagName;
        let tagNameEnderProvider;



        dataProvider.map((e) => {
          tagNameProvider = e.tagName;
          textContentProviderInTagName = e.textContent;

          if (tagNameProvider === "enderEmit") {
            dataEnderProvider.map((e) => {
              tagNameEnderProvider = e.tagName
              textContentEnderProviderInTagName = e.textContent

              objetcTotal.push({ [tagNameEnderProvider]: textContentEnderProviderInTagName })
            })

          }
          objetcTotal.push({ [tagNameProvider]: textContentProviderInTagName })
        })
        

        // for (var i = 0; i < provider.childElementCount; i++) {
        //   const dataProvider = provider.childNodes[i];
        //   const tagNameProvider = dataProvider.tagName;
        //   const textContentInTagName = provider.childNodes[i].textContent;

        //   if(tagNameProvider === "enderEmit"){
        //     const enderEmite = xmlDoc.getElementsByTagName("enderEmit")[0]
        //     for (var e = 0; e < enderEmite.childElementCount; e++) {
        //       const dataEnderProvider = enderEmite.childNodes[e]
        //       const tagNameEnderProvider = dataEnderProvider.tagName
        //       const textContentEnderProviderInTagName = enderEmite.childNodes[e].textContent

        //       const objectDataEnderProvider = {[tagNameEnderProvider]: textContentEnderProviderInTagName}
        //       console.log(objectDataEnderProvider)
        //     }
        //   }

        //   const objectDataProviders= {[tagNameProvider] : textContentInTagName}

        //   console.log(objectDataProviders)
        // }
      };
      return objetcTotal
    } else {
      console.log("Error ao ler o arquivo");
    }
  }
}

export default new ImportXML()
