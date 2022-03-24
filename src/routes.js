import Vue from "vue";
import Router from "vue-router";
import Home from "../src/pages/Home/Page-Home.vue";
import Schedule from "../src/pages/Schedule/Page-Schedule.vue";
import Customer from "../src/pages/Customer/Page-Customer.vue";
import Supplier from "../src/pages/Supplier/Page-Supplier.vue";
import Employee from "../src/pages/Employee/Page-Employee.vue";
import Products from "../src/pages/Products/Page-Products.vue";
import Sale from "../src/pages/Sale/Page-Sale.vue";
import Financial from "../src/pages/Financial/Page-Financial.vue";
import PageSafe from "../src/pages/Safe/Page-Safe.vue";


Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Agenda",
    component: Schedule,
  },
  {
    path: "/Clientes",
    component: Customer,
  },
  {
    path: "/Fornecedores",
    component: Supplier,
  },
  {
    path: "/Funcionarios",
    component: Employee,
  },
  {
    path: "/Produtos",
    component: Products,
  },
  {
    path: "/Vendas",
    component: Sale,
  },
  {
    path: "/Financeiro",
    component: Financial,
  },
  {
    path: "/Caixa",
    component: PageSafe,
  },];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
