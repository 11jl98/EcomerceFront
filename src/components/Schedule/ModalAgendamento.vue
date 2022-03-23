<template>
  <div>
    <b-modal id="modal-Agendamento" title="Cadastrar agendamentos" size="lg">
      <template #modal-footer>
        <b-button
          class="mr-4"
          style="border: none !important; background-color: #56aafe !important"
          @click="saveSchedule"
          >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
        ></b-button>
        <b-button style="border: none !important" variant="light" @click="clear"
          >Limpar <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
        ></b-button>
      </template>
      <b-form-group
        id="input-group-3"
        label="Tipo do Agendamento"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          size="sm"
          :options="options"
          v-model="teste.tipo"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Data Do Evento">
        <b-form-input
          type="date"
          size="sm"
          v-model="teste.dataAgenda"
        ></b-form-input>
      </b-form-group>
      <div class="mt-3">
        <label for="">Descrição do Agendamento</label>
        <b-form-textarea
          id="textarea"
          rows="3"
          max-rows="6"
          v-model="teste.descricao"
        ></b-form-textarea>
      </div>
    </b-modal>
  </div>
</template>
<script>
import api from "../../services/axios";
export default {
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      teste: {
        descricao: "",
        tipo: "Lembrete",
        dataAgenda: "",
      },
      options: [
        { value: "Lembrete", text: "Lembrete" },
        { value: "Reunião", text: "Reunião" },
        { value: "Outro", text: "Outro" },
      ],
      idSchedule: "",
    };
  },
  mounted() {
    this.teste.dataAgenda = this.date;
  },
  methods: {
    async saveSchedule() {
      try {
        const { data } = await api.post("/schedules", this.teste);
        this.idSchedule = data.id;
        this.$emit("dataSchedule", { id: this.idSchedule, ...this.teste });
        this.$bvModal.hide("modal-Agendamento");
        this.$toast.open({
          message: "Agendamento salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: "Não foi possível salvar agendamento",
          type: "warning",
        });
      }
    },
    clear() {
      this.teste = {};
      this.idSchedule = "";
    },
  },
};
</script>
