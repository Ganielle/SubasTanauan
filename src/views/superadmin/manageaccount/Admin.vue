<template>
  <div>
    <a
      class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
      href="javascript:void(0)"
    >
      Manage Account / Admin
    </a>
    <hr class="my-4 md:min-w-full" />
    <br/>
    <!-- Header -->
    <div>
      <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
        <input type="text" placeholder="Search admin" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
        
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Clear Search
        </button>
      </div>
    </div>
    <br/>
    <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleCreateAdmin()">
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
    <AdminTable />
  </div>
</template>
<script>
import AdminTable from "@/components/Subastanauan/Dashboard/Superadmin/Admintable.vue";

export default {
  name: "manage-account-admin-page",
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    AdminTable
  },
  methods: {
    toggleCreateAdmin(){
      console.log("hello")
      this.showModal = !this.showModal
    }
  }
};
</script>
