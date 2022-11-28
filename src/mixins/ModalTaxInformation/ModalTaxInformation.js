import ServiceTax from "../../services/serviceTax";
import toastAlertErros from "../../utils/toastAlertErros";
import HandleTaxNotaFIscal from "../../utils/handleTaxData"
import {initialStateInfoFiscal, initialStateTaxForSelectBoxes, initialStateObjectIcms} from "../../initialStates/infoFiscal"
import handleTaxData from "../../utils/handleTaxData";

const mixinModalTaxInformations = {
  props: {
    refsFiscais: {
      type: Array ,
    },
  },
  data() {
    return {
      infoFiscal: initialStateInfoFiscal,
      taxForSelectBoxes: initialStateTaxForSelectBoxes,
      enableISSQN: true,
      enableBeneficioFiscal: false,
      objectIcms: initialStateObjectIcms,
      createdNewRef: false,
    };
  },
  methods: {
    async save() {
      try {
        const adjustedTaxObject = HandleTaxNotaFIscal.handleValues(this.infoFiscal, this.objectIcms)

        if (this.enableISSQN) {
          delete adjustedTaxObject.issqn;
        }

        const result = await ServiceTax.save(adjustedTaxObject);
        this.infoFiscal.id = result.id;

        this.findAllRefs()
        this.clear()

        return this.$toast.open({
          message: "REF gerado com sucesso!",
          type: "success",
        });
      } catch (error) {
        if (error.response.data.erros.length > 0) {
          console.log(error.response.data);
          return toastAlertErros.validateErroDoesNotContainFor(
            error,
            this.$toast
          );
        } else {
          return toastAlertErros.validateMessage(error, this.$toast);
        }
      }
    },
    async update() {
      console.log("atualizando REF jaja");
    },
    async excluir(dataRef){
      try {
        await ServiceTax.delete(dataRef)
        this.findAllRefs()
        
        return this.$toast.open({
          message: "REF deletado com sucesso!",
          type: "success",
        });
      } catch (error) {
        return this.$toast.open({
          message: error.response.data.message,
          type: "error",
        });
      }
    },
    findAllRefs() {
     this.$emit('createdNewRef', !this.createdNewRef)
    },
    handleSaveOrUpdate() {
      this.infoFiscal.id !== "" ? this.update() : this.save();
    },
    handleChangeIssqn() {
      this.enableISSQN = !this.enableISSQN;
    },
    editar(){
      console.log(this.refsFiscais)
    },
    clear(){
      this.infoFiscal = handleTaxData.clearTax()
      this.enableISSQN = true;
    }
  },
  watch: {
    enableISSQN() {
      this.infoFiscal.issqn = [
        {
          cenario: "",
          tipo_pessoa: "",
          exigibilidade: "",
          item_servico: "",
          incentivo_fiscal: "",
          aliquota: "",
        },
      ];
    },
  },
}

export default mixinModalTaxInformations;