<template>
    <div>
        <a
        class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
        href="javascript:void(0)"
        >
            Marketplace
        </a>
        <hr class="my-4 md:min-w-full" />
        <br/><br/>
        <p style="font-weight: bold; font-size: 1.2rem;">Filters:</p>
        <br/>
        <div style="display: flex; gap: 10px;">
            <select
                  type="text"
                  class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                  v-model="criterias.pricerange"
            >
                  <option value="">Please select your price range</option>
                  <option value="10000">₱5,000 - ₱10,000</option>
                  <option value="30000">₱15,000 - ₱30,000</option>
                  <option value="100000">₱50,000 - ₱100,000</option>
            </select>
            <!---->
            <select
                type="text"
                class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                v-model="criterias.livestock"
            >
                <option value="">Please select your preferred livestock</option>
                <option value="Cattle">Cattle</option>
                <option value="Hogs">Hogs</option>
                <option value="Swine">Swine</option>
                <option value="Carabao">Carabao</option>
                <option value="Goat">Goat</option>
            </select>

            <!--@click="GoBack()"-->
            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              
            >
              Apply Filters
            </button>

            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              
            >
              Reset Filters
            </button>
        </div>
        
        <br/><br/>
        <p style="font-weight: bold; font-size: 1.3rem;">MARKETPLACE ITEMS</p>
        <br/>
        <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-chevron-left"></i>
            </button>

            <p style="font-size: 1.4rem; font-weight: bold;">1 / 1</p>

            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <br/><br/>
        <center>
            <p style="font-weight: bold; font-size: 1.5rem;">No Items Yet!</p>
        </center>
    </div>
</template>

<script>
export default{
    name: 'user-marketplace',
    data(){
        return{

            //  #region CRITERIAS

            criterias: {
                pricerange: "",
                livestock: ""
            },
            loadingcriteria: false,

            //  #endregion

            //  #region GET ITEMS

            itemlistpagination: {
                page: 0,
                totalpage: 1,
                limit: 10
            },
            itemlistloading: false,
            itemlist: []

            //  #endregion
        }
    },
    methods: {

        //  #region CRITERIAS

        async GetCriterias(){
            this.loadingcriteria = true
            const response = await fetch(`${process.env.VUE_APP_API_URL}/criteria/getcriteria`, {
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

                this.loadingcriteria = false
                return;
            }

            this.criterias = responseData.data.criterias
            console.log(this.criterias)
            this.loadingcriteria = false
        }

        //  #endregion

        //  #region GET ITEMS


        //  #endregion
    },
    mounted(){
        this.GetCriterias()
    }
}
</script>