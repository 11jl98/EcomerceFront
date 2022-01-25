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
          <b-tabs card>
            <b-tab title="Cadastro de contas a receber / Pagar">
              <b-card-text>
                <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <b-navbar toggleable class="cardDadosVendas">
                    <b-navbar-toggle
                      target="navbar-toggle-collapse3"
                      id="dadosVendaStyle"
                      class="tamanhoCards"
                    >
                      <template #default="{ expanded }">
                        <div class="tamanhoBotaoOpenCard">
                          <div>
                            <b-icon
                              v-if="expanded"
                              icon="dash-square-fill"
                              variant="info"
                            ></b-icon>
                            <b-icon
                              v-else
                              icon="plus-square-fill"
                              variant="info"
                            ></b-icon>
                          </div>
                          <div style="margin-left: 10px">Contas a Receber</div>
                        </div>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse3" is-nav>
                      <b-navbar-nav class="ml-auto">
                        <b-card
                          class="
                            mt-2
                            col-md-12 col-sm-12 col-lg-12 col-xl-12
                            cardDadosVendasBorda
                          "
                        >
                          <b-card-text>
                            <h3>3Bilhaum</h3>
                          </b-card-text>
                        </b-card>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
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

#dadosVendaStyle {
  border: none !important;
}

.titulo {
  width: 100%;
}

.titulo h3 {
  display: flex;
  margin-left: 35px;
}

.cardDadosVendasBorda {
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
}

.tamanhoCards {
  width: 100%;
  display: flex;
}

.tamanhoBotaoOpenCard {
  color: black;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
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