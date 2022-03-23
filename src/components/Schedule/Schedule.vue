<template>
  <div class="demo-app">
    <ModalAgendamento @dataSchedule="dataSchedule = $event" :date="date" />
    <ModalVisualizar :dataReadSchedule="dataReadSchedule" />
    <FullCalendar class="demo-app-calendar" :options="calendarOptions">
    </FullCalendar>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalAgendamento from "./ModalAgendamento.vue";
import ModalVisualizar from "./ModalVisualizar.vue";
import moment from "moment";
import api from "../../services/axios";
export default {
  components: {
    FullCalendar,
    ModalAgendamento,
    ModalVisualizar,
  },

  data: function () {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        buttonText: {
          today: "Hoje",
        },
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: [],
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        locale: "pt-br",
        eventColor: "rgb(4, 56, 151)",
      },
      currentEvents: [],
      dataSchedule: {},
      date: moment().format("YYYY-MM-DD"),
      dataReadSchedule: "",
    };
  },
  mounted() {
    this.readSchedule();
  },
  methods: {
    async readSchedule() {
      try {
        const { data } = await api.get("/schedules");
        data.map((resultado) => {
          this.calendarOptions.events.push(this.CreateObject(resultado));
        });
      } catch (error) {
        console.log(error);
      }
    },
    CreateObject(dados) {
      return {
        id: dados.id,
        title: dados.tipo,
        start: moment(dados.dataAgenda).format("YYYY-MM-DD"),
        description: dados.descricao,
      };
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },

    handleDateSelect() {
      this.$bvModal.show("modal-Agendamento");
    },

    handleEventClick(clickInfo) {
      this.dataReadSchedule = clickInfo.event.id;
      this.$bvModal.show("modal-Visualizar");
    },

    handleEvents(events) {
      this.currentEvents = events;
    },
  },
  watch: {
    dataSchedule() {
      this.calendarOptions.events.push(this.CreateObject(this.dataSchedule));
    },
  },
};
</script>



<style scoped>
.demo-app {
  display: flex;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  background-color: transparent !important;
  margin-bottom: 20px !important;
}
.demo-app-calendar {
  width: 65%;
  height: 90vh;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #fff !important;
  padding: 1em;
  border-radius: 20px;
}
</style>
