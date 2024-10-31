import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";
import { vfmPlugin } from 'vue-final-modal'
// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/superadmin/Dashboard.vue";
import ManageaccountAdmin from '@/views/superadmin/manageaccount/Admin.vue'

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/manageuser/admin",
        component: ManageaccountAdmin,
      },
    ],
  },
  {
    path: "/",
    redirect: "/login",
    component: Auth,
    children: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(vfmPlugin).use(VueSweetalert2).mount("#app");
