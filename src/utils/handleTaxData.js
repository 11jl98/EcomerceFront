class HandleTaxNotaFIscal {
  handleValues(infoFiscal, objectIcms){
    const newInfoFiscal = {
      id: infoFiscal.id,
      descricao: infoFiscal.descricao,
      icms: [
        { ...infoFiscal.icms[0] },
      ],
      ipi: [
        { ...infoFiscal.ipi[0] },
      ],
      pis: [
        { ...infoFiscal.pis[0] },
      ],
      cofins: [
        { ...infoFiscal.cofins[0] },
      ],
      issqn: [
        { ...infoFiscal.issqn[0] },
      ],
      informacoes_fisco: infoFiscal.informacoes_fisco,
      informacoes_complementares: infoFiscal.informacoes_complementares,
    }

    const valuesToRemove = objectIcms[newInfoFiscal.icms[0].situacao_tributaria]
    
    for (const value in valuesToRemove) {
      if(!valuesToRemove[value]) {
        delete newInfoFiscal.icms[0][value]    
      }
    }

    return newInfoFiscal
  }
}

export default new HandleTaxNotaFIscal()