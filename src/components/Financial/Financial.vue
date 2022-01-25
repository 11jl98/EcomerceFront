<template>
  <div id="containerGeral">
    <div id="containerGeralFinanceiro">
      <div id="containerFinanceiro">
        <div class="cabecalho">
          <div class="titulo">
            <h3 class="mt-4 mb-4">Dashboard</h3>
          </div>
          <div class="containerCards">
            <div class="cardsFinancas col-sm-12">
              <div class="col-sm-3">
                <b-card
                  text-variant="dark"
                  sub-title="LUCRO (MENSAIS)"
                  class="cardsLm p-2 col-sm-12"
                  style="max-width: 17rem"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-3">
                <b-card
                  text-variant="dark"
                  sub-title="LUCRO (ANUAL)"
                  class="cardsLa p-2"
                  style="max-width: 17rem"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-3">
                <b-card
                  text-variant="dark"
                  sub-title="RECEBER (MENSAIS)"
                  class="cardsRb p-2"
                  style="max-width: 17rem"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-3">
                <b-card
                  text-variant="dark"
                  sub-title="VENCER (MENSAIS)"
                  class="cardsVc p-2"
                  style="max-width: 17rem"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <div id="containerContas">
          <h3>TESTE</h3>
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

#containerGeralFinanceiro {
  width: 100%;
  margin-left: 6%;
}

.titulo {
  width: 100%;
}
.titulo h3 {
  display: flex;
  margin-left: 35px;
}
.cabecalho {
  width: 100%;
  height: auto;
  color: white;
}

.cardsLm {
  background-color: white !important;
  border-left: 0.3rem solid #2b51a1 !important;
  border-radius: 0.5em !important;
}

.cardsLa {
  background-color: white !important;
  border-left: 0.3rem solid #1cc88a !important;
  border-radius: 0.5em !important;
}

.cardsRb {
  background-color: white !important;
  border-left: 0.3rem solid #2b51a1 !important;
  border-radius: 0.5em !important;
}

.cardsVc {
  background-color: white !important;
  border-left: 0.3rem solid #2b51a1 !important;
  border-radius: 0.5em !important;
}

.cardsFinancas {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
}

#containerContas {
  margin-left: 35px;
}
</style>