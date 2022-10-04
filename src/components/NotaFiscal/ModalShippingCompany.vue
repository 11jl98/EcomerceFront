<template>
  <div>
    <b-modal
      id="modalShippingCompany"
      size="lg"
      title="Cadastror Transportadora"
      ok-title="Salvar"
      centered
    >
      <template #modal-footer>
        <b-button variant="info" size="sm">Salvar</b-button>
      </template>
      <b-tabs v-model="tabIndexSected" content-class="mt-3">
        <b-tab title="Cadastro" active>
          <b-row class="d-flex">
            <b-form-input hidden class="col-sm-1"></b-form-input>

            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nome"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input></b-form-input>
            </b-form-group> </b-row
        ></b-tab>
        <b-tab title="Pesquisar">
          <table class="table table-sm">
            <thead>
              <tr style="width: 100%">
                <th style="width: 50%">Tipo</th>
                <th style="width: 50%">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b-button
                    size="sm"
                    class="mr-2"
                    style="background-color: #56aafe; border: none !important"
                    v-b-popover.hover.left="{
                      variant: 'info',
                      content: 'Editar',
                    }"
                  >
                    <b-icon-check scale="2"></b-icon-check>
                  </b-button>

                  <b-button
                    size="sm"
                    variant="secondary"
                    style="border: none !important"
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
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndexSected: 0,
    };
  },
};
</script>

<style>
</style>