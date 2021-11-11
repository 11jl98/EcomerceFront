<template>
  <div>
    <b-sidebar
      id="sidebar-variant"
      title="Menu principal"
      bg-variant="light"
      text-variant="dark"
      shadow
      style="background-color: rgba(58, 91, 180, 1) !important"

    >
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <b-button class="nav-button mt-3" variant="light" block to="/Clientes">Cadastro De Cliente</b-button>
            <b-button class="nav-button" variant="light" block to="/Fornecedores">Cadastro de fornecedor</b-button>
            <b-button class="nav-button" variant="light" block to="/Funcionarios">Cadastro de funcionário</b-button>
            <b-button class="nav-button" variant="light" block to="/">Cadastro De Produto</b-button>
            <b-button class="nav-button" variant="light" block to="/">Pedido de Venda</b-button>
            <b-button class="nav-button" variant="light" block to="/">NF-e/ NFC-e</b-button>
            <b-button class="nav-button" variant="light" block to="/">Agenda</b-button>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-button{
  background-color: #56aafe !important;
  color: #fff;
  border-radius: 10px!important;
  margin: 5px 5px 5px 0px
}
</style>