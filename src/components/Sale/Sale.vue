<template>
  <b-collapse
    visible
    id="accordion-dadosCadastrais"
    accordion="my-accordion"
    role="tabpanel"
    class="mt-2"
  >
    <div>
      <div>
        <b-card no-body>
          <h2>Pedido de venda</h2>
          <hr />
          <b-row class="d-flex justify-content-between">
            <div class="col-sm-6">
              <b-form-group
                id="input-group-1"
                label="Data da venda"
                label-for="input-1"
                class="col-sm-5"
                size="sm"
              >
                <b-form-input
                  value-field="id"
                  text-field="nome"
                  disabled
                  :options="dataCustomers"
                  type="date"
                  v-model="dataSale.dataVenda"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-sm-3 d-flex">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  :aria-describedby="ariaDescribedby"
                  value="Venda"
                  name="checado"
                  v-model="dataSale.status"
                  class="mr-5 mt-3"
                  >Vendas</b-form-radio
                >
              </b-form-group>

              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  :aria-describedby="ariaDescribedby"
                  name="checado"
                  value="Orçamento"
                  class="mt-3 testeDois"
                  v-model="dataSale.status"
                  >Orçamento</b-form-radio
                >
              </b-form-group>
            </div>
          </b-row>
          <b-tabs card>
            <b-tab title="Clientes">
              <b-card-text
                ><div class="mt-4">
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
                        v-model="dataSale.descricao"
                        id="textarea"
                        rows="5"
                        max-rows="6"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-row>

                  <b-row class="d-flex justify-content-around"> </b-row>
                  <div>
                    <div class="d-flex justify-content-end">
                      <div>
                        <b-button
                          class="mr-4"
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
                          variant="light"
                          @click="clearinfoClientPedVenda"
                          >Limpar
                          <b-icon-arrow-clockwise
                            class="ml-1"
                          ></b-icon-arrow-clockwise
                        ></b-button>
                      </div>
                    </div>
                  </div></div
              ></b-card-text>
            </b-tab>

            <b-tab title="Produtos">
              <b-card-text>
                <div class="mt-4">
                  <b-row class="d-flex justify-content-between">
                    <b-form-input hidden class="col-sm-1"></b-form-input>
                    <b-form-group
                      id="input-group-1"
                      label="Nome Produto"
                      label-for="input-1"
                      class="col-sm-4"
                      size="sm"
                    >
                      <b-form-select
                        v-model="productsSelected"
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
                            <th>Valor Unitario</th>
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
                            <td>{{ productsSaleTable.quantidade }}</td>
                            <td>{{ productsSaleTable.valorTotal }}</td>
                            <td>
                              {{
                                productsSaleTable.quantidade *
                                productsSaleTable.valorTotal
                              }}
                            </td>
                            <td>
                              <b-button
                                size="sm"
                                class="mr-2"
                                variant="info"
                                v-b-popover.hover.left="{
                                  variant: 'info',
                                  content: 'Editar',
                                }"
                              >
                                <b-icon-check scale="2"></b-icon-check>
                              </b-button>
                              <b-button
                                size="sm"
                                variant="secondary"
                                v-b-popover.hover.right="{
                                  variant: 'secondary',
                                  content: 'Excluir',
                                }"
                              >
                                <b-icon-trash scale="0.7"></b-icon-trash
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
                          style="
                            border: none !important;
                            background-color: #56aafe !important;
                          "
                          @click="saveProductSale"
                          >Adicionar
                          <b-icon-cart-check class="ml-1"></b-icon-cart-check
                        ></b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Financeiro">
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </b-collapse>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
export default {
  data() {
    return {
      dataSale: {
        id: "",
        idCliente: "",
        idFuncionario: "",
        dataVenda: moment().format("YYYY-MM-DD"),
        descricao: "",
        status: "Orçamento",
      },
      productsSales: {
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
    };
  },
  methods: {
    clearinfoClientPedVenda() {
      (this.comissao = ""),
        (this.dataSale.id = ""),
        (this.dataSale.idCliente = ""),
        (this.dataSale.idFuncionario = ""),
        (this.dataSale.descricao = "");
    },
    clearDataProductsSale() {
      this.productsSelected = {};
      this.productsSales.idFornecedor = {};
      this.productsSales.quantidade = "";
      this.productsSales.valorTotal = "";
    },

    async saveOrUpdateSale() {
      if (this.dataSale.id !== "") return this.UpdateSale();
      this.saveSale();
    },

    async saveSale() {
      try {
        const { data } = await api.post(`/sales`, this.dataSale);
        this.dataSale.id = data.id;
        this.productsSales.idVenda = data.id;
        return this.$toast.open({
          message: "Venda salva com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error.response);
      }
    },

    async saveProductSale() {
      try {
        const { data } = await api.post(
          "/products-of-sale",
          this.productsSales
        );
        if (this.dataSale.id !== "") {
          this.getProductSale();
          this.clearDataProductsSale();
        }
        return data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async getProductSale() {
      try {
        const { data } = await api.get(`/sales/${this.productsSales.idVenda}`);
        this.productsTable = data.products;
        console.log(data);
        return data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async UpdateSale() {
      try {
        const { data } = await api.put(`/sales/${this.dataSale.id}`);
        this.data.id = data.id;
      } catch (error) {
        console.log(error.response);
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
  },
  mounted() {
    this.listCustomersSelectBox();
    this.listEmployeesSelectBox();
    this.getProdutos();
    this.getProviders();
  },
};
</script>

<style scoped>
</style>
