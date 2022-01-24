<template>
  <div id="containerGeral">
    <div class="cabecalho">
      <div class="titulo">
        <h3>DashBoard</h3>
      </div>
      <div class="containerCards">
        <div class="cards col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Contas Receber/Mês R$"
            >
              <b-card-text> Esse Mês: 2.000,00 R$ </b-card-text>
              <b-card-text> Mês passado: 2.000,00 R$ </b-card-text>
              <b-card-text> Possível lucro: 2.000,00 R$ </b-card-text>
            </b-card>
          </div>

          <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <b-card bg-variant="dark" text-variant="white" title="Card Title">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
            </b-card>
          </div>

          <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <b-card bg-variant="dark" text-variant="white" title="Card Title">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#containerGeral {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: red;
}
.cabecalho {
  width: 100%;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.containerCards {
}

.cards {
  display: flex;
  justify-content: space-evenly;
  height: auto;
}
</style>