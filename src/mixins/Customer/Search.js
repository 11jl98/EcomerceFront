import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";

const searchCustomer = {
  data() {
    return {
      readCustomer: [],
      textPesquisa: "",
      tabIndex: 0,
      page: 1,
      dataLength: 0,
      boolClear: false,
    };
  },
  methods: {
    nextPage() {
      this.readCustomers((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readCustomers((this.page -= 1));
      }
    },

    async readCustomers(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/customers?q=${this.textPesquisa}&page=${page}`
          );
          this.dataLength = data.data.length;
          this.readCustomer = data.data;
        } else {
          return;
        }
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os clientes",
          type: "warning",
        });
      }
    },
    async editCustomer(customer) {
      this.$emit("readOrEditCustomers", customer);
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
      this.$emit("alterTabIndex", this.tabIndex);
    },
    async destroyCustomer(idCustomer) {
      try {
        await api.delete(`/customers/${idCustomer}`);
        this.readCustomers(this.page);
        this.$emit("clearAll", this.boolClear);
        this.boolClear = !this.boolClear;
        return this.$toast.open({
          message: "Cliente excluido com sucesso",
          type: "success",
        });
      } catch (error) {
        toastAlertErros.validateMessage(error, this.$toast);
      }
    },
  },
}

export default searchCustomer