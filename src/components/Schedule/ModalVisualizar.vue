<template>
  <div>
    <b-modal id="modal-Visualizar" title="Cadastrar agendamentos" size="lg">
      <template #modal-footer>
        <b-button size="sm" variant="secondary" @click="destroy"
          >Excluir <b-icon-trash class="ml-2"></b-icon-trash
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
          disabled
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Data Do Evento">
        <b-form-input
          type="date"
          size="sm"
          v-model="teste.dataAgenda"
          disabled
        ></b-form-input>
      </b-form-group>
      <div class="mt-3">
        <label for="">Descrição do Agendamento</label>
        <b-form-textarea
          id="textarea"
          rows="3"
          max-rows="6"
          v-model="teste.descricao"
          disabled
        ></b-form-textarea>
      </div>
    </b-modal>
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
export default {
  props: {
    dataReadSchedule: {
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
  watch: {
    async dataReadSchedule() {
      try {
        const { data } = await api.get(`/schedules/${this.dataReadSchedule}`);
        this.teste.dataAgenda = moment(data.dataAgenda).format("YYYY-MM-DD");
        this.teste.descricao = data.descricao;
        this.teste.tipo = data.tipo;
        this.idSchedule = data.id;
      } catch (error) {
        console.log(error);
      }
    },
  },
  methods: {
    async destroy() {
      try {
        await api.delete(`/schedules/${this.idSchedule}`);
        this.$toast.open({
          message: "Agendamento deletado com Sucesso",
          type: "success",
        });
        this.$bvModal.hide("modal-Visualizar");
      } catch (error) {
        this.$toast.open({
          message: "Não foi possível deletar o agendamento",
          type: "warning",
        });
      }
    },
  },
};
</script>