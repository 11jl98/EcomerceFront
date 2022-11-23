class HandleNotaFIscal {
  handleValues(dataNota){
    if(dataNota.icms.situacao_tributaria !== "101" && dataNota.icms.situacao_tributaria !== "102") {
      delete dataNota.icms.situacao_tributaria;
    }

    return dataNota
  }
}

export default new HandleNotaFIscal()