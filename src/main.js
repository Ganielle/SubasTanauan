import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueGoogleMaps from '@fawmi/vue-google-maps';

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";
import { vfmPlugin } from 'vue-final-modal'

// #region LAYOUTS

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Auth from "@/layouts/Auth.vue";

import Admin from "@/layouts/Admin.vue";
import User from '@/layouts/User.vue'

//  #endregion

//  #region SUPERADMIN

import Dashboard from "@/views/superadmin/Dashboard.vue";

import ManageaccountAdmin from '@/views/superadmin/manageaccount/Admin.vue'
import ManageaccountFinancer from '@/views/superadmin/manageaccount/Financer.vue'
import ManageaccountCustomerSupport from '@/views/superadmin/manageaccount/Customersupport.vue'
import ManageaccountUser from '@/views/superadmin/manageaccount/User.vue'
import Manageuseridverification from '@/views/superadmin/manageaccount/Useridverification.vue'

import Inventorystore from '@/views/superadmin/inventory/Store.vue'
import InventoryItem from '@/views/superadmin/inventory/Items.vue'

import Livebidding from '@/views/superadmin/livebidding/Livebidding.vue'
import Livebiddingcontrol from '@/views/superadmin/livebidding/Livebiddingcontrol.vue'

import Announcement from '@/views/superadmin/announcement/announcement.vue'

import Load from '@/views/superadmin/load/Load.vue'

//  #endregion

//  #region USER

import Userdashboard from '@/views/user/Dashboard.vue'
import Usermarketplace from '@/views/user/marketplace.vue'
import Userstore from '@/views/user/Store.vue'
import Userlivebidding from '@/views/user/Livebidding.vue'

//  #endregion

const routes = [
  {
    path: "/superadmin",
    redirect: "/superadmin/dashboard",
    component: Admin,
    children: [
      {
        path: "/superadmin/dashboard",
        component: Dashboard,
      },
      {
        path: "/superadmin/manageuser/admin",
        component: ManageaccountAdmin,
      },
      {
        path: "/superadmin/manageuser/financer",
        component: ManageaccountFinancer
      },
      {
        path: "/superadmin/manageuser/customersupport",
        component: ManageaccountCustomerSupport
      },
      {
        path: "/superadmin/manageuser/user",
        component: ManageaccountUser
      },
      {
        path: "/superadmin/manageuser/useridverification",
        component: Manageuseridverification
      },
      {
        path: "/superadmin/inventory/store",
        component: Inventorystore
      },
      {
        path: "/superadmin/inventory/items",
        component: InventoryItem
      },
      {
        path: "/superadmin/livebidding",
        component: Livebidding
      },
      {
        path: "/superadmin/livebidding/controls",
        component: Livebiddingcontrol
      },
      {
        path: "/superadmin/announcement",
        component: Announcement
      },
      {
        path: "/superadmin/load",
        component: Load
      }
    ],
  },
  {
    path: "/user",
    redirect: "/user/dashboard",
    component: User,
    children: [
      {
        path: "/user/dashboard",
        component: Userdashboard,
      },
      {
        path: "/user/marketplace",
        component: Usermarketplace
      },
      {
        path: "/user/store",
        component: Userstore
      },
      {
        path: "/user/livebidding",
        component: Userlivebidding
      }
    ]
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

createApp(App).use(router).use(vfmPlugin).use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDuoNto3I8FpZ1b1wwA0CiZsGjxAEirR8',
  },
}).use(VueSweetalert2).mount("#app");
