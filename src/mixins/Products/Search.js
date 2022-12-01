import api from "../../services/axios";

const mixinSearchProducts = {
  data() {
    return {
      dataProducts: {},
      productsTable: [],
      textPesquisa: "",
      tabIndex: 0,
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async readProducts(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/products/filter/products?q=${this.textPesquisa}&page=${page}`
          );
          this.dataLength = data.data.length;
          this.dataProducts = data.data;
        } else {
          return;
        }
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os produtos",
          type: "warning",
        });
      }
    },

    async editproducts(products) {
      try {
        this.$emit("dataProducts", products);
        this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
        this.$emit("alterTabIndex", this.tabIndex);
      } catch (error) {
        console.log(error);
      }
    },

    async destroyproducts(idProducts) {
      try {
        await api.delete("/products/" + idProducts);
        this.readProducts(this.page);
        return this.$toast.open({
          message: "Produto deletado com sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error.response.data);
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "error",
        });
      }
    },

    nextPage() {
      this.readProducts((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readProducts((this.page -= 1));
      }
    },
  },
}

export default mixinSearchProducts