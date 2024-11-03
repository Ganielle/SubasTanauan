<template>
  <div>
    <a
      class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
      href="javascript:void(0)"
    >
      Manage Account / Customer Support
    </a>
    <hr class="my-4 md:min-w-full" />
    <br/>
    <!-- Header -->
    <div>
      <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
        <input type="text" placeholder="Search Customer support" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
        
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Clear Search
        </button>
      </div>
    </div>
    <br/>
    <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleCreateUser()">
      Create User
    </button>
    <br/><br/><br/>
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
      <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <i class="fas fa-chevron-left"></i>
      </button>

      <p style="font-size: 1.4rem; font-weight: bold;">1</p>

      <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <br/><br/>
    <Usertable @edit-user="toggleEditUser()" @delete-user="toggleDeleteUser()"/>

    <!--#region CREATE ACCOUNT-->
    <div>
      <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
        <button class="modal__close" @click="toggleCreateUser()">
          <mdi-close></mdi-close>
        </button>
        <span class="modal__title">Create User Account</span>
        <br/>
        <div class="modal__content">
          <p>Username:</p>
          <input type="text" placeholder="Enter username" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>Password:</p>
          <input type="password" placeholder="Enter password" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>First Name:</p>
          <input type="text" placeholder="Enter first name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>Last Name:</p>
          <input type="text" placeholder="Enter last name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/><br/>
        </div>
        <div class="modal__action">
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleCreateUser()">
            Cancel
          </button>
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleCreateUser()">
            Create
          </button>
        </div>
      </vue-final-modal>
    </div>

    <!--#region EDIT ACCOUNT-->
    <div>
      <vue-final-modal v-model="showModalEdit" classes="modal-container" content-class="modal-content">
        <button class="modal__close" @click="toggleEditUser()">
          <mdi-close></mdi-close>
        </button>
        <span class="modal__title">Edit User Account</span>
        <br/>
        <div class="modal__content">
          <p>Username:</p>
          <input type="text" placeholder="Enter username" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>Password:</p>
          <input type="password" placeholder="Enter password" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>First Name:</p>
          <input type="text" placeholder="Enter first name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/>
          <p>Last Name:</p>
          <input type="text" placeholder="Enter last name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
          <br/><br/>
        </div>
        <div class="modal__action">
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleEditUser()">
            Cancel
          </button>
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleEditUser()">
            Create
          </button>
        </div>
      </vue-final-modal>
    </div>
  </div>
</template>
<script>

import Usertable from "@/components/Subastanauan/Dashboard/Superadmin/Usertable.vue";

export default {
  name: "manage-account-financer-page",
  data() {
    return {
      showModal: false,
      showModalEdit: false
    }
  },
  components: {
    Usertable,
  },
  methods: {
    toggleCreateUser(){
      this.showModal = !this.showModal
    },
    toggleEditUser(){
      this.showModalEdit = !this.showModalEdit
    },
    toggleDeleteUser(){
      this.$swal({
        title: "Are you sure you want to delete this user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(() => {

      })
    }
  }
};
</script>