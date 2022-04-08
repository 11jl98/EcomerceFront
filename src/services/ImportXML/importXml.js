export const readXml = (file) => {
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function ({ target }) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(
        target.result,
        "application/xml"
      );

      const fornecedor = xmlDoc.getElementsByTagName("emit")[0];
      for (var i = 0; i < fornecedor.childElementCount; i++) {
        const teste = fornecedor.childNodes[i];
        console.log(`${teste.tagName}:${fornecedor.childNodes[i].textContent}`)
      }
    };
  } else {
    console.log("Error ao ler o arquivo");
  }
}

