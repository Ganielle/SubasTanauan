<template>
    <div>
        <a
        class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
        href="javascript:void(0)"
        >
            Inventory / Store
        </a>
        <hr class="my-4 md:min-w-full" />
        <br/>

        <div>
            <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
                <input type="text" placeholder="Search Store Request" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline" @input="searchStoreRequest" v-model="requestsearch"/>
                
                <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  @click="clearSearchRequest()" :disabled="loadingapi">
                Clear Search
                </button>
            </div>
        </div>
        <br/>
        <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" :disabled="requestloading || paginationrequest.page <= 0" @click="nextPageRequest()">
                <i class="fas fa-chevron-left"></i>
            </button>

            <p style="font-size: 1.4rem; font-weight: bold;">{{ paginationrequest.page + 1 }} / {{ paginationrequest.totalpage }}</p>

            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" :disabled="requestloading || paginationrequest.page >= paginationrequest.totalpage - 1" @click="previousePageRequest()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <br/><br/>
        <Storerequesttable :storeitems="requestlist" @approve-store="toggleApproveStore" @denied-store="toggleDeniedStore"/>
        <br/>
        <hr class="my-4 md:min-w-full" />
        <br/>
        <div>
            <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
                <input type="text" placeholder="Search Store" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
                
                <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Clear Search
                </button>
            </div>
        </div>
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
        <Storelisttable  @delete-store="toggleDeleteStore()"/> <!--@edit-store="toggleApproveStore()"-->
        <br/><br/>
        <br/><br/>
    </div>
</template>

<script>
import Storerequesttable from "@/components/Subastanauan/Dashboard/Superadmin/Inventory/Storerequesttable.vue";
import Storelisttable from "@/components/Subastanauan/Dashboard/Superadmin/Inventory/Storelisttable.vue";
export default {
    name: "inventory-store-page",
    components: {
        Storerequesttable,
        Storelisttable,
    },
    data() {
        return {
            paginationrequest: {
                page: 0,
                totalpage: 1
            },
            requestlist: [],
            requestloading: false,
            requestsearch: "",
            storeid: ""
        }
    },
    methods: {
        toggleApproveStore(storedata){
            if (this.requestloading){
                return;
            }

            if (storedata){
                this.storeid = storedata
                this.$swal({
                    title: "Are you sure you want to approve this store?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, approve it!"
                }).then(() => {
                    this.approvedeniedStore("Approved")
                })
            }
        },
        toggleDeniedStore(storedata){
            if (this.requestloading){
                return;
            }

            if (storedata){
                this.storeid = storedata
                this.$swal({
                    title: "Are you sure you want to denied this store?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, denied it!"
                }).then(() => {
                    this.approvedeniedStore("Denied")
                })
            }
        },
        toggleDeleteStore(){
            this.$swal({
                title: "Are you sure you want to delete this store?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(() => {

            })
        },
        async RequestList(){
            this.requestloading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/storelist?storenamefilter=${this.requestsearch}&statusfilter=Pending&page=${this.paginationrequest.page}&limit=10`, {
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

                this.loadingapi = false
                return;
            }


            this.paginationrequest.totalpage = responseData.data.totalpages <= 0 ? 1 : responseData.data.totalpages
            
            if (this.paginationrequest.totalpage - 1 < this.paginationrequest.page){
                this.pagination.page -= 1
                this.RequestList();
                return;
            }

            this.requestlist = responseData.data.list

            this.requestloading = false
        },
        nextPageRequest(){
            this.paginationrequest.page++
            this.RequestList()
        },
        previousePageRequest(){
            this.paginationrequest.page--;
            this.RequestList()
        },
        searchStoreRequest(){
            if (this.requestloading){
                return
            }

            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                this.paginationrequest.page = 0
                this.RequestList();
            }, 500);
        },
        clearSearchRequest(){
            if (this.requestloading){
                return
            }
            this.paginationrequest.page = 0
            this.requestsearch = ""

            this.RequestList()
        },
        async approvedeniedStore(isApproved){
            if (this.storeid == ""){
                return;
            }

            this.requestloading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/approvedeclinestore`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    storeid: this.storeid,
                    status: isApproved
                })
            });

            const responseData = await response.json();

            if (response.status === 400) {
                //  API HERE
                this.$swal({
                title: responseData.data,
                icon: "error"
                })

                this.loadingapi = false
                return;
            }

            this.$swal({
                title: "Admin successfully deleted",
                icon: "success",
                allowOutsideClick: false
            }).then(() => {
                this.selecteduserid = ""
                this.RequestList()
            })
        }
    },
    mounted() {
        this.RequestList()
    }
}
</script>