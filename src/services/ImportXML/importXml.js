class ImportXML {
  readXml(file) {

    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = function ({ target }) {
      // data.append('xml', xmlDoc)
      // console.log(xmlDoc)
      // return data
      const xmlString = target.result
      console.log(xmlString)
      return xmlString
    };
  }
}

export default new ImportXML()
