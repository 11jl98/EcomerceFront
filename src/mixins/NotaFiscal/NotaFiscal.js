import moment from "moment";
import ServiceCustomer from "../../services/serviceCustomer";
import ServiceProducts from "../../services/serviceProducts";
import ModalShippingCompany from "../../components/NotaFiscal/ModalShippingCompany.vue";
import ModalCancelNota from "../../components/NotaFiscal/ModalCancelNota.vue";
import ModalTaxInformation from "../../components/ModalTaxInformation/Index-TaxInformation.vue";
import toastAlertErros from "../../utils/toastAlertErros";
import ServiceNotaFiscal from "../../services/serviceNotaFiscal";
import ServiceTax from "../../services/serviceTax";

const mixinNotaFiscal = {
  components: {
    ModalShippingCompany,
    ModalCancelNota,
    ModalTaxInformation,
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
        natureza_operacao: "Venda de mercadoria",
        modelo: "1", //2 para NFC-e
        ambiente: "2", //2 para Homologação
        idCliente: "",
        finalidade: 1,
        url_notificacao: "teste",
        data_nfe: moment().format("YYYY-MM-DD"),
        id_webmania: "",
        response: "",
        response_cancelamento: "",
        status: "",
        nfe_referenciada: "",
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
      responseNfeWebManiaCancelamento: {
        log: {},
        status: "",
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
        classe_imposto: "", // devolução ENTRADA REF7311252 pessoa fisica, devolução SAIDA REF15467394, saida normal REF15466069
        informacoes_adicionais: "",
      },
      cliente: [],
      produtos: [],
      produtosForTable: [],
      valorTotalProdutosComDesc: "",
      valorTotalDescontoProdutos: "",
      getNotaAfterCanceled: false,
      producsReferencedNota: [],
      producsReferencedNotaFinal: [],
      dadosNotaDevolucao: {
        produtos: [],
        quantidade: [],
        uuidItem: [],
      },
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
      spinLoadingDevolucao: false,
      allRefsFiscaisFromSelectBox: [],
      classeImpostoDevolucao: "",
      createdNewRef: false,
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
      this.dadosNfe.status = "";

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
      if (this.dadosNfe.operacao == "1") {
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

    chekedProductsReturnNota(index) {
      if (this.producsReferencedNotaFinal[index].isDevolucao) {
        if (!this.producsReferencedNotaFinal[index].qtdDevolvida)
          this.producsReferencedNotaFinal[index].qtdDevolvida = 1;

        this.producsReferencedNotaFinal[index].index = ++index;
        return;
      }

      this.producsReferencedNotaFinal[index].qtdDevolvida = 1;
      this.producsReferencedNotaFinal[index].index = null;
    },

    handleReturnedAmmoutAndAmmount() {
      for (let i = 0; i < this.producsReferencedNotaFinal.length; i++) {
        const result = this.veirfyAmount(i);
        if (result) {
          this.$toast.open({
            message:
              "Quantidade DEVOLVIDA não pode ser maior nem menor que a QUANTIDADE!",
            type: "warning",
          });
          return result;
        }
      }
    },

    veirfyAmount(index) {
      return (
        this.producsReferencedNotaFinal[index].qtdDevolvida < 1 ||
        this.producsReferencedNotaFinal[index].qtdDevolvida === "" ||
        parseInt(this.producsReferencedNotaFinal[index].qtdDevolvida) >
          this.producsReferencedNotaFinal[index].quantidade
      );
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
      if (this.dadosNfe.operacao == "1" && this.dadosNfe.finalidade == "4") {
        await this.sendExitNotaDevolution();
      } else {
        await this.sendExitNota();
      }
    },

    async sendExitNota() {
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
        await ServiceNotaFiscal.sendExitNota(this.dadosNfe.id);

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
      } finally {
        this.spinLoading = false;
      }
    },

    async sendExitNotaDevolution() {
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
        await ServiceNotaFiscal.sendExitNotaDevolution(this.dadosNfe.id);

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
      } finally {
        this.spinLoading = false;
      }
    },

    async sendEntryNotaDevolution() {
      try {
        this.spinLoadingDevolucao = true;

        this.dadosNotaDevolucao = {
          produtos: [],
          quantidade: [],
          uuidItem: [],
        };

        this.handleValuesDataDevolutionNota();

        await ServiceNotaFiscal.sendEntryNotaDevolution(
          {
            ...this.dadosNotaDevolucao,
            ambiente: this.dadosNfe.ambiente,
            natureza_operacao:
              "Devolução de venda de produção do estabelecimento",
            classe_imposto: this.classeImpostoDevolucao,
          },
          this.dadosNfe.id
        );
        //ref emissão devolução de ENTRADA dentro do estado REF7311252 pessoa fisica
        await this.findNotaById();
        await this.findProductsByIdNota();

        this.$bvModal.hide("modalReturnNota");
        this.producsReferencedNotaFinal = [];
        return this.$toast.open({
          message: "Nota devolvida com sucesso!",
          type: "success",
        });
      } catch (error) {
        return this.$toast.open({
          message: error.response.data.message,
          type: "error",
        });
      } finally {
        this.spinLoadingDevolucao = false;
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
              ? "0"
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
      this.produtosNotaFiscal.classe_imposto = result[0].refFiscal;
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

    async handleEmitOrReturnNota() {
      this.dadosNfe.operacao == "1"
        ? await this.sendNota()
        : await this.findNotaByChaveReferenciada();
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
      Object.assign(
        this.responseNfeWebManiaCancelamento,
        result.response_cancelamento
      );
    },

    async findNotaByChaveReferenciada() {
      try {
        const result = await ServiceNotaFiscal.findNotaByChaveReferenciada(
          this.dadosNfe.nfe_referenciada
        );
        this.producsReferencedNota = result;
        this.openModalReturnNota();
        this.handleDataProducsReferencedNota();
      } catch (error) {
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "error",
        });
      }
    },

    async findAllRefsFromSelectBox() {
      try {
        const result = await ServiceTax.findAllRefs();
        this.allRefsFiscaisFromSelectBox = result.data.map((e) => {
          return {
            id: e.id,
            descricao: `${e.ref} - ${e.descricao}`,
            ref: e.ref,
            refObject: e.refObject,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },

    openModalReturnNota() {
      this.$bvModal.show("modalReturnNota");
      this.producsReferencedNotaFinal = [];
    },

    handleDataProducsReferencedNota() {
      this.producsReferencedNota.forEach((prod) =>
        this.producsReferencedNotaFinal.push({
          ...prod,
          qtdDevolvida: 1,
          index: null,
          isDevolucao: false,
        })
      );
    },

    handleValuesDataDevolutionNota() {
      this.producsReferencedNotaFinal.forEach((element, index) => {
        if (this.producsReferencedNotaFinal[index].isDevolucao)
          this.dadosNotaDevolucao.quantidade.push(element.qtdDevolvida);
      });
      this.producsReferencedNotaFinal.forEach((element, index) => {
        if (this.producsReferencedNotaFinal[index].isDevolucao)
          this.dadosNotaDevolucao.produtos.push(element.index);
      });
      this.producsReferencedNotaFinal.forEach((element, index) => {
        if (this.producsReferencedNotaFinal[index].isDevolucao)
          this.dadosNotaDevolucao.uuidItem.push(element.id);
      });
    },

    openModalTaxInformation() {
      this.$bvModal.show("modalTaxInformation");
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
        (this.dadosNfe.finalidade == "4" &&
          this.dadosNfe.nfe_referenciada !== "" &&
          this.dadosNfe.id !== "" &&
          this.responseNfeWebMania.chave === "" &&
          this.dadosNfe.operacao == "0") ||
        this.responseNfeWebMania.status === "reprovado"
      ) {
        return false;
      } else {
        if (
          this.produtosForTable.length < 1 ||
          this.responseNfeWebMania.chave !== ""
        ) {
          return true;
        } else {
          return false;
        }
      }
    },
    handleOperacao() {
      return this.dadosNfe.operacao;
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
    this.findAllRefsFromSelectBox();
  },
  watch: {
    propsIdNota() {
      this.dadosNfe.id = this.propsIdNota;
      this.handleDiscountAndFindNoteAndItems();
    },
    getNotaAfterCanceled() {
      this.findNotaById();
    },
    handleOperacao() {
      this.changeEmissionTypeText();
    },
    createdNewRef() {
      this.findAllRefsFromSelectBox();
    },
  },
}

export default mixinNotaFiscal