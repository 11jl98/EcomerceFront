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
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <b-card
                  text-variant="dark"
                  sub-title="LUCRO (MENSAIS)"
                  class="cardsLm p-2 mt-2 heightCards"
                >
                  <div class="containerIcons">
                    <div>
                      <b-card-text> R$2.000,00</b-card-text>
                    </div>
                    <div>
                      <b-icon-graph-up
                        class="ml-5"
                        scale="1.5"
                      ></b-icon-graph-up>
                    </div>
                  </div>
                </b-card>
              </div>

              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <b-card
                  text-variant="dark"
                  sub-title="VENCER (MENSAIS)"
                  class="cardsLa p-2 mt-2 heightCards"
                >
                  <div class="containerIcons">
                    <div>
                      <b-card-text> R$2.000,00 </b-card-text>
                    </div>
                    <div>
                      <b-icon-graph-down scale="1.5"></b-icon-graph-down>
                    </div>
                  </div>
                  <div>
                    <b-card-text> Quantidade: 25</b-card-text>
                  </div>
                </b-card>
              </div>

              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <b-card
                  text-variant="dark"
                  sub-title="RECEBER (MENSAIS)"
                  class="cardsRm p-2 mt-2 heightCards"
                >
                  <div class="containerIcons">
                    <div>
                      <b-card-text> R$2.000,00 </b-card-text>
                    </div>

                    <div>
                      <b-icon-graph-down scale="1.5"></b-icon-graph-down>
                    </div>
                  </div>
                </b-card>
              </div>

              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <b-card
                  text-variant="dark"
                  sub-title="PAGAR (MENSAIS)"
                  class="cardsVm p-2 mt-2 heightCards"
                >
                  <div class="containerIcons">
                    <div>
                      <b-card-text> R$2.000,00 </b-card-text>
                    </div>

                    <div>
                      <b-icon-graph-down scale="1.5"></b-icon-graph-down>
                    </div>
                  </div>
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
              <b-tabs v-model="tabIndex" card>
                <b-tab title="Cadastro de contas a receber / Pagar">
                  <div class="dadosContasReceberPagar">
                    <div class="cardReceber">
                      <CadastroContasReceber
                        :dataBillReceiveById="dataBillByIdReceive"
                      />
                    </div>
                    <div class="cardPagar">
                      <CadastroContasPagar
                        @dataBillById="dataBillByIdPayable = $event"
                      />
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Relatórios"> </b-tab>
                <b-tab title="Pesquisa"
                  ><Search
                    @tabIndexFunction="tabIndex = $event"
                    @dataBillById="dataBillByIdReceive = $event"
                  />
                </b-tab>
                <b-tab title="Realizar baixas"> </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CadastroContasReceber from "./Cadastro-Contas-Receber.vue";
import CadastroContasPagar from "./Cadastro-Contas-Pagar.vue";
import Search from "./Search.vue";

export default {
  components: {
    CadastroContasReceber,
    CadastroContasPagar,
    Search,
  },

  data() {
    return {
      tabIndex: 2,
      dataBillByIdReceive: {},
      dataBillByIdPayable: [],
    };
  },
};
</script>

<style>
#containerGeralFinanceiro {
  width: 100%;
}

#dadosVendaStyle {
  border: none !important;
}

.titulo {
  width: 100%;
}

.heightCards {
  height: 110px;
}

.dadosContasReceberPagar {
  width: 100% !important;
  display: flex;
}

.containerIcons {
  display: flex !important;
  width: 100% !important;
  justify-content: space-between;
}

.cardReceber {
  width: 50% !important;
}

.cardPagar {
  width: 50% !important;
  margin-left: 15px;
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
  height: auto !important;
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

.cardsRm {
  background-color: white !important;
  border-left: 0.3rem solid #1cc88a !important;
  border-radius: 0.5em !important;
}

.cardsVm {
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



#containerContas {
  width: 100%;
  height: auto;
}
</style>
