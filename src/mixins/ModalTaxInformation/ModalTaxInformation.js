import ServiceTax from "../../services/serviceTax";
import toastAlertErros from "../../utils/toastAlertErros";

const mixinTaxInformations = {
  data() {
    return {
      infoFiscal: {
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
      },
      taxForSelectBoxes: {
        icms: {
          tipo_tributacao: [
            { value: "simples_nacional", text: "Simples Nacional" },
            { value: "tributacao_normal", text: "Tributação Normal" },
          ],
          cenario: [
            { value: "saida_dentro_estado", text: "Saída dentro do estado" },
            {
              value: "saida_fora_estado",
              text: "Saída fora do estado",
            },
            {
              value: "entrada_dentro_estado",
              text: "Entrada dentro do estado",
            },
            {
              value: "entrada_fora_estado",
              text: "Entrada fora do estado",
            },
            { value: "saida_exterior", text: "Saída para o Exterior" },
            { value: "entrada_exterior", text: "Entrada do Exterior" },
          ],
          tipo_pessoa: [
            { value: "fisica", text: "Fisica" },
            { value: "juridica", text: "Juridica" },
            { value: "estrangeira", text: "Estrangeira" },
          ],
          situacao_tributaria: [
            { value: "101", text: "101 - Tributada com permissão de crédito" },
            { value: "102", text: "102 - Tributada sem permissão de crédito" },
            {
              value: "103",
              text: "103 - Isenção do ICMS para faixa de receita bruta",
            },
            {
              value: "201",
              text: "201 - Tributada com permissão de crédito e com cobrança do ICMS por substituição tributária",
            },
            {
              value: "202",
              text: "202 - Tributada sem permissão de crédito e com cobrança do ICMS por substituição tributária",
            },
            {
              value: "203",
              text: "203 - Isenção do ICMS para faixa de receita bruta e com cobrança do ICMS por substituição tributária",
            },
            { value: "300", text: "300 - Imune" },
            { value: "400", text: "400 - Não tributada" },
            {
              value: "500",
              text: "500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação",
            },
            { value: "900", text: "900 - Outros" },
            { value: "00", text: "00 - Tributada integralmente" },
            {
              value: "10",
              text: "10 - Tributada e com cobrança do ICMS por substituição tributária",
            },
            { value: "20", text: "20 - Com redução da base de cálculo" },
            {
              value: "30",
              text: "30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária",
            },
            { value: "40", text: "40 - Isenta" },
            { value: "41", text: "41 - Não tributada" },
            { value: "50", text: "50 - Suspensão" },
            { value: "51", text: "51 - Diferimento" },
            {
              value: "60",
              text: "60 - ICMS cobrado anteriormente por substituição tributária",
            },
            {
              value: "70",
              text: "70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária",
            },
            { value: "90", text: "90 - Outros" },
          ],
          motivo_desoneracao: [
            { value: "3", text: "3 - Uso na agropecuária" },
            { value: "9", text: "9 - Outros" },
            {
              value: "12",
              text: "12 - Órgão de fomento e desenvolvimento agropecuário",
            },
          ],
          motivo_desoneracao_st: [
            { value: "3", text: "3 - Uso na agropecuária" },
            { value: "9", text: "9 - Outros" },
            {
              value: "12",
              text: "12 - Órgão de fomento e desenvolvimento agropecuário",
            },
          ],
          estados: [
            { value: "AC", text: "AC" },
            { value: "AL", text: "AL" },
            { value: "AP", text: "AP" },
            { value: "AM", text: "AM" },
            { value: "BA", text: "BA" },
            { value: "CE", text: "CE" },
            { value: "ES", text: "ES" },
            { value: "GO", text: "GO" },
            { value: "MA", text: "MA" },
            { value: "MT", text: "MT" },
            { value: "MS", text: "MS" },
            { value: "MG", text: "MG" },
            { value: "PA", text: "PA" },
            { value: "PB", text: "PB" },
            { value: "PR", text: "PR" },
            { value: "PE", text: "PE" },
            { value: "PI", text: "PI" },
            { value: "RJ", text: "RJ" },
            { value: "RN", text: "RN" },
            { value: "RS", text: "RS" },
            { value: "RO", text: "RO" },
            { value: "RR", text: "RR" },
            { value: "SC", text: "SC" },
            { value: "SP", text: "SP" },
            { value: "SE", text: "SE" },
            { value: "TO", text: "TO" },
            { value: "DF", text: "DF" },
          ],
          beneficioFiscalEstados: [
            { value: "DF", text: "DF" },
            { value: "PR", text: "PR" },
            { value: "RS", text: "RS" },
            { value: "RJ", text: "RJ" },
          ],
        },
        ipi: {
          cenario: [
            { value: "padrao", text: "Padrão (Abrange todos os cenários)" },
            {
              value: "saida_dentro_estado",
              text: "Saída dentro do estado",
            },
            {
              value: "saida_fora_estado",
              text: "Saída fora do estado",
            },
            {
              value: "entrada_dentro_estado",
              text: "Entrada dentro do estado",
            },
            {
              value: "entrada_fora_estado",
              text: "Entrada fora do estado",
            },
            { value: "saida_exterior", text: "Saída para o Exterior" },
            { value: "entrada_exterior", text: "Entrada do Exterior" },
          ],
          tipo_pessoa: [
            { value: "fisica", text: "Fisica" },
            { value: "juridica", text: "Juridica" },
            { value: "estrangeira", text: "Estrangeira" },
          ],
          situacao_tributaria: [
            { value: "00", text: "00 - Entrada com recuperação de crédito" },
            { value: "01", text: "01 - Entrada tributada com alíquota zero" },
            { value: "02", text: "02 - Entrada isenta" },
            { value: "03", text: "03 - Entrada não-tributada" },
            { value: "04", text: "04 - Entrada imune" },
            { value: "05", text: "05 - Entrada com suspensão" },
            { value: "49", text: "49 - Outras entradas" },
            { value: "50", text: "50 - Saída tributada" },
            { value: "51", text: "51 - Saída tributada com alíquota zero" },
            { value: "52", text: "52 - Saída isenta" },
            { value: "53", text: "53 - Saída não-tributada" },
            { value: "54", text: "54 - Saída imune" },
            { value: "55", text: "55 - Saída com suspensão" },
            { value: "99", text: "99 - Outras saídas" },
          ],
        },
        pis: {
          cenario: [
            { value: "padrao", text: "Padrão (Abrange todos os cenários)" },
            {
              value: "saida_dentro_estado",
              text: "Saída dentro do estado",
            },
            {
              value: "saida_fora_estado",
              text: "Saída fora do estado",
            },
            {
              value: "entrada_dentro_estado",
              text: "Entrada dentro do estado",
            },
            {
              value: "entrada_fora_estado",
              text: "Entrada fora do estado",
            },
            { value: "saida_exterior", text: "Saída para o Exterior" },
            { value: "entrada_exterior", text: "Entrada do Exterior" },
          ],
          tipo_pessoa: [
            { value: "fisica", text: "Fisica" },
            { value: "juridica", text: "Juridica" },
            { value: "estrangeira", text: "Estrangeira" },
          ],
          situacao_tributaria: [
            {
              value: "01",
              text: "01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)",
            },
            {
              value: "02",
              text: "02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)",
            },
            {
              value: "03",
              text: "03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto",
            },
            {
              value: "04",
              text: "04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)",
            },
            {
              value: "05",
              text: "05 - Operação Tributável - (Substituição Tributária)",
            },
            {
              value: "06",
              text: "06 - Operação Tributável (Alíquota Zero)",
            },
            {
              value: "07",
              text: "07 - Operação Isenta de Contribuição",
            },
            {
              value: "08",
              text: "08 - Operação sem Incidência da Contribuição",
            },
            {
              value: "09",
              text: "09 - Operação com Suspensão da Contribuição",
            },
            {
              value: "49",
              text: "49 - Outras Operações de Saída",
            },
            {
              value: "50",
              text: "50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            },
            {
              value: "51",
              text: "51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno",
            },
            {
              value: "52",
              text: "52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação",
            },
            {
              value: "53",
              text: "53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno",
            },
            {
              value: "54",
              text: "54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "55",
              text: "55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "56",
              text: "56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            },
            {
              value: "60",
              text: "60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            },
            {
              value: "61",
              text: "61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno",
            },
            {
              value: "62",
              text: "62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação",
            },
            {
              value: "63",
              text: "63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno",
            },
            {
              value: "64",
              text: "64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "65",
              text: "65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "66",
              text: "66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            },
            {
              value: "67",
              text: "67 - Crédito Presumido - Outras Operações",
            },
            {
              value: "70",
              text: "70 - Operação de Aquisição sem Direito a Crédito",
            },
            {
              value: "71",
              text: "71 - Operação de Aquisição com Isenção",
            },
            {
              value: "72",
              text: "72 - Operação de Aquisição com Suspensão",
            },
            {
              value: "73",
              text: "73 - Operação de Aquisição a Alíquota Zero",
            },
            {
              value: "74",
              text: "74 - Operação de Aquisição sem Incidência da Contribuição",
            },
            {
              value: "75",
              text: "75 - Operação de Aquisição por Substituição Tributária",
            },
            {
              value: "98",
              text: "98 - Outras Operações de Entrada",
            },
            {
              value: "99",
              text: "99 - Outras Operações",
            },
          ],
        },
        cofins: {
          cenario: [
            { value: "padrao", text: "Padrão (Abrange todos os cenários)" },
            {
              value: "saida_dentro_estado",
              text: "Saída dentro do estado",
            },
            {
              value: "saida_fora_estado",
              text: "Saída fora do estado",
            },
            {
              value: "entrada_dentro_estado",
              text: "Entrada dentro do estado",
            },
            {
              value: "entrada_fora_estado",
              text: "Entrada fora do estado",
            },
            { value: "saida_exterior", text: "Saída para o Exterior" },
            { value: "entrada_exterior", text: "Entrada do Exterior" },
          ],
          tipo_pessoa: [
            { value: "fisica", text: "Fisica" },
            { value: "juridica", text: "Juridica" },
            { value: "estrangeira", text: "Estrangeira" },
          ],
          situacao_tributaria: [
            {
              value: "01",
              text: "01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)",
            },
            {
              value: "02",
              text: "02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)",
            },
            {
              value: "03",
              text: "03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto",
            },
            {
              value: "04",
              text: "04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)",
            },
            {
              value: "05",
              text: "05 - Operação Tributável - (Substituição Tributária)",
            },
            {
              value: "06",
              text: "06 - Operação Tributável (Alíquota Zero)",
            },
            {
              value: "07",
              text: "07 - Operação Isenta de Contribuição",
            },
            {
              value: "08",
              text: "08 - Operação sem Incidência da Contribuição",
            },
            {
              value: "09",
              text: "09 - Operação com Suspensão da Contribuição",
            },
            {
              value: "49",
              text: "49 - Outras Operações de Saída",
            },
            {
              value: "50",
              text: "50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            },
            {
              value: "51",
              text: "51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno",
            },
            {
              value: "52",
              text: "52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação",
            },
            {
              value: "53",
              text: "53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno",
            },
            {
              value: "54",
              text: "54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "55",
              text: "55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "56",
              text: "56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            },
            {
              value: "60",
              text: "60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            },
            {
              value: "61",
              text: "61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno",
            },
            {
              value: "62",
              text: "62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação",
            },
            {
              value: "63",
              text: "63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno",
            },
            {
              value: "64",
              text: "64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "65",
              text: "65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            },
            {
              value: "66",
              text: "66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            },
            {
              value: "67",
              text: "67 - Crédito Presumido - Outras Operações",
            },
            {
              value: "70",
              text: "70 - Operação de Aquisição sem Direito a Crédito",
            },
            {
              value: "71",
              text: "71 - Operação de Aquisição com Isenção",
            },
            {
              value: "72",
              text: "72 - Operação de Aquisição com Suspensão",
            },
            {
              value: "73",
              text: "73 - Operação de Aquisição a Alíquota Zero",
            },
            {
              value: "74",
              text: "74 - Operação de Aquisição sem Incidência da Contribuição",
            },
            {
              value: "75",
              text: "75 - Operação de Aquisição por Substituição Tributária",
            },
            {
              value: "98",
              text: "98 - Outras Operações de Entrada",
            },
            {
              value: "99",
              text: "99 - Outras Operações",
            },
          ],
        },
        issqn: {
          cenario: [
            { value: "padrao", text: "Padrão (Abrange todos os cenários)" },
            {
              value: "saida_dentro_estado",
              text: "Saída dentro do estado",
            },
            {
              value: "saida_fora_estado",
              text: "Saída fora do estado",
            },
            {
              value: "entrada_dentro_estado",
              text: "Entrada dentro do estado",
            },
            {
              value: "entrada_fora_estado",
              text: "Entrada fora do estado",
            },
            { value: "saida_exterior", text: "Saída para o Exterior" },
            { value: "entrada_exterior", text: "Entrada do Exterior" },
          ],
          tipo_pessoa: [
            { value: "fisica", text: "Fisica" },
            { value: "juridica", text: "Juridica" },
            { value: "estrangeira", text: "Estrangeira" },
          ],
          exigibilidade: [
            { value: "1", text: "Exigível" },
            { value: "2", text: "Não incidência" },
            { value: "3", text: "Isenção" },
            { value: "4", text: "Exportação" },
            { value: "5", text: "Imunidade" },
            { value: "6", text: "Exigibilidade Suspensa por Decisão Judicial" },
            {
              value: "7",
              text: "Exigibilidade Suspensa por Processo Administrativo",
            },
          ],
          incentivo_fiscal: [
            { value: "1", text: "Sim" },
            { value: "2", text: "Não" },
          ],
        },
      },
      enableISSQN: true,
      enableBeneficioFiscal: false,
      objectIcms: {
        "101": {
          aliquota_credito: true,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "102": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "103": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "201": {
          aliquota_credito: true,
          aliquota_mva: true,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "202": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "203": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "300": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "400": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "500": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "900": {
          aliquota_credito: true,
          aliquota_mva: true,
          aliquota_diferimento: true,
          aliquota_diferimento_fcp: true,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "00": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "10": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: true,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "20": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: true,
          aliquota_reducao_st: false,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "30": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: true,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "40": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "41": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "50": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "51": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: true,
          aliquota_diferimento_fcp: true,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "60": {
          aliquota_credito: false,
          aliquota_mva: false,
          aliquota_diferimento: false,
          aliquota_diferimento_fcp: false,
          aliquota_reducao: false,
          aliquota_reducao_st: false,
          motivo_desoneracao: false,
          motivo_desoneracao_st: false,
          beneficio_fiscal: false,
        },
        "70": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: true,
          aliquota_diferimento_fcp: true,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
        "90": {
          aliquota_credito: false,
          aliquota_mva: true,
          aliquota_diferimento: true,
          aliquota_diferimento_fcp: true,
          aliquota_reducao: true,
          aliquota_reducao_st: true,
          motivo_desoneracao: true,
          motivo_desoneracao_st: true,
          beneficio_fiscal: true,
        },
      },
    };
  },
  methods: {
    async save() {
      try {
        const handleSendInfoFiscal = { ...this.infoFiscal };
        if (this.enableISSQN) {
          delete handleSendInfoFiscal.issqn;
        }

        const result = await ServiceTax.save(handleSendInfoFiscal);
        this.infoFiscal.id = result.id;

        return this.$toast.open({
          message: "REF gerado com sucesso!",
          type: "success",
        });
      } catch (error) {
        if (error.response.data.erros.length > 0) {
          console.log(error.response.data);
          return toastAlertErros.validateErroDoesNotContainFor(
            error,
            this.$toast
          );
        } else {
          return toastAlertErros.validateMessage(error, this.$toast);
        }
      }
    },
    async update() {
      console.log("atualizando REF jaja");
    },
    handleSaveOrUpdate() {
      this.infoFiscal.id !== "" ? this.update() : this.save();
    },
    handleChangeIssqn() {
      this.enableISSQN = !this.enableISSQN;
    },
    handleInputsIcms() {
      if (this.infoFiscal.icms[0].tipo_tributacao === "simples_nacional") {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    enableISSQN() {
      this.infoFiscal.issqn = [
        {
          cenario: "",
          tipo_pessoa: "",
          exigibilidade: "",
          item_servico: "",
          incentivo_fiscal: "",
          aliquota: "",
        },
      ];
    },
  },
}

export default mixinTaxInformations;