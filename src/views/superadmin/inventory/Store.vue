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
                <input type="text" placeholder="Search Store Request" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
                
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
        <Storerequesttable @approve-store="toggleApproveStore()" @denied-store="toggleDeniedStore()"/>
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
        Storelisttable
    },
    methods: {
        toggleApproveStore(){
            this.$swal({
                title: "Are you sure you want to approve this store?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, approve it!"
            }).then(() => {

            })
        },
        toggleDeniedStore(){
            this.$swal({
                title: "Are you sure you want to denied this store?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, denied it!"
            }).then(() => {

            })
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
        }
    }
}
</script>