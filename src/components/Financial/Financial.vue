<template>
  <div id="containerGeral">
    <div id="containerGeralFinanceiro">
      <div id="containerFinanceiro">
        <div class="cabecalho">
          <div class="titulo">
            <h3 class="mt-4 mb-4">Dashboard</h3>
          </div>
          <div class="containerCards">
            <div class="cardsFinancas col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="col-sm-2">
                <b-card
                  text-variant="dark"
                  sub-title="LUCRO (MENSAIS)"
                  class="cardsLm"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-2">
                <b-card
                  text-variant="dark"
                  sub-title="LUCRO (ANUAL)"
                  class="cardsLa"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-2">
                <b-card
                  text-variant="dark"
                  sub-title="RECEBER (MENSAIS)"
                  class="cardsRb"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>

              <div class="col-sm-2">
                <b-card
                  text-variant="dark"
                  sub-title="VENCER (MENSAIS)"
                  class="cardsVc"
                >
                  <b-card-text class="cardText"> R$2.000,00 </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <div
          id="containerContas"
          class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5"
        >
          <div
            class="containerCardsContas col-sm-12 col-md-12 col-lg-12 col-xl-12"
          >
            <b-card no-body class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <b-tabs card>
                <b-tab title="Cadastro de contas a receber / Pagar">
                  <div class="cardReceberPagar"><CadastroReceberPagar /></div>
                </b-tab>
                <b-tab title="Relatórios"> </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import CadastroReceberPagar from "../Financial/Cadastro-Receber-Pagar.vue";
export default {
  components: {
    CadastroReceberPagar,
  },
};
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

#dadosVendaStyle {
  border: none !important;
}

.titulo {
  width: 100%;
}

.titulo h3 {
  margin-left: 35px;
}

.cabecalho {
  width: 100%;
  height: auto;
  color: white;
}

.cardReceberPagar {
  height: 300px !important;
}

.cardsLm {
  background-color: white !important;
  border-left: 0.3rem solid #2b51a1 !important;
  border-radius: 0.5em !important;
}

.cardsLa {
  background-color: white !important;
  border-left: 0.3rem solid #2b51a1 !important;

  border-radius: 0.5em !important;
}

.cardsRb {
  background-color: white !important;
  border-left: 0.3rem solid #1cc88a !important;
  border-radius: 0.5em !important;
}

.cardsVc {
  background-color: white !important;
  border-left: 0.3rem solid #df1818 !important;
  border-radius: 0.5em !important;
}

.cardsFinancas {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
}

.containerFinanceiro {
  justify-content: end !important;
}

#containerContas {
  width: 100%;
  height: auto;
}
</style>