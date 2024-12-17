<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100" style="min-height: 100vh; max-height: 100%;">
      <div class="px-4 md:px-10 mx-auto w-full" style="padding-bottom: 20px;">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebaruser.vue";
export default {
  name: "admin-layout",
  components: {
    Sidebar,
  },
  methods: {
    async FetchAnnouncement(){
      const response = await fetch(`${process.env.VUE_APP_API_URL}/announcement/getannouncement`, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "include",
      });

      const responseData = await response.json();

      if (response.status === 400) {
        //  API HERE
        this.$swal({
        title: responseData.data,
        icon: "error"
        })

        return;
      }
      else if (response.status == 401){
        this.$swal({
          title: "Authentication Failed! You will now be redirected to the login page",
          icon: "error"
        })

        this.$router.push({path: "/"})
      }
      
      if (responseData.data.title == ''){
        return;
      }
      
      this.$swal({
        title: responseData.data.title,
        text: responseData.data.content,
        icon: "info"
      })
    }
  },
  mounted(){
    this.FetchAnnouncement()
  }
};
</script>
