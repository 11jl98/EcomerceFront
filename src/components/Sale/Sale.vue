<template>
  <div class="containerGeralPedidoVenda">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Venda/Orçamento">
            <b-row>
              <div
                class="
                  col-sm-12 col-md-12 col-lg-12 col-lg-12
                  d-flex
                  justify-content-between
                "
              >
                <div>
                  <b-form-group
                    id="input-group-1"
                    label="Data da venda"
                    label-for="input-1"
                    class="col-sm-12"
                    size="sm"
                  >
                    <b-form-input
                      value-field="id"
                      text-field="nome"
                      disabled
                      :options="dataCustomers"
                      type="date"
                      v-model="dataSale.dataVenda"
                      size="sm"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="mr-2 containerCheckBox">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox
                      :aria-describedby="ariaDescribedby"
                      name="checado"
                      value="Venda"
                      disabled
                      unchecked-value="Orçamento"
                      class="chkVendaOrçamento"
                      v-model="dataSale.status"
                      size="sm"
                      switch
                    >
                      <div style="width: 115px">
                        {{ dataSale.status.toUpperCase() }}
                      </div>
                    </b-form-checkbox>
                  </b-form-group>
                </div>
              </div>
            </b-row>
            <div class="containerAllCard">
              <b-card-text>
                <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <b-navbar toggleable class="cardDadosVendas">
                    <b-navbar-toggle
                      target="navbar-toggle-collapse"
                      id="dadosVendaStyle"
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
                            <b-icon
                              v-else
                              icon="plus-square-fill"
                              variant="info"
                            >
                            </b-icon>
                          </div>
                          <div style="margin-left: 10px">
                            Dados do Cliente / Funcionario
                          </div>
                        </div>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse" is-nav>
                      <b-navbar-nav class="ml-auto">
                        <b-card
                          class="
                            mt-2
                            col-md-12 col-sm-12 col-lg-12 col-xl-12
                            cardDadosVendasBorda
                          "
                        >
                          <div class="mt-4">
                            <b-row class="d-flex justify-content-between">
                              <b-form-input
                                hidden
                                class="col-sm-1"
                                v-model="dataSale.id"
                              ></b-form-input>
                              <b-form-group
                                id="input-group-1"
                                label="Nome Cliente"
                                label-for="input-1"
                                class="col-sm-4"
                                size="sm"
                              >
                                <b-form-select
                                  value-field="id"
                                  text-field="nome"
                                  :options="dataCustomers"
                                  v-model="dataSale.idCliente"
                                  size="sm"
                                ></b-form-select>
                              </b-form-group>

                              <b-form-group
                                id="input-group-1"
                                label="Funcionario"
                                label-for="input-1"
                                class="col-sm-4"
                                size="sm"
                              >
                                <b-form-select
                                  :options="dataEmployee"
                                  value-field="id"
                                  text-field="nomeFuncionario"
                                  v-model="dataSale.idFuncionario"
                                  size="sm"
                                  @change="readComissao(dataEmployee[0])"
                                >
                                </b-form-select>
                              </b-form-group>
                              <b-form-group
                                id="input-group-1"
                                label="Comissão ( % )"
                                label-for="input-1"
                                class="col-sm-3"
                                size="sm"
                              >
                                <b-form-input
                                  v-model="comissao"
                                  size="sm"
                                  placeholder="Comissão"
                                ></b-form-input>
                              </b-form-group>
                            </b-row>

                            <b-row class="d-flex justify-content-around">
                              <b-form-group
                                id="input-group-1"
                                label="Descrição"
                                label-for="input-1"
                                class="col-sm-12"
                              >
                                <b-form-textarea
                                  v-model="dataSale.dadosAdicionais"
                                  id="textarea"
                                  rows="5"
                                  max-rows="6"
                                  size="sm"
                                ></b-form-textarea>
                              </b-form-group>
                            </b-row>

                            <b-row class="d-flex justify-content-around">
                            </b-row>
                            <div>
                              <div class="d-flex justify-content-end">
                                <div>
                                  <b-button
                                    class="mr-4"
                                    size="sm"
                                    style="
                                      border: none !important;
                                      background-color: #56aafe !important;
                                    "
                                    @click="saveOrUpdateSale"
                                    >Salvar
                                    <b-icon-person-check
                                      class="ml-1"
                                    ></b-icon-person-check
                                  ></b-button>

                                  <b-button
                                    class="mr-4"
                                    size="sm"
                                    variant="secondary"
                                    @click="proximoCardDadosVenda"
                                  >
                                    <b-icon-caret-down-fill></b-icon-caret-down-fill
                                    >Próximo</b-button
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-card>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
                </div>
              </b-card-text>

              <b-card-text>
                <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <b-navbar toggleable class="cardDadosVendas">
                    <b-navbar-toggle
                      target="navbar-toggle-collapse2"
                      id="dadosVendaStyle"
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
                            <b-icon
                              v-else
                              icon="plus-square-fill"
                              variant="info"
                            ></b-icon>
                          </div>
                          <div style="margin-left: 10px">
                            Adicionar Produtos
                          </div>
                        </div>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse2" is-nav>
                      <b-navbar-nav class="ml-auto">
                        <b-card
                          class="
                            mt-2
                            col-md-12 col-sm-12 col-lg-12 col-xl-12
                            cardDadosVendasBorda
                          "
                        >
                          <b-card-text>
                            <div class="mt-4">
                              <b-row class="d-flex justify-content-between">
                                <b-form-input
                                  hidden
                                  v-model="productsSales.idVenda"
                                ></b-form-input>
                                <b-form-group
                                  id="input-group-1"
                                  label="Nome Produto"
                                  label-for="input-1"
                                  class="col-sm-4"
                                >
                                  <b-form-select
                                    v-model="productsSelected"
                                    size="sm"
                                    @change="readProducts"
                                  >
                                    <b-form-select-option
                                      v-for="produtos in products"
                                      :key="produtos.id"
                                      :value="produtos"
                                      >{{ produtos.nome }}</b-form-select-option
                                    >
                                  </b-form-select>
                                </b-form-group>

                                <b-form-group
                                  id="input-group-1"
                                  label="Fornecedor"
                                  label-for="input-1"
                                  class="col-sm-4"
                                  size="sm"
                                >
                                  <b-form-select
                                    :options="providers"
                                    value-field="id"
                                    text-field="nomeFantasia"
                                    v-model="productsSales.idFornecedor"
                                    size="sm"
                                  ></b-form-select>
                                </b-form-group>

                                <b-form-group
                                  id="input-group-1"
                                  label="Quantidade"
                                  label-for="input-1"
                                  class="col-sm-2"
                                  size="sm"
                                >
                                  <b-form-input
                                    placeholder="Quantidade"
                                    v-model="productsSales.quantidade"
                                    size="sm"
                                  ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                  id="input-group-1"
                                  label="Valor"
                                  label-for="input-1"
                                  class="col-sm-2"
                                  size="sm"
                                >
                                  <b-form-input
                                    placeholder="Valor"
                                    v-model="productsSales.valorTotal"
                                    size="sm"
                                    type="number"
                                  ></b-form-input>
                                </b-form-group>
                              </b-row>

                              <b-row class="d-flex justify-content-between">
                                <b-form-group
                                  id="input-group-1"
                                  label="Dados adicionais"
                                  label-for="input-1"
                                  class="col-sm-4"
                                >
                                  <b-form-textarea
                                    id="textarea"
                                    rows="5"
                                    max-rows="6"
                                    v-model="productsSales.dadosAdicionais"
                                  ></b-form-textarea>
                                </b-form-group>

                                <div class="col-sm-8" style="margin-top: 31px">
                                  <table class="table table-sm">
                                    <thead
                                      style="
                                        background-color: #56aafe !important;
                                        color: white;
                                      "
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
                                      <tr
                                        v-for="productsSaleTable in productsTable"
                                        :key="productsSaleTable.id"
                                      >
                                        <td>{{ productsSaleTable.nome }}</td>
                                        <td>
                                          {{ productsSaleTable.quantidade }}
                                        </td>
                                        <td>
                                          {{
                                            productsSaleTable.valorTotal /
                                            productsSaleTable.quantidade
                                          }}
                                        </td>
                                        <td>
                                          {{ productsSaleTable.valorTotal }}
                                        </td>
                                        <td>
                                          <!-- <b-button
                                size="sm"
                                class="mr-2"
                                
                                v-b-popover.hover.left="{
                                  variant: 'info',
                                  content: 'Editar',
                                }"
                                @click="getProductAndEdit(productsSaleTable.id)"
                              >
                                <b-icon-check scale="2"></b-icon-check>
                              </b-button> -->
                                          <b-button
                                            size="sm"
                                            variant="secondary"
                                            v-b-popover.hover.right="{
                                              variant: 'secondary',
                                              content: 'Excluir',
                                            }"
                                            @click="
                                              deleteProductFromTableById(
                                                productsSaleTable.id
                                              )
                                            "
                                          >
                                            <b-icon-trash
                                              scale="0.7"
                                            ></b-icon-trash
                                          ></b-button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </b-row>

                              <div>
                                <div class="d-flex justify-content-end">
                                  <div>
                                    <b-button
                                      class="mr-4"
                                      size="sm"
                                      style="
                                        border: none !important;
                                        background-color: #56aafe !important;
                                      "
                                      @click="saveProductSale"
                                      >Adicionar
                                      <b-icon-cart-check
                                        class="ml-1"
                                      ></b-icon-cart-check
                                    ></b-button>
                                    <b-button
                                      class="mr-4"
                                      size="sm"
                                      variant="secondary"
                                      @click="proximoCardAdicionarProdutos"
                                    >
                                      <b-icon-caret-down-fill></b-icon-caret-down-fill
                                      >Próximo</b-button
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </b-card-text>
                        </b-card>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
                </div>
              </b-card-text>

              <b-card-text>
                <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <b-navbar toggleable class="cardDadosVendas">
                    <b-navbar-toggle
                      target="navbar-toggle-collapse3"
                      id="dadosVendaStyle"
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
                            <b-icon
                              v-else
                              icon="plus-square-fill"
                              variant="info"
                            ></b-icon>
                          </div>
                          <div style="margin-left: 10px">Financeiro</div>
                        </div>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse3" is-nav>
                      <b-navbar-nav class="ml-auto">
                        <b-card
                          class="
                            mt-2
                            col-md-12 col-sm-12 col-lg-12 col-xl-12
                            cardDadosVendasBorda
                          "
                        >
                          <b-card-text>
                            <div>
                              <div>
                                <b-row class="d-flex">
                                  <b-form-input
                                    hidden
                                    class="col-sm-1"
                                  ></b-form-input>

                                  <b-form-group
                                    id="input-group-1"
                                    label-for="input-1"
                                    class="col-sm-3"
                                    size="sm"
                                  >
                                    <div class="iconFormaPagamento">
                                      <div>
                                        <label for="input-1"
                                          >Forma de pagamento</label
                                        >
                                      </div>

                                      <div
                                        class="btnFormaPagamento mr-1"
                                        @click="openModalFormaPagamento"
                                      >
                                        <b-icon-plus-square-fill
                                          scale="1.5"
                                          size="sm"
                                          variant="info"
                                        ></b-icon-plus-square-fill>
                                      </div>
                                    </div>

                                    <b-form-select
                                      value-field="id"
                                      text-field="tipo"
                                      v-model="dataBillBySale.idFormaPagamento"
                                      :options="allPaymentsTypes"
                                      size="sm"
                                    ></b-form-select>
                                  </b-form-group>

                                  <b-form-group
                                    id="input-group-1"
                                    label="Funcionario"
                                    label-for="input-1"
                                    class="col-sm-4"
                                    size="sm"
                                  >
                                    <b-form-select
                                      :options="dataEmployee"
                                      value-field="id"
                                      text-field="nomeFuncionario"
                                      disabled
                                      v-model="dataBillBySale.idFuncionario"
                                      size="sm"
                                    ></b-form-select>
                                  </b-form-group>

                                  <b-form-group
                                    id="input-group-1"
                                    label="Intervalo vencimento"
                                    label-for="input-1"
                                    class="col-sm-3"
                                    size="sm"
                                  >
                                    <b-form-input
                                      placeholder="Ex em dias: 30"
                                      v-model="intervaloDias"
                                      size="sm"
                                      type="number"
                                    ></b-form-input>
                                  </b-form-group>

                                  <b-form-group
                                    id="input-group-1"
                                    label="Qnt. parcelas"
                                    label-for="input-1"
                                    class="col-sm-2"
                                    size="sm"
                                  >
                                    <b-form-input
                                      v-model="totalParcelas"
                                      size="sm"
                                    ></b-form-input>
                                  </b-form-group>

                                  <b-form-group
                                    id="input-group-1"
                                    label="Primeiro vencimento"
                                    label-for="input-1"
                                    class="col-sm-3"
                                    size="sm"
                                  >
                                    <b-form-input
                                      type="date"
                                      v-model="dataBillBySale.data"
                                      size="sm"
                                    ></b-form-input>
                                  </b-form-group>

                                  <div
                                    class="col-sm-9"
                                    style="margin-top: 31px"
                                  >
                                    <table class="table table-sm">
                                      <thead
                                        style="
                                          background-color: #56aafe !important;
                                          color: white;
                                        "
                                      >
                                        <tr>
                                          <th>Data vencimento</th>
                                          <th>Valor da parcela</th>
                                          <th>Ações</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="dataPayments in allPaymentsByIdSale"
                                          :key="dataPayments.id"
                                        >
                                          <td>
                                            {{ dataPayments.data | moment }}
                                          </td>
                                          <td>{{ dataPayments.valorTotal }}</td>
                                          <td>
                                            <b-button
                                              size="sm"
                                              variant="secondary"
                                              v-b-popover.hover.right="{
                                                variant: 'secondary',
                                                content: 'Excluir',
                                              }"
                                              @click="
                                                deletePaymentInstallment(
                                                  dataPayments.id
                                                )
                                              "
                                            >
                                              <b-icon-trash
                                                scale="0.7"
                                              ></b-icon-trash
                                            ></b-button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </b-row>
                              </div>
                              <b-row class="d-flex justify-content-end mt-5">
                                <div class="d-flex">
                                  <div>
                                    <b-button
                                      class="mr-4"
                                      size="sm"
                                      variant="info"
                                      @click="makingThePayment"
                                    >
                                      <b-icon-cart-check
                                        class="mr-1"
                                      ></b-icon-cart-check
                                      >Lançar Pagamento</b-button
                                    >
                                  </div>

                                  <div>
                                    <b-button
                                      class="mr-4"
                                      size="sm"
                                      variant="secondary"
                                      @click="proximoCardFinanceiro"
                                    >
                                      <b-icon-x scale="1.2" class="mr-1">
                                      </b-icon-x
                                      >Fechar</b-button
                                    >
                                  </div>
                                </div>
                              </b-row>
                            </div>
                          </b-card-text>
                        </b-card>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
                </div>
              </b-card-text>
            </div>
          </b-tab>
          <div
            class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12 acoesBtns"
          >
            <div class="btnsGeral">
              <b-button
                variant="success"
                size="sm"
                :disabled="
                  dataSale.id === '' || dataSale.status === 'Venda'
                    ? true
                    : false
                "
                @click="closeSale"
                >Fechar Venda
                <b-icon-check class="ml-1" scale="1.8"></b-icon-check
              ></b-button>

              <b-button
                variant="dark"
                size="sm"
                :disabled="
                  dataSale.id === '' || dataSale.status === 'Orçamento'
                    ? true
                    : false
                "
                @click="editSale"
                >Editar Venda
                <b-icon-pencil-square class="ml-1"></b-icon-pencil-square
              ></b-button>

              <b-dropdown
                id="dropdown-1"
                text="NF-e / NFc-e"
                class="m-md-2"
                variant="info"
                size="sm"
                style="
                  margin: 0px 0px 0px 0px !important;
                  padding: 0px 0px 0px 0px !important;
                "
              >
                <b-dropdown-item @click="getAllPaymentsByIdSale"
                  >Transformar pedido em NF-e</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Transformar pedido em NFc-e</b-dropdown-item>
              </b-dropdown>

              <b-button variant="light" size="sm" @click="clearSale"
                >Novo
                <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
              ></b-button>
            </div>
          </div>
        </b-tabs>
      </b-card>
    </div>
    <ModalPagamento />
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
import ModalPagamento from "../Sale/Modal-Forma-Pagamento.vue";
export default {
  components: {
    ModalPagamento,
  },
  data() {
    return {
      dataSale: {
        id: "",
        idCliente: "",
        idFuncionario: "",
        dataVenda: moment().format("YYYY-MM-DD"),
        dadosAdicionais: "",
        status: "Orçamento",
      },
      productsSales: {
        id: "",
        idVenda: "",
        idFornecedor: "",
        idProduto: "",
        quantidade: "",
        valorTotal: "",
        dadosAdicionais: "",
        nomeProduto: "",
      },
      productsTable: [],
      dataCustomers: [],
      dataEmployee: [],
      products: [],
      providers: [],
      productsSelected: {},
      comissao: "",
      productUnitaryValue: "",
      fields: ["Produto", "Quantidade", "Valor"],
      dataBillBySale: {
        tipo: "entrada",
        idCliente: "",
        idFuncionario: "",
        idFormaPagamento: "",
        idVenda: "",
        valorTotal: 0.0,
        valorPago: 0.0,
        valorRestante: 0.0,
        data: "",
      },
      totalParcelas: 1,
      intervaloDias: "",
      allPaymentsTypes: [],
      allPaymentsByIdSale: [],
    };
  },
  methods: {
    proximoCardDadosVenda() {
      this.$root.$emit("bv::toggle::collapse", "navbar-toggle-collapse");
      this.$root.$emit("bv::toggle::collapse", "navbar-toggle-collapse2");
    },
    proximoCardAdicionarProdutos() {
      this.$root.$emit("bv::toggle::collapse", "navbar-toggle-collapse2");
      this.$root.$emit("bv::toggle::collapse", "navbar-toggle-collapse3");
    },
    proximoCardFinanceiro() {
      this.$root.$emit("bv::toggle::collapse", "navbar-toggle-collapse3");
    },
    clearSale() {
      this.comissao = "";
      this.dataSale.id = "";
      this.dataSale.idCliente = "";
      this.dataSale.idFuncionario = "";
      this.dataSale.dadosAdicionais = "";
      this.dataSale.status = "Orçamento";
      this.productsTable = [];
      this.clearDataProductsSale();
      this.clearDataPaymentsSale();
    },
    clearDataProductsSale() {
      this.productsSelected = {};
      this.productsSales.idFornecedor = "";
      this.productsSales.quantidade = "";
      this.productsSales.valorTotal = "";
      this.productsSales.dadosAdicionais = "";
    },
    clearDataPaymentsSale() {
      this.dataBillBySale.idCliente = "";
      this.dataBillBySale.idFuncionario = "";
      this.dataBillBySale.idFormaPagamento = "";
      this.dataBillBySale.idVenda = "";
      this.dataBillBySale.valorTotal = "";
      this.dataBillBySale.valorPago = "";
      this.dataBillBySale.valorRestante = "";
      this.dataBillBySale.data = "";
      this.totalParcelas = 1;
      this.intervaloDias = 0;
      this.allPaymentsByIdSale = [];
    },

    async closeSale() {
      this.dataSale.status = "Venda";
      this.UpdateSale();
    },

    async editSale() {
      this.dataSale.status = "Orçamento";
      this.UpdateSale();
    },

    async deleteProductFromTableById(idVenda) {
      try {
        await api.delete(`/products-of-sale/${idVenda}`);
        this.getProductSale();
        return this.$toast.open({
          message: "Produto removido da venda!",
          type: "warning",
        });
      } catch (error) {
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "warning",
        });
      }
    },

    async getProductById(idProduct) {
      const { data } = await api.get(`/products/${idProduct}`);
      this.productsSelected = data;
      return data;
    },

    async saveOrUpdateSale() {
      if (this.dataSale.id !== "") return this.UpdateSale();
      this.saveSale();
    },

    async saveSale() {
      try {
        const { data } = await api.post(`/sales`, this.dataSale);
        this.dataSale.id = data.id;

        return this.$toast.open({
          message: "Venda salva com Sucesso",
          type: "success",
        });
      } catch (error) {
        if (error.response.status === 422) {
          return this.$toast.open({
            message: "Verifique se os dados do cliente foram informados",
            type: "warning",
          });
        }
      }
    },

    async saveProductSale() {
      try {
        this.productsSales.idVenda = this.dataSale.id;

        const { data } = await api.post("/products-of-sale", {
          ...this.productsSales,
          valorTotal:
            this.productsSales.quantidade * this.productsSales.valorTotal,
        });
        this.productsSales.id = data.id;
        if (this.dataSale.id !== "") {
          this.getProductSale();
          this.clearDataProductsSale();
        }
        return this.$toast.open({
          message: "Produto adicionado na venda!",
          type: "success",
        });
      } catch (error) {
        if (this.dataSale.id === "") {
          return this.$toast.open({
            message: `É necessário salvar os dados do cliente antes de processeguir`,
            type: "warning",
          });
        } else {
          return this.$toast.open({
            message: `Verifique se os dados do produto foi informado corretamente`,
            type: "warning",
          });
        }
      }
    },

    async getProductSale() {
      try {
        const { data } = await api.get(`/sales/${this.productsSales.idVenda}`);
        this.productsTable = data.products;
        return data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async getAllPaymentsByIdSale() {
      try {
        const { data } = await api.get(`/sales/${this.dataSale.id}`);
        this.allPaymentsByIdSale = data.bills;
        return data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async UpdateSale() {
      try {
        const { data } = await api.put(
          `/sales/${this.dataSale.id}`,
          this.dataSale
        );
        this.$toast.open({
          message: "Pedido atualizado com sucesso!",
          type: "info",
        });
        return data;
      } catch (error) {
        console.log(error.response.data.message);
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "warning",
        });
      }
    },
    async listCustomersSelectBox() {
      try {
        const { data } = await api.get("/customers/combobox");
        this.dataCustomers = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async listEmployeesSelectBox() {
      try {
        const { data } = await api.get("/employees/combobox/fill");
        this.dataEmployee = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    readComissao(dataEmployee) {
      this.comissao = dataEmployee.comissao;
      this.dataBillBySale.idFuncionario = this.dataSale.idFuncionario;
    },

    readProducts() {
      this.productUnitaryValue = this.productsSelected.valorVenda;
      this.productsSales.valorTotal = this.productUnitaryValue;
      this.productsSales.nomeProduto = this.productsSelected.nome;
      this.productsSales.idProduto = this.productsSelected.id;
    },

    async getProdutos() {
      const { data } = await api.get("/products");
      this.products = data.data;
    },

    async getProviders() {
      const { data } = await api.get("/providers");
      this.providers = data.data;
    },

    openModalFormaPagamento() {
      this.$bvModal.show("modalFormaPagamento");
    },

    async listPaymentesTypesSelectBox() {
      const { data } = await api.get("/payments/combobox");
      this.allPaymentsTypes = data;
    },

    async makingThePayment() {
      try {
        if (this.dataSale.id !== "") {
          const array = [];
          const valoTotalPedido = this.productsTable.reduce((total, valor) => {
            return total + parseFloat(valor.valorTotal);
          }, 0);

          const valorPorDuplicata = valoTotalPedido / this.totalParcelas;
          for (let i = 0; i < this.totalParcelas; i++) {
            const dataVencimento =
              i == 0
                ? this.dataBillBySale.data
                : moment(dataVencimento)
                    .add(this.intervaloDias, "days")
                    .format("YYYY-MM-DD");
            array.push({
              tipo: "entrada",
              idCliente: this.dataSale.idCliente,
              idFuncionario: this.dataSale.idFuncionario,
              idFormaPagamento: this.dataBillBySale.idFormaPagamento,
              idVenda: this.dataSale.id,
              valorTotal: valorPorDuplicata,
              valorPago: 0.0,
              valorRestante: 0.0,
              data: dataVencimento,
            });
            await api.post("/bills", array[i]);
          }
          this.getAllPaymentsByIdSale();
          return this.$toast.open({
            message: "Parcela adicionada na venda!",
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deletePaymentInstallment(id) {
      try {
        await api.delete(`/bills/${id}`);
        this.getAllPaymentsByIdSale();
        return this.$toast.open({
          message: "Parcela removida da venda!",
          type: "warning",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.listCustomersSelectBox();
    this.listEmployeesSelectBox();
    this.getProdutos();
    this.getProviders();
    this.listPaymentesTypesSelectBox();
  },
  filters: {
    moment(data) {
      return moment(data).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
#dadosVendaStyle {
  border: none !important;
}

.cardDadosVendas {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  background-color: rgba(255, 255, 255, 0.788) !important;
  box-shadow: inset 0 0 0.5em rgb(255, 255, 255), 0 0 0.5em rgba(5, 5, 5, 0.171);
}

.tamanhoBotaoOpenCard {
  color: black;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  /* color: white; */
}

.cardDadosVendasBorda {
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

.cardDadosVendas {
  padding: 0px 16px 0px 16px !important;
}

.acoesBtns {
  padding: 40px 0 10px 40px;
  margin: 0;
  width: 100%;
  border: none;
}

.btnsGeral {
  display: flex;
  justify-content: space-around;
}

.containerAllCard {
  margin-top: 10px;
}

.containerCheckBox {
  display: flex;
  height: 32px !important;
  margin-top: 31px;
  align-items: center !important;
  background-color: #e9ecef !important;
  border: solid 1px rgb(216, 215, 215);
  border-radius: 5px;
  padding-left: 15px !important;
}

.chkVendaOrçamento {
  margin-top: 18px;
}

.containerGeralPedidoVenda {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.iconFormaPagamento {
  display: flex;
  justify-content: space-between;
}

.btnFormaPagamento {
  cursor: pointer;
}
</style>
