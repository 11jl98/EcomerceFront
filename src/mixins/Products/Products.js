import toastAlertErros from "../../utils/toastAlertErros";
import ServiceProducts from "../../services/serviceProducts";
import ServiceTax from "../../services/serviceTax";
import ModalTaxInformation from "../../components/ModalTaxInformation/Index-TaxInformation.vue";

const mixinProducts = {
  props: {
    readOrEditProducts: {
      type: Object,
    },
  },
  components: {
    ModalTaxInformation,
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
        estoque: 0,
        estoqueMin: 0,
        refFiscal: "",
      },
      refsFiscaisFromSelectBox: [],
      refsFiscais: [],
      createdNewRef: false,
    };
  },
  methods: {
    saveOrUpdateProducts() {
      this.dataProducts.id === "" || this.dataProducts.id === null
        ? this.saveProducts()
        : this.updateProducts();
    },

    async updateProducts() {
      try {
        await ServiceProducts.updateProducts(this.dataProducts);
        return this.$toast.open({
          message: "Produto Atualizado com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },

    async saveProducts() {
      try {
        const id = await ServiceProducts.saveProducts(this.dataProducts);
        this.dataProducts.id = id;

        this.clear();
        return this.$toast.open({
          message: "Produto Salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },

    async findAllRefs() {
      try {
        const result = await ServiceTax.findAllRefs();
        this.refsFiscais = result.data;        this.refsFiscaisFromSelectBox = result.data.map((e) => {
          return {
            id: e.id,
            descricao: ` ${e.ref} - ${e.descricao}`,
            ref: e.ref,
            refObject: e.refObject,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },

    clear() {
      this.dataProducts = {
        id: "",
        nome: "",
        valor: 0.0,
        valorVenda: 0.0,
        unidade: "",
        descricao: "",
        codBarras: "",
        codReferencia: "",
        estoque: 0,
        estoqueMin: 0,
        refFiscal: "",
      };
    },

    openModalTaxInformation() {
      this.$bvModal.show("modalTaxInformation");
    },
  },
  watch: {
    readOrEditProducts() {
      this.dataProducts = this.readOrEditProducts;
    },
    createdNewRef(){
      this.findAllRefs();
    }
  },
  async mounted() {
    await this.findAllRefs();
  },
}

export default mixinProducts