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
            @change="alterTextTypeEmiss"
          >
            <div style="width: 90px">
              {{ textTypeEmiss }}
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
        class="col-sm-7 col-md-6 col-lg-6 col-xl-3"
        size="sm"
      >
        <b-form-select
          size="sm"
          v-model="dadosNfe.idCliente"
          :options="cliente"
          value="id"
          text-field="nome"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Data Emissão"
        label-for="input-1"
        class="col-sm-5 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input
          text-field="nome"
          v-model="dadosNfe.data_emissao"
          type="date"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Data Saída"
        label-for="input-1"
        class="col-sm-5 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input
          text-field="nome"
          v-model="dadosNfe.data_entrada_saida"
          type="date"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Natureza operação"
        label-for="input-1"
        class="col-sm-7 col-md-5 col-lg-5 col-xl-3"
        size="sm"
      >
        <b-form-input disabled type="text" size="sm"></b-form-input>
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
        <b-form-input disabled type="text" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Serie"
        label-for="input-1"
        class="col-sm-3 col-md-2 col-lg-2 col-xl-1"
        size="sm"
      >
        <b-form-input disabled type="text" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Chave NFe"
        label-for="input-1"
        class="col-sm-12 col-md-6 col-lg-6 col-xl-5"
        size="sm"
      >
        <b-form-input disabled type="text" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Recibo"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input disabled type="text" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Status"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input disabled type="text" size="sm"></b-form-input>
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
                <div style="margin-left: 10px">Dados Produto</div>
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
                      v-model="produtosNotaFiscal.id"
                      :options="produtos"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Cod. Ref"
                    class="col-sm-6 col-md-5 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      size="sm"
                      v-model="dadosNfe.codRef"
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
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Unitario"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      size="sm"
                      v-mask="maskMoney"
                      placeholder="R$ 0,00"
                      @keyup="changeValueUsingKeyUpEvent"
                      @change="alterValueTotal"
                      v-model="produtosNotaFiscal.subtotal"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Total"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
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
                    label="Dados adicionais"
                    class="col-sm-12 col-md-8 col-lg-9 col-xl-5"
                  >
                    <b-form-input size="sm" />
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
                      style="background-color: #56aafe !important; color: white"
                    >
                      <tr>
                        <th>Nome Produto</th>
                        <th>Quantidade</th>
                        <th>Valor unitario</th>
                        <th>Valor Total</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>
                          <b-button
                            size="sm"
                            variant="secondary"
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
                      @change="habilitarFrete"
                      size="sm"
                      v-model="pedido.modalidade_frete"
                      :options="modalidade_frete"
                    ></b-form-select>
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
                      v-model="pedido.pagamento"
                      :options="pagamento"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Presença"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="pedido.presenca"
                      :options="presenca"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="% Desc"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input size="sm" placeholder="R$ 0,00" />
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

                      <div class="btnCadTransportadora mr-1">
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
                      v-model="dadosNfe.idShippingCompany"
                      :options="shippingCompany"
                    ></b-form-select>
                  </b-form-group>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-row class="mt-5 ml-0 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <b-form-group class="m-0">
        <b-button variant="success" size="sm">Salvar NF-e</b-button>
      </b-form-group>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";
import ServiceCustomer from "../../services/serviceCustomer";
import ServiceProducts from "../../services/serviceProducts";

export default {
  data() {
    return {
      dadosNfe: {
        id: "",
        amountProduct: 0,
        codRed: "",
        data_emissao: moment().format("YYYY-MM-DD"),
        data_entrada_saida: moment().format("YYYY-MM-DD"),
        operacao: "1",
        natureza_operacao: "Venda de produção do estabelecimento",
        modelo: "1", //2 para NFC-e
        ambiente: "1", //2 para Homologação
        nfe: "",
        serie: "",
        idCliente: "",
        finalidade: "",
        modalityFreightage: 9,
        idShippingCompany: "",
        modelNfe: "nfe",
      },
      produtosNotaFiscal: {
        id: "",
        codigo: "nome-do-produto",
        ncm: "6109.10.00",
        cest: "28.038.00",
        quantidade: 0,
        unidade: "UN",
        peso: "0.800",
        origem: 0,
        subtotal: "",
        total: 0.0,
        classe_imposto: "REF1000",
      },
      pedido: {
        pagamento: 0,
        presenca: 1,
        modalidade_frete: 9,
        frete: 0.0,
        desconto: 0.0,
        total: 0.0,
      },
      cliente: [],
      produtos: [],
      pagamento: [
        { value: 0, text: "Pagamento à vista" },
        { value: 1, text: "Pagamento à prazo" },
      ],
      presenca: [
        {
          value: 0,
          text: "Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)",
        },
        { value: 1, text: "Operação presencial" },
        { value: 2, text: "Operação não presencial, pela Internet" },
        { value: 3, text: "Operação não presencial, Teleatendimento" },
        { value: 4, text: "NFC-e em operação com entrega a domicílio" },
        { value: 5, text: "Operação presencial, fora do estabelecimento" },
        { value: 9, text: "Operação não presencial, outros" },
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
      shippingCompany: [],
      isDisabled: true,
      textTypeEmiss: "Saída",
    };
  },
  methods: {
    alterTextTypeEmiss() {
      if (this.dadosNfe.operacao === "1") {
        this.textTypeEmiss = "Saída";
      } else {
        this.textTypeEmiss = "Entrada";
      }
    },

    habilitarFrete() {
      this.pedido.modalidade_frete === 9
        ? (this.isDisabled = true)
        : (this.isDisabled = false);
    },

    alterValueTotal() {
      this.produtosNotaFiscal.total =
        this.produtosNotaFiscal.total.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        });
    },

    changeValueUsingKeyUpEvent() {
      this.produtosNotaFiscal.total =
        this.produtosNotaFiscal.quantidade *
        parseFloat(
          this.produtosNotaFiscal.subtotal.replace(".", "").replace(",", ".")
        );
    },

    sendNfeByEmail() {
      console.log("Enviado email");
    },

    async getCustomer() {
      const data = await ServiceCustomer.getCustomersForSelectBox();
      this.cliente = data.data;
    },

    async getProducts() {
      const data = await ServiceProducts.getProductsForSelectBox();
      this.produtos = data.data;
    },
  },
  computed: {
    maskMoney() {
      if (this.produtosNotaFiscal.subtotal.length === 3) {
        return "#,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 5) {
        return "##,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 6) {
        return "###,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 7) {
        return "#.###,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 9) {
        return "##.###,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 10) {
        return "###.###,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 11) {
        return "#.###.###,##";
      }
      if (this.produtosNotaFiscal.subtotal.length === 12) {
        return "##.###.###,##";
      } else {
        return "";
      }
    },
  },
  mounted() {
    this.getCustomer();
    this.getProducts();
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