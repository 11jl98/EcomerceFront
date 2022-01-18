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
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow mt-3"
              variant="light"
              block
              to="/Clientes"
            >
              Cadastro De Cliente<b-icon-person-bounding-box
                style="float: right"
                scale="1.5"
                class="mt-1"
              ></b-icon-person-bounding-box
            ></b-button>

            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/Fornecedores"
              >Cadastro de fornecedor<b-icon-arrow-up
                style="float: right"
              ></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/Funcionarios"
              >Cadastro de funcionário<b-icon-arrow-up
                style="float: right"
              ></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/Produtos"
              >Cadastro De Produto<b-icon-arrow-up
                style="float: right"
              ></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/Vendas"
              >Pedido de Venda<b-icon-arrow-up
                style="float: right"
              ></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/"
              >NF-e/ NFC-e<b-icon-arrow-up
                style="float: right"
              ></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/Financeiro"
              >Financeiro<b-icon-arrow-up style="float: right"></b-icon-arrow-up
            ></b-button>
            <b-button
              style="border: none !important; text-align: left"
              class="nav-button shadow"
              variant="light"
              block
              to="/"
              >Agenda<b-icon-arrow-up style="float: right"></b-icon-arrow-up
            ></b-button>
          </b-nav>
        </nav>
      </div>
      <b-button class="home-button shadow" variant="light" block to="/"
        >Pagina Inicial</b-button
      >
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-button {
  background-color: #56aafe !important;
  color: #fff;
  margin: 5px 5px 5px 0px;
}
</style>