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
import Safe from "../src/pages/Safe/Page-Safe.vue";
import Purchase from "../src/pages/Purchase/Page-Purchase.vue"


Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/agenda",
    component: Schedule,
  },
  {
    path: "/clientes",
    component: Customer,
  },
  {
    path: "/fornecedores",
    component: Supplier,
  },
  {
    path: "/funcionarios",
    component: Employee,
  },
  {
    path: "/produtos",
    component: Products,
  },
  {
    path: "/vendas",
    component: Sale,
  },
  {
    path: "/financeiro",
    component: Financial,
  },
  {
    path: "/caixa",
    component: Safe,
    
  },
  {
    path: "/compras",
    component: Purchase,
    Purchase
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
