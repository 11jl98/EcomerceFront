<template>
  <div class="d-flex dashboard">
   <DashboardEstoque class="ml-3 mr-3"/>
   <DashboardNotas class="mr-3"/>
   <DashboardNfces class="mr-3"/>
  </div>
</template>
<script>
import DashboardEstoque from './Dashboard-Estoque.vue'
import DashboardNotas from './Dashboard-Notas.vue'
import DashboardNfces from './Dashboard-Nfces.vue'
export default {
     components: {
          DashboardEstoque,
          DashboardNotas,
          DashboardNfces,
      },
  data() {
    return {};
  },
};
</script>
<style scoped>
.dashboard{
    width: 80%
}
</style>