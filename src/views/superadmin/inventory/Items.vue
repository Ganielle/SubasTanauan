<template>
    <div>
        <a
        class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
        href="javascript:void(0)"
        >
            Inventory / Items
        </a>
        <hr class="my-4 md:min-w-full" />
        <br/>

        <div>
            <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
                <input type="text" placeholder="Search Items Request" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
                
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
        <Itemrequesttable @approve-item="toggleApproveItem()" @denied-item="toggleDeniedItem()"/>
        <br/>
        <hr class="my-4 md:min-w-full" />
        <br/>
        <div>
            <div class="mb-3 pt-0" style="display: flex; gap: 10px;">
                <input type="text" placeholder="Search Items" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
                
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
        <Itemlisttable  @delete-item                                                    ="toggleDeleteItem()"/> <!--@edit-store="toggleApproveStore()"-->
        <br/><br/>
        <br/><br/>
    </div>
</template>

<script>
import Itemrequesttable from "@/components/Subastanauan/Dashboard/Superadmin/Inventory/Itemrequesttable.vue";
import Itemlisttable from "@/components/Subastanauan/Dashboard/Superadmin/Inventory/Itemlisttable.vue";
export default {
    name: "inventory-store-page",
    components: {
        Itemrequesttable,
        Itemlisttable
    },
    methods: {
        toggleApproveItem(){
            this.$swal({
                title: "Are you sure you want to approve this item?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, approve it!"
            }).then(() => {

            })
        },
        toggleDeniedItem(){
            this.$swal({
                title: "Are you sure you want to denied this item?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, denied it!"
            }).then(() => {

            })
        },
        toggleDeleteItem(){
            this.$swal({
                title: "Are you sure you want to delete this item?",
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