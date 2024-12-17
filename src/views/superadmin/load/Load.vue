<template>
    <div>
        <a
        class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
        href="javascript:void(0)"
        >
            Load (Cash-in)
        </a>
        <hr class="my-4 md:min-w-full" />
        <br/>
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
        <Loadtable />
    </div>
</template>

<script>

import Loadtable from '@/components/Subastanauan/Dashboard/Superadmin/load/Loadtable.vue'

export default {
    components: {
        Loadtable
    },
    data(){
        return {
            //  #region REQUEST LIST

            requestloading: false,
            requestpagination: {
                page: 0,
                limit: 10,
                totalpage: 1
            },
            requestlist: []

            //  #endregion
        }
    },
    methods: {
        async LoadRequestList(){
            this.requestloading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/getownedstoredetails?storeid=${this.storeid}`, {
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

                this.requestloading = false
                return;
            }
            else if (response.status == 401){
                this.$swal({
                title: "Authentication Failed! You will now be redirected to the login page",
                icon: "error"
                })

                this.$router.push({path: "/"})
            }

            this.requestlist = responseData.data.list
            this.requestloading = false
        }
    },
    mounted() {
        this.LoadRequestList()
    }
}

</script>