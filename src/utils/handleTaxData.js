class HandleTaxNotaFIscal {
  handleValues(infoFiscal, objectIcms) {
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
      if (!valuesToRemove[value]) {
        delete newInfoFiscal.icms[0][value]
      }
    }

    return newInfoFiscal
  }

  clearTax() {
    const result = {
      id: "",
      descricao: "",
      icms: [
        {
          tipo_tributacao: "simples_nacional",
          cenario: "saida_dentro_estado",
          tipo_pessoa: "fisica",
          nao_contribuinte: false,
          codigo_cfop: "5102",
          situacao_tributaria: "102",
          aliquota_credito: "",
          aliquota_mva: [
            {
              estado: "",
              aliquota: "0.00",
            },
          ],
          aliquota_diferimento: "0.00",
          aliquota_diferimento_fcp: "0.00",
          aliquota_reducao: "0.00",
          aliquota_reducao_st: "0.00",
          motivo_desoneracao: "9",
          motivo_desoneracao_st: "9",
          beneficio_fiscal: [
            {
              estado: "",
              codigo: "",
            },
          ],
        },
      ],
      ipi: [
        {
          cenario: "padrao",
          tipo_pessoa: "fisica",
          situacao_tributaria: "99",
          codigo_enquadramento: "999",
          aliquota: "0.00",
        },
      ],
      pis: [
        {
          cenario: "padrao",
          tipo_pessoa: "fisica",
          situacao_tributaria: "99",
          aliquota: "0.00",
        },
      ],
      cofins: [
        {
          cenario: "padrao",
          tipo_pessoa: "fisica",
          situacao_tributaria: "99",
          aliquota: "0.00",
        },
      ],
      issqn: [
        {
          cenario: "",
          tipo_pessoa: "",
          codigo_cfop: "",
          exigibilidade: "",
          item_servico: "",
          incentivo_fiscal: "",
          aliquota: "",
        },
      ],
      informacoes_fisco: "",
      informacoes_complementares: "",
    }
    return result
  }
}

export default new HandleTaxNotaFIscal()