<template>
    <div>
        <a
        class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
        href="javascript:void(0)"
        >
            Store
        </a>
        <hr class="my-4 md:min-w-full" />
        <br/><br/>
        <div v-if="storestatusloading">
            <center>
                <i  class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite; font-size: 3rem;"></i>
            </center>
        </div>
        <div v-else>
            <center v-if="status == 'none'">
                <p style="font-weight: bold; font-size: 2rem">To Unlock the store, <br/>You need to apply your current store.</p>
                <br/><br/>
                <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="toggleStoreApplicationForm()"
                >
                    Apply Your Store Now!
                </button>
            </center>
            <center v-else-if="status == 'Pending'">
                <p style="font-weight: bold; font-size: 2rem">Your store is currently under <br/>approval phase. Please wait for your store<br/>to be approved!</p>
            </center>
        </div>

        <!--#region CREATE ACCOUNT-->
        <div>
        <vue-final-modal v-model="openStoreApplication" classes="modal-container"  :clickToClose="false" :escToClose="false" content-class="modal-content">
            <button class="modal__close" @click="toggleStoreApplicationForm()">
            <mdi-close></mdi-close>
            </button>
            <span class="modal__title">Store Application Form</span>
            <br/>
            <div class="modal__content">
            <p>Store Name:</p>
            <input type="text" placeholder="Enter store name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="application.storename"/>
            <br/>
            <p>Store Address:</p>
            <input type="text" placeholder="Enter store address" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="application.address"/>
            <br/>
            <p>Contact Number:</p>
            <input type="number" placeholder="Enter store contact number" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-model="application.contactnumber"/>
            <br/><br/>
            </div>
            <div class="modal__action">
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleStoreApplicationForm()" :disabled="storeapplicationloading">
                <center v-if="storeapplicationloading">
                <i class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                </center>
                <p v-else>Cancel</p>
            </button>
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="storeApplication()" :disabled="storeapplicationloading">
                <center v-if="storeapplicationloading">
                <i class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                </center>
                <p v-else>Apply Now</p>
            </button>
            </div>
        </vue-final-modal>
        </div>
    </div>
</template>

<script>
export default{
    name: "user-store",
    data() {
        return{
            openStoreApplication: false,
            storestatusloading: false,
            storeapplicationloading: false,
            application: {
                storename: "",
                address: "",
                contactnumber: ""
            },
            status: "none"
        }
    },
    methods: {
        toggleStoreApplicationForm(){
            if (this.storeapplicationloading) return

            this.openStoreApplication = !this.openStoreApplication
        },
        async checkStoreStatus(){
            this.storestatusloading = true
            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/getstorestatus`, {
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

                this.storestatusloading = false
                return;
            }

            this.status = responseData.data.status
            this.storestatusloading = false
        },
        async storeApplication(){
            this.storeapplicationloading = true

            const response = await fetch(`${process.env.VUE_APP_API_URL}/store/applystore`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(this.application)
            });

            const responseData = await response.json();

            if (response.status === 400) {
                //  API HERE
                this.$swal({
                title: responseData.data,
                icon: "error"
                })

                this.storestatusloading = false
                return;
            }

            this.$swal({
                title: `Congratulations! You have applied your store!`,
                icon: "success",
            })
            .then(data => {
                if (data.isConfirmed){
                    this.storeapplicationloading = false
                    this.toggleStoreApplicationForm()
                    this.checkStoreStatus()
                }
            })
        }
    },
    mounted(){
        this.checkStoreStatus()
    }
}
</script>