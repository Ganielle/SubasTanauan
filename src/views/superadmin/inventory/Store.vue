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
        <Storelisttable :storeitems="storelist" /> <!--@view-store-details=""-->
        <br/><br/>
        <br/><br/>

        <!--#region EDIT ACCOUNT-->
        <div>
            <vue-final-modal v-model="detailsModal" classes="modal-container" content-class="modal-content">
                <button class="modal__close" @click="toggleEditUser()">
                <mdi-close></mdi-close>
                </button>
                <span class="modal__title">Edit Admin Account</span>
                <br/>
                <div class="modal__content">
                <p>Username:</p>
                <input type="text" placeholder="Enter username" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="editUserdetails.username"/>
                <br/>
                <p>Password:</p>
                <input type="password" placeholder="Enter password" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="editUserdetails.password"/>
                <br/>
                <p>First Name:</p>
                <input type="text" placeholder="Enter first name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="editUserdetails.firstname"/>
                <br/>
                <p>Last Name:</p>
                <input type="text" placeholder="Enter last name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="editUserdetails.lastname"/>
                <br/><br/>
                </div>
                <div class="modal__action">
                <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleEditUser()" :disabled="loadingapi">
                    <center v-if="loadingapi">
                    <i class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                    </center>
                    <p v-else>Cancel</p>
                </button>
                <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="editUser()" :disabled="loadingapi">
                    <center v-if="loadingapi">
                    <i class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                    </center>
                    <p v-else>Edit</p>
                </button>
                </div>
            </vue-final-modal>
        </div>
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
            //  #region STORE REQUEST
            paginationrequest: {
                page: 0,
                totalpage: 1
            },
            requestlist: [],
            requestloading: false,
            requestsearch: "",
            debounceTimeoutRequest: null,
            //  #endregion

            //  #region STORE LIST
            paginationlist: {
                page: 0,
                totalpage: 1
            },
            listloading: false,
            storelist: [],
            storesearch: "",
            debounceTimeoutList: null,
            //  #endregion

            //  #region MODAL

            detailsModal: false,
            detailsLoading: false,
            detailsid: "",
            detailsdata: {
                storename: "",
                ownername: "",
                ownercontactnumber: "",
                address: "",
                verifiedemail: "",
                verifiedbyid: "", 
                storecontactnumber: "",
                owneremail: ""
            },

            //  #endregion

            storeid: ""
        }
    },
    methods: {
        //  #region STORE REQUEST
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

            clearTimeout(this.debounceTimeoutRequest);
            this.debounceTimeoutRequest = setTimeout(() => {
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
        },
        //  #endregion

        //  #region STORE LIST
        async StoreList(){
            this.listloading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/storelist?storenamefilter=${this.storesearch}&statusfilter=Approved&page=${this.paginationlist.page}&limit=10`, {
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

            this.storelist = responseData.data.list

            this.listloading = false
        },
        searchStoreList(){
            if (this.listloading){
                return
            }

            clearTimeout(this.debounceTimeoutList);
            this.debounceTimeoutList = setTimeout(() => {
                this.paginationlist.page = 0
                this.StoreList();
            }, 500);
        },
        clearSearchList(){
            if (this.listloading){
                return
            }
            this.paginationlist.page = 0
            this.storesearch = ""

            this.RequestList()
        },
        nextPageList(){
            this.paginationlist.page++
            this.StoreList()
        },
        previousePageList(){
            this.paginationlist.page--;
            this.StoreList()
        },
        //  #endregion

        //  #region STORE DETAILS

        toggleStoreDetails(storedata){
            if (this.detailsLoading){
                return;
            }

            if (storedata){
                this.detailsid = storedata
                this.getStoreDetails()
            }

            this.detailsModal = !this.detailsModal
        },
        async getStoreDetails(){
            this.detailsLoading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/getstoredetails?storeid=${this.detailsid}`, {
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

                this.detailsLoading = false
                return;
            }

            this.detailsdata = responseData.data
            this.detailsLoading = false
        }

        //  #endregion
    },
    mounted() {
        this.RequestList()
        this.StoreList()
    }
}
</script>