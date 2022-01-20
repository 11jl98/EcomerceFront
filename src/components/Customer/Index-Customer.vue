<template>
  <div class="d-flex justify-content-around w-100 container-geral">
    <div class="container-components mt-5" id="receita" role="tablist">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Cadastro de clientes">
            <b-card-text>
              <Customer :readOrEditCustomers="readOrEditCustomers" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search @readOrEditCustomers="readOrEditCustomers = $event"
            /></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Customer from "./Customer.vue";
import Search from "./Search.vue";
export default {
  components: {
    Customer,
    Search,
  },
  data() {
    return {
      readOrEditCustomers: {},
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
.container-geral {
  width: 100% !important;
}

.container-components {
  width: 90% !important;
  margin-left: 9%;
}
</style>