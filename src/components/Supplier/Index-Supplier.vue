<template>
  <div class="d-flex justify-content-around w-100">
    <div
      class="d-flex flex-column align-items-center shadow container-home"
      style=""
      id="divContainer"
    >
      <div class="button-menu mt-5">
        <b-button
          class="nav-button"
          variant="light"
          block
          v-b-toggle.accordion-dadosCadastrais
          >Cadastro De Fornecedor</b-button
        >
      </div>
      <div class="button-menu">
        <b-button
          class="nav-button"
          variant="light"
          block
          v-b-toggle.accordion-search
          >Pesquisa</b-button
        >
      </div>
    </div>
    <div class="container-components" id="receita" role="tablist">
      <Supplier :dataSupplier="dataSupplier"/>
      <Search @readOrEditSupplier="dataSupplier = $event"/>
    </div>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import Search from "./Search.vue";
export default {
  components: {
    Supplier,
    Search,
  },
  data() {
    return {
      dataSupplier: {

      }
    };
  },
};
</script>
<style scoped>
.container-home {
  width: 20% !important;
  height: 60vh;
  margin: 1vh;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.911);
}
.button-menu {
  width: 90%;
  color: #fff;
  margin: 5px;
  margin-bottom: 10px;
}
.nav-button {
  border-radius: 10px;
  background-color: #56aafe !important;
  color: #fff;
  border: none;
}
.container-components {
  width: 73% !important;
}
</style>