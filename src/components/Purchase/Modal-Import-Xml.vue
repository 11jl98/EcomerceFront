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
            ></b-form-file>
          </b-form-group>
        </b-row>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="converXmlAndReturnObject"
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
import api from "../../services/axios";
// import moment from "moment";
import ConvertXml from "../../services/serviceConvertXml";
// import toastAlertErros from "../../utils/toastAlertErros";

export default {
  data() {
    return {
      xmlFile: null,
      objectXmlPurchase: null,
      objectSupplier: {
        id: "",
        nomeFantasia: "",
        razaoSocial: "",
        cpfCnpj: "",
        ie: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        email: "",
        telefone: "",
        celular: "",
      },
      objectProducts: [],
    };
  },
  methods: {
    async converXmlAndReturnObject() {
      const data = await this.convertXml();
      this.returnObjectAndassignValuesToTheNewObject(data);
    },

    async convertXml() {
      const xml = this.xmlFile;
      const xmlConvertedToString = await ConvertXml.xmlString(xml);

      const { data } = await api.post("/purchasenote", {
        xmlString: xmlConvertedToString,
      });

      return data;
    },

    async returnObjectAndassignValuesToTheNewObject(data) {
      await this.returnObjectPurchase(data);
      await this.assignValuesToTheObjectPurchase();
    },

    async returnObjectPurchase(data) {
      this.objectXmlPurchase = await ConvertXml.ObjectXmlPurchase(data);
      // falta atribuir os valores para realizar os cadastros tanto de produto quando de fornecedor
    },

    assignValuesToTheObjectPurchase() {
      this.objectSupplier.nomeFantasia =
        this.objectXmlPurchase.fornecedor[0].xFant[0];

      this.objectSupplier.razaoSocial =
        this.objectXmlPurchase.fornecedor[0].xNome[0];

      this.objectSupplier.ie = this.objectXmlPurchase.fornecedor[0].IE[0];

      this.objectSupplier.cpfCnpj =
        this.objectXmlPurchase.fornecedor[0].CNPJ[0];

      this.objectSupplier.endereco =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].xLgr[0];

      this.objectSupplier.numero =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].nro[0];

      this.objectSupplier.bairro =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].xBairro[0];

      this.objectSupplier.cidade =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].xMun[0];

      this.objectSupplier.uf =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].UF[0];

      this.objectSupplier.telefone =
        this.objectXmlPurchase.fornecedor[0].enderEmit[0].fone[0];

      this.objectProducts = this.objectXmlPurchase.produtos.map((e) => {
        return {
          id: "",
          nome: e.prod[0].xProd,
          valor: e.prod[0].vProd,
          valorVenda: 0.0,
          unidade: e.prod[0].uTrib,
          estoque: e.prod[0].qCom,
        };
      });
      console.log(this.objectProducts);
    },
  },
  watch: {},
};
</script>

<style>
</style>
