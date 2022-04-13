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
          @click="importXml"
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
// import api from "../../services/axios";
// import moment from "moment";
import ImportXML from "../../services/ImportXML/importXml";
// import toastAlertErros from "../../utils/toastAlertErros";

export default {
  data() {
    return {
      xmlFile: null,
    };
  },
  methods: {
    async importXml() {
      const file = this.xmlFile;
      console.log(ImportXML.readXml(file));
      // const { data } = await api.post("/purchasenote", xml);
    },
  },
  watch: {},
};
</script>

<style>
</style>
