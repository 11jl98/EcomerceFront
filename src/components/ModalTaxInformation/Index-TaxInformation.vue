<template>
  <div>
    <b-modal
      id="modalTaxInformation"
      size="xl"
      title="Preencher informações fiscais"
      ok-title="Salvar"
      centered
    >
      <template #modal-footer>
        <div
          class="
            col-sm-12 col-md-12 col-lg-12 col-xl-12
            d-flex
            justify-content-end
          "
        >
          <div>
            <b-button variant="info" size="sm" @click="testeeeee"
              >Salvar</b-button
            >
          </div>
        </div>
      </template>
      <div>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="Geral" active
              ><b-card-text>
                <b-form-group
                  id="input-group-1"
                  label="Descrição"
                  label-for="textarea"
                  size="sm"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Descreva a classificação desse imposto para melhor gerenciamento. Ex: Classe de impostos para Saída de produtos de fabricação própria."
                    rows="6"
                    no-resize
                    v-model="infoFiscal.geral"
                  ></b-form-textarea>
                </b-form-group> </b-card-text
            ></b-tab>
            <b-tab title="ICMS"
              ><b-card class="p-2">
                <b-row>
                  <b-input-group prepend="Tipo de Tributação" class="mb-3">
                    <b-form-select
                      v-model="infoFiscal.icms.tipo_tributacao"
                      :options="dadosImposto.icms.tipo_tributacao"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-input-group>

                  <b-input-group prepend="Cenário" class="mb-3">
                    <b-form-select
                      v-model="infoFiscal.icms.cenario"
                      :options="dadosImposto.icms.cenario"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-input-group>

                  <b-input-group prepend="Tipo pessoa" class="mb-3">
                    <b-form-select
                      v-model="infoFiscal.icms.tipo_pessoa"
                      :options="dadosImposto.icms.tipo_pessoa"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-input-group>

                  <b-form-group
                    :hidden="infoFiscal.icms.tipo_pessoa !== 'juridica'"
                  >
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="infoFiscal.icms.nao_contribuinte"
                      name="checkbox-1"
                    >
                      Marque essa opção caso a configuração deste cenário seja
                      específico para Pessoa Jurídica não contribuinte do ICMS
                      ou Consumidor final.
                    </b-form-checkbox>
                  </b-form-group>

                  <b-input-group prepend="Código CFOP" class="mb-3">
                    <b-form-input
                      v-model="infoFiscal.icms.codigo_cfop"
                      text-field="text"
                      type="text"
                      maxlength="4"
                    ></b-form-input
                  ></b-input-group>

                  <b-input-group prepend="Situação tributária">
                    <b-form-select
                      v-model="infoFiscal.icms.situacao_tributaria"
                      :options="dadosImposto.icms.situacao_tributaria"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-input-group>
                </b-row> </b-card
            ></b-tab>
            <b-tab title="IPI"
              ><b-card-text
                ><b-card class="p-2">
                  <b-row>
                    <b-input-group prepend="Tipo pessoa" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.ipi.tipo_pessoa"
                        :options="dadosImposto.ipi.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Cenário" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.ipi.cenario"
                        :options="dadosImposto.ipi.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Situação tributária" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.ipi.situacao_tributaria"
                        :options="dadosImposto.ipi.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group
                      prepend="Código de enquadramento"
                      class="mb-3"
                    >
                      <b-form-input
                        v-model="infoFiscal.ipi.codigo_enquadramento"
                        text-field="text"
                        type="text"
                      ></b-form-input>
                      <p style="color: red; margin-bottom: 0 !important">
                        Caso não possua um código de enquadramento, mantenha o
                        valor padrão 999.
                      </p></b-input-group
                    >

                    <b-input-group prepend="Alíquota %">
                      <b-form-input
                        v-model="infoFiscal.ipi.aliquota"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-input-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="PIS"
              ><b-card-text
                ><b-card class="p-2">
                  <b-row>
                    <b-input-group prepend="Tipo de Tributação" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_tributacao"
                        :options="dadosImposto.icms.tipo_tributacao"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Cenário" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.cenario"
                        :options="dadosImposto.icms.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Tipo pessoa" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_pessoa"
                        :options="dadosImposto.icms.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-form-group
                      :hidden="infoFiscal.icms.tipo_pessoa !== 'juridica'"
                    >
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="infoFiscal.icms.nao_contribuinte"
                        name="checkbox-1"
                      >
                        Marque essa opção caso a configuração deste cenário seja
                        específico para Pessoa Jurídica não contribuinte do ICMS
                        ou Consumidor final.
                      </b-form-checkbox>
                    </b-form-group>

                    <b-input-group prepend="Código CFOP" class="mb-3">
                      <b-form-input
                        v-model="infoFiscal.icms.codigo_cfop"
                        text-field="text"
                        type="text"
                        maxlength="4"
                      ></b-form-input
                    ></b-input-group>

                    <b-input-group prepend="Situação tributária">
                      <b-form-select
                        v-model="infoFiscal.icms.situacao_tributaria"
                        :options="dadosImposto.icms.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="COFINS"
              ><b-card-text
                ><b-card class="p-2">
                  <b-row>
                    <b-input-group prepend="Tipo de Tributação" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_tributacao"
                        :options="dadosImposto.icms.tipo_tributacao"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Cenário" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.cenario"
                        :options="dadosImposto.icms.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Tipo pessoa" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_pessoa"
                        :options="dadosImposto.icms.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-form-group
                      :hidden="infoFiscal.icms.tipo_pessoa !== 'juridica'"
                    >
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="infoFiscal.icms.nao_contribuinte"
                        name="checkbox-1"
                      >
                        Marque essa opção caso a configuração deste cenário seja
                        específico para Pessoa Jurídica não contribuinte do ICMS
                        ou Consumidor final.
                      </b-form-checkbox>
                    </b-form-group>

                    <b-input-group prepend="Código CFOP" class="mb-3">
                      <b-form-input
                        v-model="infoFiscal.icms.codigo_cfop"
                        text-field="text"
                        type="text"
                        maxlength="4"
                      ></b-form-input
                    ></b-input-group>

                    <b-input-group prepend="Situação tributária">
                      <b-form-select
                        v-model="infoFiscal.icms.situacao_tributaria"
                        :options="dadosImposto.icms.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="ISSQN"
              ><b-card-text
                ><b-card class="p-2">
                  <b-row>
                    <b-input-group prepend="Tipo de Tributação" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_tributacao"
                        :options="dadosImposto.icms.tipo_tributacao"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Cenário" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.cenario"
                        :options="dadosImposto.icms.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Tipo pessoa" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_pessoa"
                        :options="dadosImposto.icms.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-form-group
                      :hidden="infoFiscal.icms.tipo_pessoa !== 'juridica'"
                    >
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="infoFiscal.icms.nao_contribuinte"
                        name="checkbox-1"
                      >
                        Marque essa opção caso a configuração deste cenário seja
                        específico para Pessoa Jurídica não contribuinte do ICMS
                        ou Consumidor final.
                      </b-form-checkbox>
                    </b-form-group>

                    <b-input-group prepend="Código CFOP" class="mb-3">
                      <b-form-input
                        v-model="infoFiscal.icms.codigo_cfop"
                        text-field="text"
                        type="text"
                        maxlength="4"
                      ></b-form-input
                    ></b-input-group>

                    <b-input-group prepend="Situação tributária">
                      <b-form-select
                        v-model="infoFiscal.icms.situacao_tributaria"
                        :options="dadosImposto.icms.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="Informações"
              ><b-card-text
                ><b-card class="p-2">
                  <b-row>
                    <b-input-group prepend="Tipo de Tributação" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_tributacao"
                        :options="dadosImposto.icms.tipo_tributacao"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Cenário" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.cenario"
                        :options="dadosImposto.icms.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-input-group prepend="Tipo pessoa" class="mb-3">
                      <b-form-select
                        v-model="infoFiscal.icms.tipo_pessoa"
                        :options="dadosImposto.icms.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>

                    <b-form-group
                      :hidden="infoFiscal.icms.tipo_pessoa !== 'juridica'"
                    >
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="infoFiscal.icms.nao_contribuinte"
                        name="checkbox-1"
                      >
                        Marque essa opção caso a configuração deste cenário seja
                        específico para Pessoa Jurídica não contribuinte do ICMS
                        ou Consumidor final.
                      </b-form-checkbox>
                    </b-form-group>

                    <b-input-group prepend="Código CFOP" class="mb-3">
                      <b-form-input
                        v-model="infoFiscal.icms.codigo_cfop"
                        text-field="text"
                        type="text"
                        maxlength="4"
                      ></b-form-input
                    ></b-input-group>

                    <b-input-group prepend="Situação tributária">
                      <b-form-select
                        v-model="infoFiscal.icms.situacao_tributaria"
                        :options="dadosImposto.icms.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-input-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
          </b-tabs>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoFiscal: {
        geral: "",
        icms: {
          tipo_tributacao: "simples_nacional",
          cenario: "saida_dentro_estado",
          tipo_pessoa: "fisica",
          nao_contribuinte: false,
          codigo_cfop: "5102",
          situacao_tributaria: "102",
        },
        ipi: {
          cenario: "padrao",
          tipo_pessoa: "fisica",
          situacao_tributaria: "99",
          codigo_enquadramento: "999",
          aliquota: "0.00",
        },
      },
      dadosImposto: {
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
            { value: "estrangeira", text: "Estrangeiral" },
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
            { value: "estrangeira", text: "Estrangeiral" },
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
      },
    };
  },
  methods: {
    testeeeee() {
      console.log(this.infoFiscal);
    },
  },
};
</script>

<style scoped>
</style>