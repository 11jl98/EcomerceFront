<template>
  <div class="containerGeralNfe">
    <b-row
      class="conteudoBotaoEmail mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    >
      <div>
        <b-form-group style="width: 155px">
          <b-button variant="info" size="sm" @click="sendNfeByEmail"
            >Envio de E-mail</b-button
          >
        </b-form-group>
      </div>

      <div class="additionalButtonContent d-flex justify-content-end">
        <div style="width: 155px !important">
          <b-button
            style="
              border: none !important;
              background-color: #56aafe !important;
              padding: 4px 8px 4px 8px;
            "
            size="sm"
            @click="openModalTaxInformation"
            >Infor. Fiscal <b-icon-stickies class="ml-1"></b-icon-stickies
          ></b-button>
        </div>

        <div class="containerCheckBox ml-2">
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-checkbox
              :aria-describedby="ariaDescribedby"
              value="0"
              unchecked-value="1"
              class="chkSaidaEntrada"
              v-model="dadosNfe.operacao"
              size="sm"
              switch
            >
              <div style="width: 90px">
                {{ textoTipoEmissao }}
              </div>
            </b-form-checkbox>
          </b-form-group>
        </div>
      </div>
    </b-row>

    <b-row
      class="
        col-sm-12 col-md-12 col-lg-12 col-xl-12
        d-flex
        mt-3
        contentDataNfeRow
      "
    >
      <b-form-group hidden>
        <b-form-input
          hidden
          type="text"
          size="sm"
          v-model="dadosNfe.id"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Cliente"
        label-for="input-1"
        class="col-sm-7 col-md-6 col-lg-6 col-xl-4"
        size="sm"
      >
        <b-form-select
          size="sm"
          v-model="dadosNfe.idCliente"
          :options="cliente"
          value-field="id"
          text-field="nome"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Data NF-e"
        label-for="input-1"
        class="col-sm-5 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-input
          text-field="nome"
          v-model="dadosNfe.data_nfe"
          type="date"
          size="sm"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Natureza operação"
        label-for="input-1"
        class="col-sm-7 col-md-5 col-lg-5 col-xl-4"
        size="sm"
      >
        <b-form-input
          v-model="dadosNfe.natureza_operacao"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Finalidade NFe"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        size="sm"
      >
        <b-form-select
          size="sm"
          value-field="value"
          text-field="text"
          v-model="dadosNfe.finalidade"
          :options="finalidade"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Nº NFe"
        label-for="input-1"
        class="col-sm-3 col-md-2 col-lg-2 col-xl-2"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.nfe"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Serie"
        label-for="input-1"
        class="col-sm-3 col-md-2 col-lg-2 col-xl-1"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.serie"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Chave NFe"
        label-for="input-1"
        class="col-sm-12 col-md-6 col-lg-7 col-xl-6"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="responseNfeWebMania.chave"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Status"
        label-for="input-1"
        class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
        size="sm"
      >
        <b-form-input
          disabled
          v-model="dadosNfe.status"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Chave de Referência"
        label-for="input-1"
        class="col-sm-6 col-md-6 col-lg-6 col-xl-6"
        size="sm"
        v-if="dadosNfe.finalidade == '4'"
      >
        <b-form-input
          v-model="dadosNfe.nfe_referenciada"
          type="text"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="REF Fiscal"
        class="col-sm-6 col-md-6 col-lg-6 col-xl-6"
        v-if="(dadosNfe.finalidade == '4') & (dadosNfe.operacao == '0')"
      >
        <b-form-select
          size="sm"
          value-field="ref"
          text-field="descricao"
          v-model="classeImpostoDevolucao"
          :options="allRefsFiscaisFromSelectBox"
        ></b-form-select>
      </b-form-group>
    </b-row>

    <b-card-text
      class="mt-3"
      :hidden="
        (dadosNfe.finalidade == '4') & (dadosNfe.operacao == '0') ? true : false
      "
    >
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-produtos"
            id="dadosNfeStyle"
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
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Adicionar Produto</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-produtos"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row sm="12">
                  <b-form-group
                    label="Produto"
                    class="col-sm-12 col-md-6 col-lg-8 col-xl-5"
                  >
                    <b-form-select
                      size="sm"
                      value-field="id"
                      text-field="nome"
                      v-model="produtosNotaFiscal.idProduto"
                      :options="produtos"
                      @change="assignValuesToTheSelectedProduct"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="REF Fiscal"
                    class="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                  >
                    <b-form-select
                      size="sm"
                      value-field="ref"
                      text-field="descricao"
                      v-model="produtosNotaFiscal.classe_imposto"
                      :options="allRefsFiscaisFromSelectBox"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Cod. Ref"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.codigo"
                      disabled
                    />
                  </b-form-group>

                  <b-form-group
                    label="Qnt"
                    class="col-sm-6 col-md-2 col-lg-4 col-xl-1"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.quantidade"
                      type="number"
                      @keyup="formatTotalProductValue"
                      @change="alterTotalProductValue"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Dados Adicionais"
                    class="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                  >
                    <b-form-input
                      size="sm"
                      v-model="produtosNotaFiscal.informacoes_adicionais"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Unitario"
                    class="col-sm-5 col-md-4 col-lg-2 col-xl-2"
                  >
                    <b-form-input
                      placeholder="R$ 0,00"
                      size="sm"
                      v-mask="maskMoney(produtosNotaFiscal.subtotal)"
                      @keyup="formatTotalProductValue"
                      @change="alterTotalProductValue"
                      v-model="produtosNotaFiscal.subtotal"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Desc"
                    class="col-sm-2 col-md-4 col-lg-2 col-xl-1"
                  >
                    <b-form-input
                      @change="calculateDiscountProdutos"
                      v-model="produtosNotaFiscal.desconto"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Total"
                    class="col-sm-5 col-md-4 col-lg-2 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      size="sm"
                      placeholder="R$ 0,00"
                      v-model="produtosNotaFiscal.total"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Origem"
                    class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="produtosNotaFiscal.origem"
                      :options="origem"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="und"
                    class="col-sm-6 col-md-3 col-lg-2 col-xl-2"
                  >
                    <b-form-input
                      v-model="produtosNotaFiscal.unidade"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Peso"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
                  >
                    <b-form-input
                      placeholder="Peso (KG)"
                      v-model="produtosNotaFiscal.peso"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    class="col-sm-6 col-md-4 col-lg-3 col-xl-4"
                    label="."
                    style="color: transparent !important"
                  >
                    <b-button
                      class="mr-4"
                      size="sm"
                      style="
                        border: none !important;
                        background-color: #56aafe !important;
                      "
                      @click="saveProductInNote"
                      >Adicionar
                      <b-icon-cart-check class="ml-1"></b-icon-cart-check
                    ></b-button>
                  </b-form-group>
                </b-row>

                <b-row
                  sm="12"
                  style="margin-top: 31px"
                  class="table-responsive"
                >
                  <table class="table table-sm">
                    <thead
                      style="
                        background-color: #56aafe !important;
                        color: white;
                        text-align: center;
                      "
                    >
                      <tr>
                        <th>Nome Produto</th>
                        <th>Quantidade</th>
                        <th>Vl. unitario</th>
                        <th>Vl. total</th>
                        <th>Desconto</th>
                        <th>Vl. desc</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="notaItem in produtosForTable"
                        :key="notaItem.id"
                        style="text-align: center"
                      >
                        <td>{{ notaItem.nome }}</td>
                        <td>{{ notaItem.quantidade }}</td>
                        <td>
                          {{
                            notaItem.subtotal.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          {{
                            (notaItem.quantidade * notaItem.subtotal)
                              | formatValueMonetary
                          }}
                        </td>
                        <td>
                          {{
                            notaItem.desconto.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          {{
                            notaItem.total.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })
                          }}
                        </td>
                        <td>
                          <b-button
                            size="sm"
                            variant="secondary"
                            :disabled="
                              responseNfeWebMania.status === 'aprovado' ||
                              responseNfeWebMania.status === 'processamento'
                                ? true
                                : false
                            "
                            @click="deleteProductFromNote(notaItem.id)"
                            v-b-popover.hover.right="{
                              variant: 'secondary',
                              content: 'Excluir',
                            }"
                          >
                            <b-icon-trash scale="1.3"></b-icon-trash
                          ></b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-card-text
      class="mt-3"
      :hidden="
        (dadosNfe.finalidade == '4') & (dadosNfe.operacao == '0') ? true : false
      "
    >
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-pedido"
            id="dadosNfeStyle"
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
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Dados Pedido</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-pedido"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    conteudoDadosNfe
                    d-flex
                  "
                >
                  <b-form-group
                    id="input-group-1"
                    label="Modalidade Frete"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                    size="sm"
                  >
                    <b-form-select
                      value-field="value"
                      text-field="text"
                      @change="enableFreightage"
                      size="sm"
                      v-model="dadosNfe.modalidade_frete"
                      :options="modalidade_frete"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Valor frete"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      v-mask="maskMoney(dadosNfe.frete)"
                      v-model="dadosNfe.frete"
                      @change="calculateDiscountPedido"
                      size="sm"
                      placeholder="R$ 0,00"
                    />
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Pagamento"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="dadosNfe.pagamento"
                      :options="pagamento"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Presença"
                    label-for="input-1"
                    class="col-sm-6 col-md-3 col-lg-4 col-xl-4"
                  >
                    <b-form-select
                      size="sm"
                      value-field="value"
                      text-field="text"
                      v-model="dadosNfe.presenca"
                      :options="presenca"
                    ></b-form-select>
                  </b-form-group>

                  <template v-if="exibirDadosIntermediador">
                    <b-form-group
                      id="input-group-1"
                      label="Intermediador"
                      label-for="input-1"
                      class="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                    >
                      <b-form-select
                        size="sm"
                        value-field="value"
                        text-field="text"
                        v-model="dadosNfe.intermediador"
                        :options="intermediador"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Nome intermed"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    >
                      <b-form-input
                        v-model="dadosNfe.id_intermediador"
                        size="sm"
                      />
                    </b-form-group>

                    <b-form-group
                      label="CNPJ intermed"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                    >
                      <b-form-input
                        v-model="dadosNfe.cnpj_intermediador"
                        size="sm"
                      />
                    </b-form-group>
                  </template>

                  <b-form-group
                    label="Desc"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      @change="calculateDiscountPedido"
                      @keypress="defineMaxLengthDiscount"
                      v-model="dadosNfe.desconto"
                      size="sm"
                    />
                  </b-form-group>

                  <b-form-group
                    label="Vl. Total NFe"
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  >
                    <b-form-input
                      disabled
                      placeholder="R$ 0,00"
                      v-model="dadosNfe.total"
                      size="sm"
                    />
                  </b-form-group>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-card-text class="mt-3" :hidden="isDisabled">
      <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-navbar toggleable class="cardDadosNfe">
          <b-navbar-toggle
            target="navbar-toggle-collapse-transportadora"
            id="dadosNfeStyle"
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
                  <b-icon v-else icon="plus-square-fill" variant="info">
                  </b-icon>
                </div>
                <div style="margin-left: 10px">Dados Transportadora</div>
              </div>
            </template>
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse-transportadora"
            class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
            is-nav
          >
            <b-navbar-nav class="ml-auto">
              <b-card class="mt-2 cardDadosNfeBorda">
                <b-row
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    conteudoDadosNfe
                    d-flex
                  "
                >
                  <b-form-group
                    class="col-sm-4 col-md-4 col-lg-4 col-xl-4"
                    size="sm"
                  >
                    <div class="iconCadTransportadora">
                      <div>
                        <label>Transportadora</label>
                      </div>

                      <div
                        class="btnCadTransportadora mr-1"
                        @click="openModalShippingCompany"
                      >
                        <b-icon-plus-square-fill
                          scale="1.5"
                          size="sm"
                        ></b-icon-plus-square-fill>
                      </div>
                    </div>

                    <b-form-select
                      value-field="value"
                      text-field="text"
                      size="sm"
                      v-model="dadosNfe.idTransportadora"
                      :options="transportadora"
                    ></b-form-select>
                  </b-form-group>
                </b-row>
              </b-card>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-card-text>

    <b-row
      class="mt-5 ml-0 col-sm-6 col-md-12 col-lg-12 col-xl-12"
      style="display: flex; justify-content: space-between"
    >
      <b-row style="margin-left: 0px">
        <b-form-group class="mb-0 mr-2">
          <b-button variant="info" @click="updateOrSaveNotaFiscal" size="sm"
            >Salvar NF-e</b-button
          >
        </b-form-group>

        <b-form-group class="mb-0">
          <b-button variant="info" @click="clearInputs" size="sm"
            >Novo</b-button
          >
        </b-form-group>
      </b-row>

      <b-row>
        <div v-if="spinLoading">
          <b-spinner
            style="width: 3rem; height: 3rem"
            variant="primary"
          ></b-spinner>
        </div>
      </b-row>

      <b-row style="margin-right: 0px">
        <b-form-group class="mb-0 ml-5">
          <b-button
            :disabled="handleButtonEmitirNfe"
            variant="info"
            size="sm"
            @click="handleEmitOrReturnNota"
            >Emitir NF-e
          </b-button>
        </b-form-group>

        <b-form-group
          class="mb-0 ml-2"
          v-if="
            responseNfeWebMania.status === 'aprovado' ||
            responseNfeWebMania.status === 'processamento'
          "
        >
          <b-button variant="info" size="sm" @click="visualizarNfe"
            >Visualizar NF-e</b-button
          >
        </b-form-group>

        <b-form-group class="mb-0 ml-2">
          <b-dropdown
            id="dropdown-right"
            right
            text="Ações"
            class="m-md-2"
            variant="info"
            size="sm"
            style="
              margin: 0px 0px 0px 0px !important;
              padding: 0px 0px 0px 0px !important;
            "
          >
            <b-dropdown-item
              :disabled="
                dadosNfe.status === 'Cancelada' || dadosNfe.status === ''
                  ? true
                  : false
              "
              @click="openModalCancelNota"
              >Cancelar NF-e</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              :disabled="
                responseNfeWebMania.status === 'aprovado' ||
                responseNfeWebMania.status === 'processamento' ||
                responseNfeWebMania.status === 'cancelado'
                  ? true
                  : false
              "
              >Inutilizar NF-e</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              :disabled="
                dadosNfe.status === 'Cancelada' || dadosNfe.status === ''
                  ? true
                  : false
              "
              >Carta de correção</b-dropdown-item
            >
          </b-dropdown>
        </b-form-group>
      </b-row>
    </b-row>
    <div>
      <b-modal
        id="modalReturnNota"
        size="lg"
        title="Selecione os produtos que deseja devolver!"
        centered
      >
        <template #modal-footer>
          <div
            class="
              col-sm-12 col-md-12 col-lg-12 col-xl-12
              d-flex
              justify-content-between
            "
          >
            <div>
              <b-button
                variant="info"
                :disabled="handleReturnedAmmoutAndAmmount()"
                size="sm"
                @click="sendEntryNotaDevolution"
                >Prosseguir</b-button
              >
            </div>

            <div v-if="spinLoadingDevolucao">
              <b-spinner
                style="width: 2rem; height: 2rem"
                variant="primary"
              ></b-spinner>
            </div>
          </div>
        </template>
        <b-row class="col-sm-12 tableReturnProducts">
          <table class="table table-sm">
            <thead>
              <tr style="background-color: #56aafe; color: white">
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Qnt. Devolvida</th>
                <th>Vl. und</th>
                <th>Vl. total</th>
                <th>Selecionar</th>
              </tr>
              <tr
                v-for="(products, index) in producsReferencedNotaFinal"
                :key="products.id"
              >
                <td class="tdReturnProducts">{{ products.nome }}</td>
                <td class="tdReturnProducts">{{ products.quantidade }}</td>
                <td class="tdReturnProducts">
                  <div
                    class="
                      col-sm-12 col-md-12 col-lg-12 col-xl-12
                      d-flex
                      justify-content-center
                    "
                  >
                    <b-form-input
                      size="sm"
                      type="number"
                      v-model="producsReferencedNotaFinal[index].qtdDevolvida"
                      class="col-sm-12 col-md-12 col-lg-5 col-xl-5"
                    />
                  </div>
                </td>
                <td class="tdReturnProducts">{{ products.subtotal }}</td>
                <td class="tdReturnProducts">{{ products.total }}</td>
                <td class="tdReturnProducts">
                  <b-form-checkbox
                    name="checkbox-1"
                    v-model="producsReferencedNotaFinal[index].isDevolucao"
                    size="lg"
                    @change="chekedProductsReturnNota(index)"
                    id=""
                  />
                </td>
              </tr>
            </thead>
          </table>
        </b-row>
      </b-modal>
    </div>
    <ModalShippingCompany />
    <ModalCancelNota
      :idNota="{
        uuidNotaWebMania: responseNfeWebMania.uuid,
        idNota: dadosNfe.id,
      }"
      @getNotaAfterCanceled="getNotaAfterCanceled = $event"
    />
    <ModalTaxInformation @createdNewRef="createdNewRef = $event" />
  </div>
