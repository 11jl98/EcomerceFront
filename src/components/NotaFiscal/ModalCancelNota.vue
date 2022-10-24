<template>
  <div>
    <b-modal
      id="modalCancelNota"
      size="lg"
      title="Cancelar NF-e"
      ok-title="Salvar"
      centered
    >
      <template #modal-footer>
        <b-button variant="info" size="sm" @click="cancelNota"
          >Prosseguir</b-button
        >
      </template>
      <b-row class="d-flex">
        <b-form-group
          id="input-group-1"
          label="Motivo do cancelamento!"
          label-for="input-1"
          class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
        >
          <b-form-input
            placeholder="Min: 15 caracteres"
            size="md"
            v-model="motivo"
          ></b-form-input>
        </b-form-group>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import serviceNotaFiscal from "../../services/serviceNotaFiscal";

export default {
  props: {
    idNota: {
      type: Object,
    },
  },
  data() {
    return {
      motivo: "",
    };
  },
  methods: {
    async cancelNota() {
      const dataCancelamento = {
        uuid: this.idNota.uuidNotaWebMania,
        motivo: this.motivo,
      };

      const result = await serviceNotaFiscal.cancelNota(
        dataCancelamento,
        this.idNota.idNota
      );
      console.log(result);
    },
  },
};
</script>

<style>
</style>