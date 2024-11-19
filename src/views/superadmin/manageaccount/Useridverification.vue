<template>
  <div>
    <a
      class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
      href="javascript:void(0)"
    >
      Manage Account / User ID Verification
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
    <Usertable :useritems="itemlist" @view-id="viewID"/>

  </div>
</template>
<script>

import Usertable from "@/components/Subastanauan/Dashboard/Superadmin/Useridtable.vue";

export default {
  name: "manage-account-financer-page",
  data() {
    return {
      itemlistpagination: {
        page: 0,
        limit: 10,
        totalpages: 0
      },
      namesearch: "",
      itemlistloading: false,
      itemlist: []
    }
  },
  components: {
    Usertable,
  },
  methods: {
    viewID(data){
      window.open(`${process.env.VUE_APP_API_URL}/${data}`, '_blank')
    },
    async GetUserID(){
      this.itemlistloading = true

      const response = await fetch(`${process.env.VUE_APP_API_URL}/users/listuserid?namesearch=${this.namesearch}&page=${this.itemlistpagination.page}&limit=10`, {
          method: 'GET',
          headers: {
          "Content-Type": "application/json"
          },
          credentials: "include"
      });

      const responseData = await response.json();

      if (response.status === 400) {
          //  API HERE
          this.$swal({
          title: responseData.data,
          icon: "error"
          })

          this.itemlistloading = false
          return;
      }

      this.itemlist = responseData.data.list
      this.itemlistpagination.totalpage = responseData.data.totalpages <= 0 ? 1 : responseData.data.totalpages

      if (this.itemlistpagination.totalpage - 1 < this.itemlistpagination.page){
          this.itemlistpagination.page -= 1
          this.GetUserID();
          return;
      }

      this.itemlistloading = false
    }
  },
  mounted() {
    this.GetUserID()
  }
};
</script>