</template>

<script>
import mixinNotaFiscal from "../../mixins/NotaFiscal/NotaFiscal";

export default {
  mixins: [mixinNotaFiscal],
};
</script>

<style scoped>
.containerGeralNfe {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.conteudoBotaoEmail {
  height: auto;
  display: flex;
  justify-content: space-between;
}

.conteudoBotaoEmail button:hover {
  background-color: #025f6b !important;
  transition: all 0.3s linear;
}

.conteudoBotaoEmail button {
  margin-left: 16px;
}

.conteudoDadosNfe {
  border-radius: 5px;
  padding: 0 !important;
  margin-top: 10px;
}

.cardDadosNfe {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  background-color: rgba(255, 255, 255, 0.788) !important;
  box-shadow: inset 0 0 0.5em rgb(255, 255, 255), 0 0 0.5em rgba(5, 5, 5, 0.171);
  padding: 0px 16px 0px 16px !important;
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
}

.cardDadosNfeBorda {
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
  /* background-color: #6a88bd !important; */
  /* color: white; */
}

.tamanhoCards {
  width: 100%;
  display: flex;
  /* background-color: #6a88bd !important; */
  /* box-shadow: 2px 2px 4px 0px black !important ; */
}

.tamanhoBotaoOpenCard {
  color: black;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  /* color: white; */
}

.chkSaidaEntrada {
  margin-top: 18px;
}

.containerCheckBox {
  display: flex;
  height: 30.1px !important;
  width: 125px !important;
  align-items: center !important;
  background-color: #e9ecef !important;
  border: solid 1px rgb(216, 215, 215);
  border-radius: 5px;
  padding-left: 15px !important;
  margin-right: 16px;
}

.iconCadTransportadora {
  display: flex;
  justify-content: space-between;
}

.btnCadTransportadora {
  cursor: pointer;
}

.tableReturnProducts {
  margin-top: 31px;
  overflow: auto !important;
  max-height: 300px;
  text-align: center;
}

.tdReturnProducts {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

#dadosNfeStyle {
  border: none !important;
}

@media screen and (max-width: 438px) {
  .contentDataNfeRow {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 388px) {
  .additionalButtonContent {
    display: flex;
    flex-direction: column;
  }
  .conteudoBotaoEmail {
    height: auto !important;
  }
}
</style>