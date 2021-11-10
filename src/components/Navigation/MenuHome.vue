<template>
  <div
    class="d-flex flex-column align-items-center shadow container-home"
    style=""
  >
    <div class="button-menu mt-5">
      <b-button class="nav-button" variant="light" block href="/Clientes"
        >Cadastro De Cliente</b-button
      >
    </div>
    <div class="button-menu">
      <b-button class="nav-button" variant="light" block href="/Fornecedores"
        >Cadastro De Fornecedor</b-button
      >
    </div>
    <div class="button-menu">
      <b-button class="nav-button" variant="light" block href="/Funcionarios"
        >Cadastro De Funcionário</b-button
      >
    </div>
    <div class="button-menu">
      <b-button class="nav-button" variant="light" block href="#foo"
        >Pedido de Venda</b-button
      >
    </div>
    <div class="button-menu">
      <b-button class="nav-button" variant="light" block href="#foo"
        >NF-e/ NFC-e</b-button
      >
    </div>
    <div class="button-menu">
      <b-button class="nav-button" variant="light" block href="/Agenda"
        >Agenda</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.container-home {
  width: 20%;
  height: 97vh;
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
</style>