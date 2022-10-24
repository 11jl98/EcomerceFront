<template>
  <div class="containerGeralNfe">
    <b-row
      class="conteudoBotaoEmail mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    >
      <b-form-group>
        <b-button variant="info" size="sm" @click="sendNfeByEmail"
          >Envio de E-mail</b-button
        >
      </b-form-group>

      <div class="containerCheckBox">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox
            :aria-describedby="ariaDescribedby"
            value="0"
            unchecked-value="1"
            class="chkSaidaEntrada"
            v-model="dadosNfe.operacao"
            size="sm"
            switch
            @change="changeEmissionTypeText"
          >
            <div style="width: 90px">
              {{ textoTipoEmissao }}
            </div>
          </b-form-checkbox>
        </b-form-group>
      </div>
    </b-row>

    <b-row
      class="
        col-sm-12 col-md-12 col-lg-12 col-xl-12
        d-flex
        mt-3
        contentDataNfeRow
      "
    >
      <b-form-group hidden>
        <b-form-input
          hidden
          type="text"
          size="sm"
          v-model="dadosNfe.id"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Cliente"
        label-for="input-1"
        class="col-sm-7 col-md-6 col-lg-6 col-xl-4"
        size="sm"
      >
        <b-form-select
          size="sm"
          v-model="dadosNfe.idCliente"
          :options="cliente"
          value-field="id"
          text-field="nome"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Data NF-e"
        label-for="input-1"
        class="col-sm-5 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input
          text-field="nome"
          v-model="dadosNfe.data_nfe"
          type="date"
          size="sm"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Natureza operação"
        label-for="input-1"
        class="col-sm-7 col-md-5 col-lg-5 col-xl-4"
        size="sm"
      >
        <b-form-input
          v-model="dadosNfe.natureza_operacao"
          disabled
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Finalidade NFe"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-select
          size="sm"
          value-field="value"
          text-field="text"
          v-model="dadosNfe.finalidade"
          :options="finalidade"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Nº NFe"
        label-for="input-1"
        class="col-sm-3 col-md-2 col-lg-2 col-xl-2"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.nfe"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Serie"
        label-for="input-1"
        class="col-sm-3 col-md-2 col-lg-2 col-xl-1"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.serie"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Chave NFe"
        label-for="input-1"
        class="col-sm-12 col-md-6 col-lg-7 col-xl-6"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.chave"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Status"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.status"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>
    </b-row>

    <b-card-text class="mt-3">
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-produtos"
            id="dadosNfeStyle"
            class="tamanhoCards"
          >
            <template #default="{ expanded }">
              <div class="tamanhoBotaoOpenCard">
                <div>
                  <b-icon
                    v-if="expanded"
                    icon="dash-square-fill"
                    variant="info"
                  ></b-icon>
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Adicionar Produto</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-produtos"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row sm="12">
                  <b-form-group
                    label="Produto"
                    class="col-sm-12 col-md-7 col-lg-8 col-xl-5"
                  >
                    <b-form-select
                      size="sm"
                      value-field="id"
                      text-field="nome"
                      v-model="produtosNotaFiscal.idProduto"
                      :options="produtos"
                      @change="assignValuesToTheSelectedProduct"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Cod. Ref"
                    class="col-sm-6 col-md-5 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.codigo"
                      disabled
                    />
                  </b-form-group>

                  <b-form-group
                    label="Quant."
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-1"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.quantidade"
                      type="number"
                      @keyup="formatTotalProductValue"
                      @change="alterTotalProductValue"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Dados Adicionais"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-4"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.informacoes_adicionais"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Unitario"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      placeholder="R$ 0,00"
                      size="sm"
                      v-mask="maskMoney(produtosNotaFiscal.subtotal)"
                      @keyup="formatTotalProductValue"
                      @change="alterTotalProductValue"
                      v-model="produtosNotaFiscal.subtotal"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Desc"
                    class="col-sm-12 col-md-3 col-lg-2 col-xl-1"
                  >
                    <b-form-input
                      maxlength="5"
                      @change="calculateDiscountProdutos"
                      v-model="produtosNotaFiscal.desconto"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Total"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      size="sm"
                      placeholder="R$ 0,00"
                      v-model="produtosNotaFiscal.total"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Origem"
                    class="col-sm-6 col-md-8 col-lg-8 col-xl-3"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="produtosNotaFiscal.origem"
                      :options="origem"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="und"
                    class="col-sm-12 col-md-3 col-lg-2 col-xl-2"
                  >
                    <b-form-input
                      v-model="produtosNotaFiscal.unidade"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Peso"
                    class="col-sm-12 col-md-3 col-lg-3 col-xl-2"
                  >
                    <b-form-input
                      placeholder="Peso (KG)"
                      v-model="produtosNotaFiscal.peso"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    class="col-sm-6 col-md-4 col-lg-3 col-xl-2"
                    label="."
                    style="color: transparent !important"
                  >
                    <b-button
                      class="mr-4"
                      size="sm"
                      style="
                        border: none !important;
                        background-color: #56aafe !important;
                      "
                      @click="saveProductInNote"
                      >Adicionar
                      <b-icon-cart-check class="ml-1"></b-icon-cart-check
                    ></b-button>
                  </b-form-group>
                </b-row>

                <b-row
                  sm="12"
                  style="margin-top: 31px"
                  class="table-responsive"
                >
                  <table class="table table-sm">
                    <thead
                      style="
                        background-color: #56aafe !important;
                        color: white;
                        text-align: center;
                      "
                    >
                      <tr>
                        <th>Nome Produto</th>
                        <th>Quantidade</th>
                        <th>Vl. unitario</th>
                        <th>Vl. total</th>
                        <th>Desconto</th>
                        <th>Vl. desc</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="notaItem in produtosForTable"
                        :key="notaItem.id"
                        style="text-align: center"
                      >
                        <td>{{ notaItem.nome }}</td>
                        <td>{{ notaItem.quantidade }}</td>
                        <td>
                          {{
                            notaItem.subtotal.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          {{
                            (notaItem.quantidade * notaItem.subtotal)
                              | formatValueMonetary
                          }}
                        </td>
                        <td>
                          {{
                            notaItem.desconto.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          {{
                            notaItem.total.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          <b-button
                            size="sm"
                            variant="secondary"
                            :disabled="
                              responseNfeWebMania.status === 'aprovado' ||
                              responseNfeWebMania.status === 'processamento'
                                ? true
                                : false
                            "
                            @click="deleteProductFromNote(notaItem.id)"
                            v-b-popover.hover.right="{
                              variant: 'secondary',
                              content: 'Excluir',
                            }"
                          >
                            <b-icon-trash scale="1.3"></b-icon-trash
                          ></b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-card-text class="mt-3">
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-pedido"
            id="dadosNfeStyle"
            class="tamanhoCards"
          >
            <template #default="{ expanded }">
              <div class="tamanhoBotaoOpenCard">
                <div>
                  <b-icon
                    v-if="expanded"
                    icon="dash-square-fill"
                    variant="info"
                  ></b-icon>
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Dados Pedido</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-pedido"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    conteudoDadosNfe
                    d-flex
                  "
                >
                  <b-form-group
                    id="input-group-1"
                    label="Modalidade Frete"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                    size="sm"
                  >
                    <b-form-select
                      value-field="value"
                      text-field="text"
                      @change="enableFreightage"
                      size="sm"
                      v-model="dadosNfe.modalidade_frete"
                      :options="modalidade_frete"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Valor frete"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      v-mask="maskMoney(dadosNfe.frete)"
                      v-model="dadosNfe.frete"
                      @change="calculateDiscountPedido"
                      size="sm"
                      placeholder="R$ 0,00"
                    />
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Pagamento"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="dadosNfe.pagamento"
                      :options="pagamento"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Presença"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-4 col-xl-4"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="dadosNfe.presenca"
                      :options="presenca"
                    ></b-form-select>
                  </b-form-group>

                  <template v-if="exibirDadosIntermediador">
                    <b-form-group
                      id="input-group-1"
                      label="Intermediador"
                      label-for="input-1"
                      class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                    >
                      <b-form-select
                        size="sm"
                        value-field="value"
                        text-field="text"
                        v-model="dadosNfe.intermediador"
                        :options="intermediador"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Nome intermed"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    >
                      <b-form-input
                        v-model="dadosNfe.id_intermediador"
                        size="sm"
                      />
                    </b-form-group>

                    <b-form-group
                      label="CNPJ intermed"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                    >
                      <b-form-input
                        v-model="dadosNfe.cnpj_intermediador"
                        size="sm"
                      />
                    </b-form-group>
                  </template>

                  <b-form-group
                    label="Desc"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      @change="calculateDiscountPedido"
                      @keypress="defineMaxLengthDiscount"
                      v-model="dadosNfe.desconto"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Total NFe"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      placeholder="R$ 0,00"
                      v-model="dadosNfe.total"
                      size="sm"
                    />
                  </b-form-group>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-card-text class="mt-3" :hidden="isDisabled">
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-transportadora"
            id="dadosNfeStyle"
            class="tamanhoCards"
          >
            <template #default="{ expanded }">
              <div class="tamanhoBotaoOpenCard">
                <div>
                  <b-icon
                    v-if="expanded"
                    icon="dash-square-fill"
                    variant="info"
                  ></b-icon>
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Dados Transportadora</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-transportadora"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    conteudoDadosNfe
                    d-flex
                  "
                >
                  <b-form-group
                    class="col-sm-4 col-md-4 col-lg-4 col-xl-4"
                    size="sm"
                  >
                    <div class="iconCadTransportadora">
                      <div>
                        <label>Transportadora</label>
                      </div>

                      <div
                        class="btnCadTransportadora mr-1"
                        @click="openModalShippingCompany"
                      >
                        <b-icon-plus-square-fill
                          scale="1.5"
                          size="sm"
                        ></b-icon-plus-square-fill>
                      </div>
                    </div>

                    <b-form-select
                      value-field="value"
                      text-field="text"
                      size="sm"
                      v-model="dadosNfe.idTransportadora"
                      :options="transportadora"
                    ></b-form-select>
                  </b-form-group>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-row
      class="mt-5 ml-0 col-sm-6 col-md-12 col-lg-12 col-xl-12"
      style="display: flex; justify-content: space-between"
    >
      <b-row style="margin-left: 0px">
        <b-form-group class="mb-0 mr-2">
          <b-button variant="info" @click="updateOrSaveNotaFiscal" size="sm"
            >Salvar NF-e</b-button
          >
        </b-form-group>

        <b-form-group class="mb-0">
          <b-button variant="info" @click="clearInputs" size="sm"
            >Novo</b-button
          >
        </b-form-group>
      </b-row>

      <b-row>
        <div v-if="spinLoading">
          <b-spinner
            style="width: 3rem; height: 3rem"
            variant="primary"
          ></b-spinner>
        </div>
      </b-row>

      <b-row style="margin-right: 0px">
        <b-form-group class="mb-0 ml-5">
          <b-button
            :disabled="handleButtonEmitirNfe"
            variant="info"
            size="sm"
            @click="sendNota"
            >Emitir NF-e
          </b-button>
        </b-form-group>

        <b-form-group
          class="mb-0 ml-2"
          v-if="
            responseNfeWebMania.status === 'aprovado' ||
            responseNfeWebMania.status === 'processamento'
          "
        >
          <b-button variant="info" size="sm" @click="visualizarNfe"
            >Visualizar NF-e</b-button
          >
        </b-form-group>

        <b-form-group class="mb-0 ml-2">
          <b-dropdown
            id="dropdown-right"
            right
            text="Ações"
            class="m-md-2"
            variant="info"
            size="sm"
            style="
              margin: 0px 0px 0px 0px !important;
              padding: 0px 0px 0px 0px !important;
            "
          >
            <b-dropdown-item
              :disabled="
                responseNfeWebMania.status === 'aprovado' ||
                responseNfeWebMania.status === 'processamento'
                  ? false
                  : true
              "
              @click="openModalCancelNota"
              >Cancelar NF-e</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              :disabled="
                responseNfeWebMania.status === 'aprovado' ||
                responseNfeWebMania.status === 'processamento'
                  ? true
                  : false
              "
              >Inutilizar NF-e</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Carta de correção</b-dropdown-item>
          </b-dropdown>
        </b-form-group>
      </b-row>
    </b-row>
    <ModalShippingCompany />
    <ModalCancelNota :idNota="{uuidNotaWebMania: responseNfeWebMania.uuid, idNota: dadosNfe.id }" />
  </div>
</template>

<script>
import moment from "moment";
import ServiceCustomer from "../../services/serviceCustomer";
import ServiceProducts from "../../services/serviceProducts";
import ModalShippingCompany from "./ModalShippingCompany.vue";
import ModalCancelNota from "./ModalCancelNota.vue";
import toastAlertErros from "../../utils/toastAlertErros";
import ServiceNotaFiscal from "../../services/serviceNotaFiscal";

export default {
  components: {
    ModalShippingCompany,
    ModalCancelNota,
  },
  props: {
    propsIdNota: {
      type: String,
    },
  },
  data() {
    return {
      dadosNfe: {
        id: "",
        ID: "", // Controle das solicitações de emissão por pedido ou ID de processamento.
        operacao: "1",
        natureza_operacao: "Venda de produção do estabelecimento",
        modelo: "1", //2 para NFC-e
        ambiente: "2", //2 para Homologação
        idCliente: "",
        finalidade: 1,
        url_notificacao: "teste",
        data_nfe: moment().format("YYYY-MM-DD"),
        id_webmania: "",
        response: "",
        pagamento: 0,
        presenca: 1,
        modalidade_frete: 9,
        frete: "",
        desconto: "",
        total: "",
        intermediador: "",
        cnpj_intermediador: "",
        id_intermediador: "",
      },
      responseNfeWebMania: {
        chave: "",
        danfe: "",
        danfe_etiqueta: "",
        danfe_simples: "",
        log: "",
        modelo: "",
        motivo: "",
        nfe: "",
        serie: "",
        status: "",
        uuid: "",
        xml: "",
      },
      idTransportadora: "",
      produtosNotaFiscal: {
        idProduto: "",
        idNota: "",
        codigo: "",
        ncm: "6109.10.00",
        cest: "28.038.00",
        quantidade: "",
        unidade: "",
        peso: "",
        origem: 0,
        desconto: "",
        subtotal: "",
        total: "",
        classe_imposto: "REF15466069", //  ref pessoa fisica REF15467394
        informacoes_adicionais: "",
      },
      cliente: [],
      produtos: [],
      produtosForTable: [],
      valorTotalProdutosComDesc: "",
      valorTotalDescontoProdutos: "",
      pagamento: [
        { value: 0, text: "Pagamento à vista" },
        { value: 1, text: "Pagamento à prazo" },
      ],
      presenca: [
        {
          value: 0,
          text: "0 - Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)",
        },
        { value: 1, text: "1 - Operação presencial" },
        { value: 2, text: "2 - Operação não presencial, pela Internet" },
        { value: 3, text: "3 - Operação não presencial, Teleatendimento" },
        { value: 4, text: "4 - NFC-e em operação com entrega a domicílio" },
        { value: 5, text: "5 - Operação presencial, fora do estabelecimento" },
        { value: 9, text: "9 - Operação não presencial, outros" },
      ],
      finalidade: [
        { value: 1, text: "Normal" },
        { value: 2, text: "Complementar" },
        { value: 3, text: "Ajuste" },
        { value: 4, text: "Devolução" },
      ],
      origem: [
        {
          value: 0,
          text: "0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8",
        },
        {
          value: 1,
          text: "1 - Estrangeira - Importação direta, exceto a indicada no código 6",
        },
        {
          value: 2,
          text: "2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7",
        },
        {
          value: 3,
          text: "3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%",
        },
        {
          value: 4,
          text: "4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes",
        },
        {
          value: 5,
          text: "5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%",
        },
        {
          value: 6,
          text: "6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural",
        },
        {
          value: 7,
          text: "7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural",
        },
        {
          value: 8,
          text: "8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%",
        },
      ],
      modalidade_frete: [
        { value: 0, text: "Por conta do Remetente" },
        { value: 1, text: "Por conta do Destinatário" },
        { value: 2, text: "Por conta de Terceiros" },
        { value: 3, text: "Transporte Próprio do Remetente" },
        { value: 4, text: "Transporte Próprio do Destinatário" },
        { value: 9, text: "Sem Frete" },
      ],
      transportadora: [],
      isDisabled: true,
      textoTipoEmissao: "Saída",
      intermediador: [
        {
          value: 0,
          text: "0 - Operação sem intermediador (em site ou plataforma própria)",
        },
        {
          value: 1,
          text: "1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)",
        },
      ],
      spinLoading: false,
    };
  },
  methods: {
    clearInputs() {
      this.dadosNfe.id = "";
      this.dadosNfe.ID = "";
      this.dadosNfe.natureza_operacao = "Venda de produção do estabelecimento";
      this.dadosNfe.modelo = "1";
      this.dadosNfe.ambiente = "2";
      this.dadosNfe.idCliente = "";
      this.dadosNfe.url_notificacao = "teste";
      this.dadosNfe.data_nfe = moment().format("YYYY-MM-DD");

      this.produtosNotaFiscal.idProduto = "";
      this.produtosNotaFiscal.codigo = "";
      this.produtosNotaFiscal.quantidade = "";
      this.produtosNotaFiscal.informacoes_adicionais = "";
      this.produtosNotaFiscal.subtotal = "";
      this.produtosNotaFiscal.total = "";
      this.produtosNotaFiscal.unidade = "";
      this.produtosNotaFiscal.peso = "";
      this.produtosNotaFiscal.origem = 0;
      this.produtosNotaFiscal.desconto = "";

      this.dadosNfe.modalidade_frete = 9;
      this.dadosNfe.frete = "";
      this.dadosNfe.pagamento = 0;
      this.dadosNfe.presenca = 1;
      this.dadosNfe.desconto = 0.0;
      this.dadosNfe.total = "";
      this.dadosNfe.intermediador = "";
      this.dadosNfe.id_intermediador = "";
      this.dadosNfe.cnpj_intermediador = "";

      this.produtosForTable = [];

      this.responseNfeWebMania.chave = "";
      this.responseNfeWebMania.danfe = "";
      this.responseNfeWebMania.danfe_etiqueta = "";
      this.responseNfeWebMania.danfe_simples = "";
      this.responseNfeWebMania.log = "";
      this.responseNfeWebMania.modelo = "";
      this.responseNfeWebMania.motivo = "";
      this.responseNfeWebMania.nfe = "";
      this.responseNfeWebMania.serie = "";
      this.responseNfeWebMania.status = "";
      this.responseNfeWebMania.uuid = "";
      this.responseNfeWebMania.xml = "";
    },

    changeEmissionTypeText() {
      if (this.dadosNfe.operacao == 1) {
        this.textoTipoEmissao = "Saída";
      } else {
        this.textoTipoEmissao = "Entrada";
      }
    },

    enableFreightage() {
      this.dadosNfe.modalidade_frete === 9
        ? (this.isDisabled = true)
        : (this.isDisabled = false);
    },

    alterTotalProductValue() {
      this.produtosNotaFiscal.total =
        this.produtosNotaFiscal.total.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        });

      this.calculateDiscountProdutos();
    },

    alterTotalNotaValue() {
      this.dadosNfe.total = this.dadosNfe.total.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
    },

    formatTotalProductValue() {
      if (this.produtosNotaFiscal.subtotal !== "") {
        this.produtosNotaFiscal.total =
          this.produtosNotaFiscal.quantidade *
          parseFloat(
            this.produtosNotaFiscal.subtotal.replace(".", "").replace(",", ".")
          );
      }
    },

    calculateDiscountPedido() {
      const valorTotalNota =
        this.valorTotalProdutosComDesc +
        Number(this.dadosNfe?.frete?.replace(".", "").replace(",", "."));

      this.dadosNfe.total = valorTotalNota;

      this.alterTotalNotaValue();
    },

    async handleDiscountAndFindNoteAndItems() {
      await this.findNotaById();
      await this.findProductsByIdNota();
    },

    defineMaxLengthDiscount() {
      if (this.dadosNfe.desconto?.length > 4) {
        this.dadosNfe.desconto = this.dadosNfe.desconto.slice(0, 4);
      }
    },

    calculateDiscountProdutos() {
      const valorTotalProdutos =
        this.produtosNotaFiscal.quantidade *
        this.produtosNotaFiscal.subtotal.replace(".", "").replace(",", ".");

      const desconto = this.produtosNotaFiscal.desconto.replace(",", ".");

      const valorDesconto = valorTotalProdutos - desconto;

      this.produtosNotaFiscal.total = valorDesconto.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
    },

    maskMoney(value) {
      if (value?.length === 3) {
        return "#,##";
      }
      if (value?.length === 5) {
        return "##,##";
      }
      if (value?.length === 6) {
        return "###,##";
      }
      if (value?.length === 7) {
        return "#.###,##";
      }
      if (value?.length === 9) {
        return "##.###,##";
      }
      if (value?.length === 10) {
        return "###.###,##";
      }
      if (value?.length === 11) {
        return "#.###.###,##";
      }
      if (value?.length === 12) {
        return "##.###.###,##";
      } else {
        return "";
      }
    },
    maskDiscount(value) {
      if (value?.length === 2) {
        return "#.#";
      } else if (value?.length === 4) {
        return "##.#";
      } else if (value?.length === 5) {
        return "##.##";
      } else if (value?.length === 6) {
        return "###.##";
      } else {
        return "";
      }
    },

    openModalShippingCompany() {
      this.$bvModal.show("modalShippingCompany");
    },

    openModalCancelNota() {
      this.$bvModal.show("modalCancelNota");
    },

    sendNfeByEmail() {
      console.log("Enviado email");
    },

    visualizarNfe() {
      window.open(
        this.responseNfeWebMania.danfe,
        "_blank",
        "width=700, height=800, top=500, left=500"
      );
    },

    async sendNota() {
      try {
        await ServiceNotaFiscal.updateNota({
          ...this.dadosNfe,
          frete:
            this.dadosNfe.frete === ""
              ? 0
              : this.dadosNfe.frete.replace(".", "").replace(",", "."),
          total: this.dadosNfe.total.replace(".", "").replace(",", "."),
          desconto: this.dadosNfe.desconto.replace(".", "").replace(",", "."),
        });

        this.spinLoading = true;
        await ServiceNotaFiscal.sendNota(this.dadosNfe.id);
        this.spinLoading = false;

        await this.findNotaById();

        return this.$toast.open({
          message: "Nota emitida com sucesso!",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return this.$toast.open({
          message: error.response.data.message,
          type: "error",
        });
      }
    },

    async saveProductInNote() {
      try {
        if (this.dadosNfe.id === "") {
          return this.$toast.open({
            message: "É necessário salvar a nota para adicionar o produto!",
            type: "warning",
          });
        } else {
          const formatedSubTotal = this.produtosNotaFiscal.subtotal
            .replace(".", "")
            .replace(",", ".");
          const formatedTotal = this.produtosNotaFiscal.total
            .replace(".", "")
            .replace(",", ".");
          const formatedDesconto =
            this.produtosNotaFiscal.desconto === ""
              ? 0
              : this.produtosNotaFiscal.desconto.replace(",", ".");

          await ServiceNotaFiscal.saveNotaItem({
            ...this.produtosNotaFiscal,
            idNota: this.dadosNfe.id,
            subtotal: formatedSubTotal,
            total: formatedTotal,
            desconto: formatedDesconto,
          });

          await this.findProductsByIdNota();
          await this.updateNotaFiscal();
        }
      } catch (error) {
        console.log(error);
        return toastAlertErros.validateErrorRemoveUnwantedCharacters(
          error,
          this.$toast
        );
      }
    },

    async deleteProductFromNote(id) {
      try {
        await ServiceNotaFiscal.deleteItemFromNote(id);
        await this.findProductsByIdNota();
      } catch (error) {
        console.log(error);
      }
    },

    async findProductsByIdNota() {
      const result = await ServiceNotaFiscal.findProductsByIdNota(
        this.dadosNfe.id
      );

      this.produtosForTable = result.noteItem;

      if (result?.noteItem.length > 0) {
        this.valorTotalProdutosComDesc = result?.noteItem
          .map((produto) => produto.total)
          .reduce((total, preco) => total + preco);

        this.valorTotalDescontoProdutos = result?.noteItem
          .map((produto) => produto.desconto)
          .reduce((total, desconto) => total + desconto);
      } else {
        this.valorTotalProdutosComDesc = 0;
        this.valorTotalDescontoProdutos = 0;
      }

      this.dadosNfe.desconto = this.valorTotalDescontoProdutos.toLocaleString(
        "pt-br",
        {
          minimumFractionDigits: 2,
        }
      );

      this.dadosNfe.total = this.valorTotalProdutosComDesc.toLocaleString(
        "pt-br",
        {
          minimumFractionDigits: 2,
        }
      );

      this.calculateDiscountPedido();
    },

    async assignValuesToTheSelectedProduct() {
      const result = this.produtos.filter(
        (idProduto) => idProduto.id == this.produtosNotaFiscal.idProduto
      );

      this.produtosNotaFiscal.unidade = result[0].unidade;
      this.produtosNotaFiscal.codigo = result[0].codReferencia;
    },

    async getCliente() {
      try {
        const data = await ServiceCustomer.getCustomersForSelectBox();
        this.cliente = data.data;
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os clientes",
          type: "warning",
        });
      }
    },

    async getProductsForSelectBox() {
      try {
        const data = await ServiceProducts.getProductsForSelectBox();
        this.produtos = data.data;
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os produtos",
          type: "warning",
        });
      }
    },

    async getProductsById() {
      try {
        const data = await ServiceProducts.getProductById(
          this.produtosNotaFiscal.idProduto
        );
        return data;
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível buscar o produto",
          type: "warning",
        });
      }
    },

    async saveNotaFiscal() {
      try {
        const result = await ServiceNotaFiscal.saveNota({
          ...this.dadosNfe,
          frete:
            this.dadosNfe.frete === ""
              ? 0
              : this.dadosNfe.frete.replace(".", "").replace(",", "."),

          total:
            this.dadosNfe.total === ""
              ? 0
              : this.dadosNfe.total.replace(".", "").replace(",", "."),
        });
        this.dadosNfe.id = result.id;

        return this.$toast.open({
          message: "Nota Fiscal salva!",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErrorRemoveUnwantedCharacters(
          error,
          this.$toast
        );
      }
    },

    async updateNotaFiscal() {
      try {
        await ServiceNotaFiscal.updateNota({
          ...this.dadosNfe,
          frete:
            this.dadosNfe.frete === ""
              ? 0
              : this.dadosNfe.frete.replace(".", "").replace(",", "."),
          total: this.dadosNfe.total.replace(".", "").replace(",", "."),
          desconto:
            this.dadosNfe.desconto === ""
              ? 0
              : this.dadosNfe.desconto.replace(".", "").replace(",", "."),
        });

        return this.$toast.open({
          message: "Nota Fiscal atualizada!",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return this.$toast.open({
          message: "Erro ao atualizar a nota",
          type: "error",
        });
      }
    },

    async updateOrSaveNotaFiscal() {
      this.dadosNfe.id !== "" ? this.updateNotaFiscal() : this.saveNotaFiscal();
    },

    async findNotaById() {
      const result = await ServiceNotaFiscal.findNotaById(this.dadosNfe.id);
      delete result["idEmpresa"];

      Object.assign(this.dadosNfe, result, {
        frete: result?.frete?.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        }),
        total: result?.total?.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        }),
      });

      Object.assign(this.responseNfeWebMania, result.response);
    },
  },
  computed: {
    exibirDadosIntermediador() {
      return (
        this.retornaTipoOperacao &&
        this.retornaTipoFinalizade &&
        this.retorntaTipoPresenca
      );
    },
    retornaTipoOperacao() {
      return this.dadosNfe.operacao == 1;
    },
    retornaTipoFinalizade() {
      return this.dadosNfe.finalidade == 1;
    },
    retorntaTipoPresenca() {
      return (
        this.dadosNfe.presenca == 2 ||
        this.dadosNfe.presenca == 3 ||
        this.dadosNfe.presenca == 4 ||
        this.dadosNfe.presenca == 9
      );
    },
    handleButtonEmitirNfe() {
      if (
        this.produtosForTable.length < 1 ||
        this.responseNfeWebMania.chave !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  filters: {
    formatValueMonetary: function (value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  mounted() {
    this.getCliente();
    this.getProductsForSelectBox();
  },
  watch: {
    propsIdNota() {
      this.dadosNfe.id = this.propsIdNota;
      this.handleDiscountAndFindNoteAndItems();
    },
  },
};
</script>

<style scoped>
.containerGeralNfe {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.conteudoBotaoEmail {
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.conteudoBotaoEmail button:hover {
  background-color: #025f6b !important;
  transition: all 0.3s linear;
}

.conteudoBotaoEmail button {
  margin-left: 16px;
}

.conteudoDadosNfe {
  border-radius: 5px;
  padding: 0 !important;
  margin-top: 10px;
}

.cardDadosNfe {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  background-color: rgba(255, 255, 255, 0.788) !important;
  box-shadow: inset 0 0 0.5em rgb(255, 255, 255), 0 0 0.5em rgba(5, 5, 5, 0.171);
  padding: 0px 16px 0px 16px !important;
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
}

.cardDadosNfeBorda {
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
  /* background-color: #6a88bd !important; */
  /* color: white; */
}

.tamanhoCards {
  width: 100%;
  display: flex;
  /* background-color: #6a88bd !important; */
  /* box-shadow: 2px 2px 4px 0px black !important ; */
}

.tamanhoBotaoOpenCard {
  color: black;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  /* color: white; */
}

.chkSaidaEntrada {
  margin-top: 18px;
}

.containerCheckBox {
  display: flex;
  height: 32px !important;
  align-items: center !important;
  background-color: #e9ecef !important;
  border: solid 1px rgb(216, 215, 215);
  border-radius: 5px;
  padding-left: 15px !important;
  margin-right: 16px;
}

.iconCadTransportadora {
  display: flex;
  justify-content: space-between;
}

.btnCadTransportadora {
  cursor: pointer;
}

#dadosNfeStyle {
  border: none !important;
}

@media screen and (max-width: 438px) {
  .contentDataNfeRow {
    display: flex;
    flex-direction: column;
  }
}
</style>