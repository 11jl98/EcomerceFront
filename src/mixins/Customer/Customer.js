import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";

const mixinCustomer = {
  props: {
    readOrEditCustomers: {
      type: Object,
    },
    clearAll: {
      type: Boolean,
    },
  },
  data() {
    return {
      dataCostumer: {
        id: "",
        nome: "",
        cpfCnpj: "",
        ie: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        telefone: "",
        celular: "",
        email: "",
        dataNascimento: "",
        observacao: "",
        consumidor_final: "0",
        contribuinte: "9",
      },
      consumidorFinal: [
        { value: "0", text: "0 - Normal" },
        { value: "1", text: "1 - Consumidor final" },
      ],
      contribuinte: [
        { value: "1", text: "1 - Contribuinte ICMS" },
        {
          value: "2",
          text: "2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS",
        },
        {
          value: "9",
          text: "9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS.",
        },
      ],
    };
  },

  methods: {
    clearInputs() {
      this.dataCostumer.id = "";
      this.dataCostumer.nome = "";
      this.dataCostumer.cpfCnpj = "";
      this.dataCostumer.endereco = "";
      this.dataCostumer.numero = "";
      this.dataCostumer.complemento = "";
      this.dataCostumer.bairro = "";
      this.dataCostumer.cidade = "";
      this.dataCostumer.uf = "";
      this.dataCostumer.cep = "";
      this.dataCostumer.email = "";
      this.dataCostumer.telefone = "";
      this.dataCostumer.celular = "";
      this.dataCostumer.dataNascimento = "";
      this.dataCostumer.observacao = "";
      this.dataCostumer.ie = "";
      this.dataCostumer.contribuinte = "9";
      this.dataCostumer.consumidor_final = "0";
    },

    saveOrUpdateCustomer() {
      if (this.dataCostumer.id === "") return this.saveCustomer();

      this.updateCustomer();
    },

    async saveCustomer() {
      try {
        const { data } = await api.post("/customers", this.dataCostumer);
        this.dataCostumer.id = data.id;
        return this.$toast.open({
          message: "Cliente salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },
    async updateCustomer() {
      try {
        await api.put("/customers/" + this.dataCostumer.id, this.dataCostumer);

        this.$toast.open({
          message: "Cliente atualizado com Sucesso",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },
  },
  watch: {
    readOrEditCustomers() {
      Object.assign(this.dataCostumer, this.readOrEditCustomers);
    },
    clearAll() {
      this.clearInputs();
    },
  },
  computed: {
    maskCpfCnpj() {
      if (this.dataCostumer.cpfCnpj === null) {
        return "";
      }
      if (this.dataCostumer.cpfCnpj.length <= 14) {
        return "###.###.###-##";
      }
      if (this.dataCostumer.cpfCnpj.length > 14) {
        return "##.###.###/####-##";
      } else {
        return "";
      }
    },

    maskCelular() {
      return "(##) #####-####";
    },
    maskTelefone() {
      return "(##) ####-####";
    },
    maskCep() {
      return "#####-###";
    },
  },
}

export default mixinCustomer