<template>
  <div>
    <b-card class="shadow">
      <h3>Pesquisa</h3>
      <hr />
      <div class="d-flex align-items-center">
        <b-row class="col-sm-12">
          <b-form-group
            id="input-group-1"
            label="Pesquisa"
            label-for="input-1"
            class="col-sm-4"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Pesquisa"
              v-model="textPesquisa"
              required
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="readCustomers"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>CNPJ/CPF</th>
            <th>Cidade</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in readCustomer" :key="customer.id">
            <td
              class="textoGrande"
              v-b-popover.hover.top="{
                variant: 'secondary',
                content: customer.nome + ' CPF: ' + customer.cpfCnpj,
              }"
            >
              {{ customer.nome }}
            </td>
            <td>{{ customer.cpfCnpj }}</td>
            <td>{{ customer.cidade }} - {{ customer.uf }}</td>
            <td
              class="textoGrande"
              v-b-popover.hover.top="{
                variant: 'secondary',
                content: customer.endereco,
              }"
            >
              {{ customer.endereco }}
            </td>
            <td>
              <b-button
                size="sm"
                class="mr-2"
                style="background-color: #56aafe; border: none !important"
                @click="editCustomer(customer)"
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
                style="border: none !important"
                @click="destroyCustomer(customer.id)"
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
      <hr />
    </b-card>
  </div>
</template>

<script>
import api from "../../services/axios"
export default {
  data() {
    return {
      readCustomer: [],
      textPesquisa: "",
      tabIndex: 0,
    }
  },
  methods: {
    async readCustomers() {
      try {
        const { data } = await api.get("/customers?q=" + this.textPesquisa)
        this.readCustomer = data.data
        console.log(data)
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível salvar o cliente",
          type: "warning",
        })
      }
    },
    async editCustomer(Customer) {
      this.$emit("readOrEditCustomers", Customer)
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais")
      this.$emit("alterTabIndex", this.tabIndex)
      console.log(Customer)
    },
    async destroyCustomer(idCustomer) {
      try {
        await api.delete(`/customers/${idCustomer}`)
        return this.$toast.open({
          message: "Cliente excluido com sucesso",
          type: "success",
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}
</style>