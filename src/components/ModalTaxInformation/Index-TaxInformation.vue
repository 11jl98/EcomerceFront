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
            <b-button variant="info" size="sm" @click="save">Salvar</b-button>
          </div>
        </div>
      </template>
      <div class="heigthModal">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Geral" active
              ><b-card-text>
                <b-form-group
                  id="input-group-1"
                  label="Descrição"
                  label-for="textarea"
                  size="sm"
                  class="styleLabel"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Descreva a classificação desse imposto para melhor gerenciamento. Ex: Classe de impostos para Saída de produtos de fabricação própria."
                    rows="6"
                    no-resize
                    v-model="infoFiscal.descricao"
                  ></b-form-textarea>
                </b-form-group> </b-card-text
            ></b-tab>
            <b-tab title="ICMS"
              ><b-card class="scrollIssqn">
                <b-row class="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
                  <b-form-input
                    v-model="infoFiscal.id"
                    text-field="text"
                    type="text"
                    hidden
                  ></b-form-input>

                  <b-form-group
                    label="Tipo de Tributação"
                    class="styleLabel col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].tipo_tributacao"
                      :options="taxForSelectBoxes.icms.tipo_tributacao"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-form-group>

                  <b-form-group
                    label="Cenário"
                    class="styleLabel col-sm-12 col-md-7 col-lg-6 col-xl-6"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].cenario"
                      :options="taxForSelectBoxes.icms.cenario"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-form-group>

                  <b-form-group
                    label="Tipo pessoa"
                    class="styleLabel col-sm-12 col-md-5 col-lg-3 col-xl-3"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].tipo_pessoa"
                      :options="taxForSelectBoxes.icms.tipo_pessoa"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-form-group>

                  <b-form-group
                    class="col-sm-12 col-md-12 col-lg-9 col-xl-9 mt-4"
                    :hidden="infoFiscal.icms[0].tipo_pessoa !== 'juridica'"
                  >
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="infoFiscal.icms[0].nao_contribuinte"
                      name="checkbox-1"
                    >
                      Marque essa opção caso a configuração deste cenário seja
                      específico para Pessoa Jurídica não contribuinte do ICMS
                      ou Consumidor final.
                    </b-form-checkbox>
                  </b-form-group>

                  <b-form-group
                    label="Código CFOP"
                    class="styleLabel col-sm-12 col-md-5 col-lg-3 col-xl-3"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].codigo_cfop"
                      text-field="text"
                      type="text"
                      maxlength="4"
                    ></b-form-input
                  ></b-form-group>

                  <b-form-group
                    label="Situação tributária"
                    class="styleLabel col-sm-12 col-md-7 col-lg-6 col-xl-6"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].situacao_tributaria"
                      :options="taxForSelectBoxes.icms.situacao_tributaria"
                      value-field="value"
                      text-field="text"
                    ></b-form-select
                  ></b-form-group>

                  <b-form-group
                    label="Alíquota aplicável de cálculo de crédito %"
                    class="styleLabel col-sm-12 col-md-7 col-lg-6 col-xl-6"
                    :hidden="
                      infoFiscal.icms[0].situacao_tributaria !== '101' &&
                      infoFiscal.icms[0].situacao_tributaria !== '201'
                    "
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].aliquota_credito"
                      value-field="value"
                      text-field="text"
                    ></b-form-input
                  ></b-form-group>

                  <b-form-group
                    label="Alíquota MVA: Estado"
                    class="styleLabel col-sm-6 col-md-6 col-lg-4 col-xl-6"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].aliquota_mva[0].estado"
                      :options="taxForSelectBoxes.icms.estados"
                      value-field="value"
                      text-field="text"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Alíquota MVA: %"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].aliquota_mva[0].aliquota"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Alíquota da redução da base de cálculo ICMS %"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].aliquota_reducao"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Alíquota da redução da base de cálculo ICMS-ST %"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].aliquota_reducao_st"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Motivo da Desoneração do ICMS"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].motivo_desoneracao"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Motivo da Desoneração do ICMS-ST"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].motivo_desoneracao_st"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="col-sm-12 col-md-12 col-lg-9 col-xl-9 mt-4"
                  >
                    <b-form-checkbox
                      id="checkbox-2"
                      v-model="enableBeneficioFiscal"
                      name="checkbox-1"
                    >
                      Habilitar Benefício fiscal
                    </b-form-checkbox>
                  </b-form-group>

                  <b-form-group
                    label="Benefício fiscal: Estado"
                    class="styleLabel col-sm-6 col-md-6 col-lg-4 col-xl-6"
                    :hidden="!enableBeneficioFiscal"
                  >
                    <b-form-select
                      v-model="infoFiscal.icms[0].beneficio_fiscal[0].estado"
                      :options="taxForSelectBoxes.icms.beneficioFiscalEstados"
                      value-field="value"
                      text-field="text"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Código do Benefício Fiscal"
                    class="styleLabel col-sm-6 col-md-6 col-lg-8 col-xl-6"
                    :hidden="!enableBeneficioFiscal"
                  >
                    <b-form-input
                      v-model="infoFiscal.icms[0].beneficio_fiscal[0].codigo"
                      text-field="text"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-row> </b-card
            ></b-tab>
            <b-tab title="IPI"
              ><b-card-text
                ><b-card class="scrollIssqn">
                  <b-row class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <b-form-group
                      label="Tipo pessoa"
                      class="styleLabel col-sm-12 col-md-12 col-lg-4 col-xl-3"
                    >
                      <b-form-select
                        v-model="infoFiscal.ipi[0].tipo_pessoa"
                        :options="taxForSelectBoxes.ipi.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Cenário"
                      class="styleLabel col-sm-12 col-md-12 col-lg-8 col-xl-5"
                    >
                      <b-form-select
                        v-model="infoFiscal.ipi[0].cenario"
                        :options="taxForSelectBoxes.ipi.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Situação tributária"
                      class="styleLabel col-sm-12 col-md-12 col-lg-12 col-xl-4"
                    >
                      <b-form-select
                        v-model="infoFiscal.ipi[0].situacao_tributaria"
                        :options="taxForSelectBoxes.ipi.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Código de enquadramento"
                      class="styleLabel col-sm-12 col-md-12 col-lg-12 col-xl-8"
                    >
                      <b-form-input
                        v-model="infoFiscal.ipi[0].codigo_enquadramento"
                        text-field="text"
                        type="text"
                      ></b-form-input>
                      <p style="color: red; margin-bottom: 0 !important">
                        Caso não possua um código de enquadramento, mantenha o
                        valor padrão 999.
                      </p></b-form-group
                    >

                    <b-form-group
                      label="Alíquota %"
                      class="styleLabel col-sm-12 col-md-12 col-lg-12 col-xl-4"
                    >
                      <b-form-input
                        v-model="infoFiscal.ipi[0].aliquota"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-form-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="PIS"
              ><b-card-text
                ><b-card class="scrollIssqn">
                  <b-row>
                    <b-form-group
                      label="Tipo pessoa"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.pis[0].tipo_pessoa"
                        :options="taxForSelectBoxes.pis.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Cenário"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.pis[0].cenario"
                        :options="taxForSelectBoxes.pis.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Situação tributária"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.pis[0].situacao_tributaria"
                        :options="taxForSelectBoxes.pis.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Alíquota %"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-input
                        v-model="infoFiscal.pis[0].aliquota"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-form-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="COFINS"
              ><b-card-text
                ><b-card class="scrollIssqn">
                  <b-row>
                    <b-form-group
                      label="Tipo pessoa"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.cofins[0].tipo_pessoa"
                        :options="taxForSelectBoxes.cofins.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Cenário"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.cofins[0].cenario"
                        :options="taxForSelectBoxes.cofins.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Situação tributária"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.cofins[0].situacao_tributaria"
                        :options="taxForSelectBoxes.cofins.situacao_tributaria"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Alíquota %"
                      class="styleLabel col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-input
                        v-model="infoFiscal.cofins[0].aliquota"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-form-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="ISSQN" :hidden="enableISSQN">
              <template #title>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 90px;
                  "
                >
                  <div>ISSQN</div>

                  <div class="chkIssqn" @click="handleChangeIssqn">
                    <b-icon-check
                      scale="2"
                      :hidden="enableISSQN"
                    ></b-icon-check>
                  </div>
                </div>
              </template>
              <b-card-text
                ><b-card class="scrollIssqn">
                  <b-row>
                    <b-form-group
                      label="Tipo pessoa"
                      class="styleLabel col-sm-12 col-md-6 col-lg-3 col-xl-3"
                    >
                      <b-form-select
                        v-model="infoFiscal.issqn[0].tipo_pessoa"
                        :options="taxForSelectBoxes.issqn.tipo_pessoa"
                        value-field="value"
                        text-field="text"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Cenário"
                      class="styleLabel col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.issqn[0].cenario"
                        :options="taxForSelectBoxes.issqn.cenario"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Código CFOP"
                      class="styleLabel col-sm-12 col-md-12 col-lg-3 col-xl-3"
                    >
                      <b-form-input
                        v-model="infoFiscal.issqn[0].codigo_cfop"
                        text-field="text"
                        type="text"
                        maxlength="4"
                      ></b-form-input
                    ></b-form-group>

                    <b-form-group
                      label="Indicador da exigibilidade do ISS"
                      class="styleLabel col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <b-form-select
                        v-model="infoFiscal.issqn[0].exigibilidade"
                        :options="taxForSelectBoxes.issqn.exigibilidade"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Item da lista de serviços"
                      class="styleLabel col-sm-12 col-md-12 col-lg-6 col-xl-3"
                    >
                      <b-form-input
                        v-model="infoFiscal.issqn[0].item_servico"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-form-group>

                    <b-form-group
                      label="Indicador de incentivo Fiscal"
                      class="styleLabel col-sm-12 col-md-12 col-lg-6 col-xl-3"
                    >
                      <b-form-select
                        v-model="infoFiscal.issqn[0].incentivo_fiscal"
                        :options="taxForSelectBoxes.issqn.incentivo_fiscal"
                        value-field="value"
                        text-field="text"
                      ></b-form-select
                    ></b-form-group>

                    <b-form-group
                      label="Alíquota do ISSQN %"
                      class="styleLabel col-sm-12 col-md-12 col-lg-6 col-xl-3"
                    >
                      <b-form-input
                        v-model="infoFiscal.issqn[0].aliquota"
                        text-field="text"
                        type="text"
                      ></b-form-input
                    ></b-form-group>
                  </b-row> </b-card></b-card-text
            ></b-tab>
            <b-tab title="Informações"
              ><b-card-text>
                <b-card class="scrollIssqn">
                  <b-form-group
                    id="input-group-1"
                    label="Informações ao Fisco"
                    label-for="textarea"
                    size="sm"
                    class="styleLabel"
                  >
                    <b-form-textarea
                      id="textarea"
                      rows="6"
                      no-resize
                      v-model="infoFiscal.informacoes_fisco"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Informações Complementares ao Consumidor"
                    label-for="textarea"
                    size="sm"
                    class="styleLabel"
                  >
                    <b-form-textarea
                      id="textarea"
                      rows="6"
                      no-resize
                      v-model="infoFiscal.informacoes_complementares"
                    ></b-form-textarea>
                  </b-form-group> </b-card></b-card-text
            ></b-tab>
          </b-tabs>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
import modalTaxInformation from "../../mexins/ModalTaxInformation";

export default {
  mixins: [modalTaxInformation],
};
</script>

<style scoped>
.chkIssqn {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  border: solid 2px #f7f7f7;
  border-radius: 5px;
}

.scrollIssqn {
  max-height: 300px;
  overflow-x: scroll;
}

.styleLabel {
  color: #00afff;
  font-size: 13px;
}

.heigthModal {
  height: 400px !important;
}

@media screen and (max-width: 422px) {
  .heigthModal {
    height: auto !important;
  }
}
</style>