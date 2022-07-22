<template>
  <div>
    <b-modal id="modalImportXml" size="lg" title="Importação de XML"
      ><div>
        <b-row class="d-flex">
          <b-form-input hidden class="col-sm-1"></b-form-input>

          <b-form-group
            id="input-group-1"
            label="XML"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-4 col-xl-9"
            size="sm"
          >
            <b-form-file
              placeholder="Selecione um XML ou arraste e solte aqui..."
              drop-placeholder="Solte o arquivo aqui..."
              size="sm"
              id="fileXml"
              v-model="xmlFile"
              browse-text="Arquivo"
            ></b-form-file>
          </b-form-group>
        </b-row>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="converXmlAndReturnObjectAndSave"
          style="color: white"
        >
          Importar
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Fechar
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import moment from "moment";
import api from "../../services/axios";
import ConvertXml from "../../services/serviceConvertXml";
import AssigningValuesToTheObject from "../../services/assigningValues​ToTheObject";
import ServiceSupplier from "../../services/serviceSupplier";
import ServiceProducts from "../../services/serviceProducts";
import ServicePurchase from "../../services/servicePurchase";
import ServiceProductsOfPurchase from "../../services/serviceProductsOfPurchase";

export default {
  data() {
    return {
      xmlFile: null,
      objectPurchase: null,
      objectPurchaseTotal: {},
      idPurchase: null,
    };
  },

  methods: {
    async converXmlAndReturnObjectAndSave() {
      if (this.xmlFile.type !== "text/xml") {
        return;
      }
      const xmlConverted = await this.convertXml();
      await this.returnPurchaseObject(xmlConverted);
      // await this.saveSupplier();
      // await this.saveProducts();
      // await this.savePurchase();
      await this.saveAllPurchase();
    },

    async convertXml() {
      try {
        if (this.xmlFile === null) {
          this.$toast.open({
            message: "Selecione o arquivo XML!",
            type: "warning",
          });
          return null;
        }

        const xmlConvertedToString = await ConvertXml.xmlString(this.xmlFile);

        if (xmlConvertedToString === null) {
          this.$toast.open({
            message: "O arquivo deve ser um XML VALIDO",
            type: "error",
          });
          return null;
        } else {
          const { data } = await api.post("/purchasenote", {
            xmlString: xmlConvertedToString,
          });
          return data;
        }
      } catch (error) {
        console.log(error, "ocorreu um erro ao converter o arquivo XML");
      }
    },

    async returnPurchaseObject(xmlConverted) {
      try {
        if (xmlConverted === null) {
          return;
        }
        this.objectPurchase = await ConvertXml.ObjectPurchase(xmlConverted);
        this.assignValuesToTheObjectPurchase(this.objectPurchase);
      } catch (error) {
        console.log(
          error,
          "error ao atribuir objetos do xml ao objeto da nota de compra"
        );
      }
    },

    assignValuesToTheObjectPurchase(objectPurchase) {
      this.objectPurchaseTotal =
        AssigningValuesToTheObject.assigningValues(objectPurchase);
    },

    async saveSupplier() {
      try {
        if (Object.values(this.objectPurchaseTotal).length === 0) {
          return;
        }

        const data = await ServiceSupplier.saveSupllier(
          this.objectPurchaseTotal?.supplier
        );

        this.$emit("idSupplierForSelectBox", data);

        return this.$toast.open({
          message: "Fornecedor cadastrado com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    async saveProducts() {
      try {
        if (Object.values(this.objectPurchaseTotal).length === 0) {
          return;
        }

        const data = await ServiceProducts.saveProductsFromXml(
          this.objectPurchaseTotal?.products
        );

        this.$emit("idProductsForSelectBox", data);

        return this.$toast.open({
          message: "Produtos cadastrados com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    async savePurchase() {
      try {
        this.idPurchase = await ServicePurchase.savePurchase({
          dataCompra: moment().format("YYYY-MM-DD"),
        });

        this.$emit("modalIdForPurchase", this.idPurchase);

        return this.$toast.open({
          message: "Compra salva com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    async saveAllPurchase() {
      console.log(this.objectPurchaseTotal, "testeeeeeeeee");
      const { data } = await ServiceProductsOfPurchase.save(
        this.objectPurchaseTotal
      );
      return data;
    },
  },
  watch: {},
};
</script>

<style>
</style>
