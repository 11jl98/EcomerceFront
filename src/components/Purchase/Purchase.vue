<template>
  <b-card class="shadow">
    <h3>Dados Cadastrais</h3>
    <hr />
    <div class="mt-4">
      <b-row class="col-sm-12 d-flex">
        <b-form-input hidden class="col-sm-1"></b-form-input>
        <b-form-group
          id="input-group-1"
          label="Data Movimentação"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            required
            size="sm"
            type="date"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Nº NF-e"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Nº NF-e"
            required
            size="sm"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Modelo"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Ex: 55 NFe, 61 NFCe"
            required
            size="sm"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Serie NF"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Serie"
            required
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Fornecedor"
          label-for="input-1"
          class="col-sm-3"
          size="sm"
        >
          <b-form-select
            text-field="razaoSocial"
            value-field="id"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-row>

      <b-row>
        <b-col class="col-sm-6">
          <b-row class="col-sm-12">
            <b-form-group
              id="input-group-1"
              label="Produtos"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-select
                text-field="razaoSocial"
                value-field="id"
                size="sm"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Quantidade"
              label-for="input-1"
              class="col-sm-3"
            >
              <b-form-input
                id="input-1"
                type="number"
                size="sm"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Estoque"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                placeholder="Estoque"
                required
                disabled
                size="sm"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Descrição"
              label-for="input-1"
              class="col-sm-12"
            >
              <b-form-textarea
                id="textarea"
                rows="3"
                max-rows="6"
                size="sm"
              ></b-form-textarea>
            </b-form-group>
          </b-row>
        </b-col>

        <b-col class="col-sm-6">
          <b-row class="col-sm-12 tableSearchPurchase">
            <table class="table table-sm">
              <thead>
                <tr style="background-color: #56aafe; color: white">
                  <th>Nome Produto</th>
                  <th>Descrição</th>
                  <th>Valor de venda</th>
                  <th>estoque</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
                <tr>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
                  <td class="tdSearchPurchase">TESTE</td>
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
              </thead>
            </table>
          </b-row>
        </b-col>
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
              size="sm"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" size="sm"
              >Novo
              <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
            ></b-button>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
// import api from "../../services/axios";
// import toastAlertErros from "../../utils/toastAlertErros";

export default {
  props: {
    readOrEditProducts: {
      type: Object,
    },
  },
  data() {
    return {
      dataProducts: {
        id: "",
        nome: "",
        valor: 0.0,
        valorVenda: 0.0,
        unidade: "",
        descricao: "",
        codBarras: "",
        codReferencia: "",
        estoque: "0",
        estoqueMin: "0",
      },
    };
  },
};
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}

.tableSearchPurchase {
  margin-top: 31px;
  overflow: auto !important;
  max-height: 300px;
}

.tdSearchPurchase {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
}
</style>
