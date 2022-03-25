<template>
  <div class="body">
    <div :class="`sidebar ${disable}`">
      <div class="logo-details" @click="sidBarExpand">
        <img :src="logo" :id="logoEmpresa" />
        <span class="logo_name" :class="sizeText" style="color: white"></span>
      </div>

      <div
        style="width: 100%; color: #fff"
        class="d-flex justify-content-center"
      >
        <span :class="nomeEmpresaText">Grupo BMS</span>
      </div>

      <ul class="nav-links">
        <li>
          <span>
            <b-button to="/clientes" :class="iconsCenter">
              <i> <b-icon-person-bounding-box></b-icon-person-bounding-box></i>
              <span :class="sizeText">Clientes</span>
            </b-button>
          </span>
        </li>

        <li>
          <b-button to="/fornecedores" :class="iconsCenter">
            <i> <b-icon-truck></b-icon-truck></i>
            <span :class="sizeText">Fornecedores</span>
          </b-button>
        </li>

        <li>
          <b-button to="/funcionarios" :class="iconsCenter">
            <i> <b-icon-person-plus-fill></b-icon-person-plus-fill></i>
            <span :class="sizeText">Funcionário</span>
          </b-button>
        </li>

        <li>
          <b-button to="/produtos" :class="iconsCenter">
            <i> <b-icon-box-seam></b-icon-box-seam></i>
            <span :class="sizeText">Produtos</span>
          </b-button>
        </li>

        <li>
          <b-button to="/vendas" :class="iconsCenter">
            <i> <b-icon-cart-check-fill></b-icon-cart-check-fill></i>
            <span :class="sizeText">Vendas</span>
          </b-button>
        </li>

        <li>
          <b-button to="/" :class="iconsCenter">
            <i> <b-icon-reply-all></b-icon-reply-all></i>
            <span :class="sizeText">NF-e / NFc-e</span>
          </b-button>
        </li>

        <li>
          <b-button to="/financeiro" :class="iconsCenter">
            <i> <b-icon-journals></b-icon-journals></i>
            <span :class="sizeText">Financeiro</span>
          </b-button>
        </li>

        <li>
          <b-button to="/caixa" :class="iconsCenter">
            <i> <b-icon-wallet-fill></b-icon-wallet-fill></i>
            <span :class="sizeText">Caixa</span>
          </b-button>
        </li>

        <li>
          <b-button to="/agenda" :class="iconsCenter">
            <i> <b-icon-pencil-fill></b-icon-pencil-fill></i>
            <span :class="sizeText">Agenda</span>
          </b-button>
        </li>

        <li>
          <b-button to="/" :class="iconsCenter">
            <i> <b-icon-gear-fill></b-icon-gear-fill></i>
            <span :class="sizeText">Configurações</span>
          </b-button>
        </li>
      </ul>

      <div class="containerBtnSair">
        <ul class="nav-links">
          <li>
            <b-button to="/" :class="iconsCenter">
              <i> <b-icon-door-open-fill></b-icon-door-open-fill></i>
              <span :class="btnSair">Sair</span>
            </b-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/LogoTeste.jpeg";
export default {
  data() {
    return {
      logo: logo,
      colapse: true,
      disable: "",
      sizeText: "link_name",
      logoEmpresa: "logoEmpresa",
      nomeEmpresaText: "nomeEmpresaText",
      iconsCenter: "btnsGerais",
      btnSair: "btnSair",
    };
  },
  methods: {
    sidBarExpand() {
      // this.colapse = !this.colapse;
      this.disable = this.disable !== "disable" ? "disable" : "";
      this.colapse = !this.colapse;
      this.sizeText = this.colapse ? "link_name" : "link_nameTwo";
      this.logoEmpresa = this.colapse ? "logoEmpresa" : "logoEmpresaTwo";
      this.nomeEmpresaText = this.colapse
        ? "nomeEmpresaText"
        : "nomeEmpresaTextTwo";
      this.iconsCenter = this.colapse ? "btnsGerais" : "btnsGeraisTwo";
      this.btnSair = this.colapse ? "btnSair" : "btnSairTwo";
      if (this.colapse) this.$store.commit("REGISTER_WIDTH", "80%");
      else this.$store.commit("REGISTER_WIDTH", "90%");
    },
  },
  computed: {
    // expandSideBar() {
    //   return `${this.colapse ? 60 : 270}px`;
    // },

    expandSideBar() {
      return "active";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

@import url("https://fonts.googleapis.com/css?family=Poppins:500,500,500");

.sidebar {
  position: fixed !important;
  z-index: 1;
  height: 100%;
  width: 270px;
  background: #0a2558;
  transition: all 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  overflow-y: overlay;
}

.disable {
  position: fixed !important;
  z-index: 1;
  height: 100%;
  width: 80px;
  background: #0a2558;
  transition: all 0.5s ease;
}

.sidebar .logo-details {
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.sidebar .logo-details i {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 80px;
  text-align: center;
}

.sidebar .logo-details .logo_name {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
}

.sidebar .nav-links li {
  width: 100%;
  list-style: none;
}

.sidebar .nav-links li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}

.sidebar .nav-links li a:hover {
  background: #081d45;
}

.sidebar .nav-links li a i {
  min-width: 80px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}

.sidebar .nav-links li a .link_name {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.4s ease;
}

.sidebar .nav-links li a .link_nameTwo {
  color: #fff;
  font-size: 0px;
  font-weight: 500;
  transition: all 0.4s ease;
}

#logoEmpresa {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: contain;
  transition: all 0.4s ease;
}

li {
  margin-top: 5px;
}

#logoEmpresaTwo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: contain;
  transition: all 0.4s ease;
}

.nomeEmpresaText {
  font-size: 28px;
  transition: all 0.4s ease;
}

.nomeEmpresaTextTwo {
  font-size: 0px;
  transition: all 0.4s ease;
}

.btnSair {
  font-size: 23px;
  transition: all 0.4s ease;
}

.btnSairTwo {
  font-size: 0px;
  transition: all 0.4s ease;
}

span {
  cursor: pointer;
}

.btnsGeraisTwo:hover {
  background: #081d45 !important;
}

.btnsGerais:hover {
  background: #081d45 !important;
}

.btnsGeraisTwo:focus {
  background-color: #dcdcdc50 !important;
  color: #0a2558 !important;
}

.btnsGerais:focus {
  background-color: #dcdcdc50 !important;
  color: #0a2558 !important;
}

.btnsGeraisTwo {
  justify-content: center !important;
  background: #0a2558 !important;
  outline: none !important;
  border: none !important;
}

.btnsGerais {
  background: #0a2558 !important;
  outline: none !important;
  border: none !important;
}
</style>