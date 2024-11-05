<template>
  <div>
    <a
      class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
      href="javascript:void(0)"
    >
      User Dashboard
    </a>
    <!-- Header -->
    <div class="relative pb-20 pt-8">
      <div class="px-4 md:px-10 mx-auto w-full">
        
        <!--#region WALLETS-->
        <div>
          <p class="text-lg font-semibold">WALLETS</p>
          <hr style="border-color: black;">
          <br/>
          <!-- Card stats -->
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL CREDITS"
                :statTitle="`₱${wallets.credits.amount}`"
                :loading="walletloading"
                statIconName="fas fa-wallet"
                statIconColor="bg-emerald-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL LOAN"
                :statTitle="`₱${wallets.loan.amount}`"
                :loading="walletloading"
                statIconName="fas fa-wallet"
                statIconColor="bg-red-500"
              />
            </div>
          </div>
        </div>
        <br/><br/>

        <!--#region LOANS-->
        <div>
          <p class="text-lg font-semibold">LOANS</p>
          <hr style="border-color: black;">
          <br/>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL ACTIVE LOAN"
                statTitle="₱0.00"
                statIconName="fas fa-hand-holding-dollar"
                statIconColor="bg-orange-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL FINISHED LOAN"
                statTitle="₱0.00"
                statIconName="fas fa-hand-holding-dollar"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>
        </div>
        <br/><br/>
        
      </div>
    </div>
  </div>
</template>
<script>
import CardStats from "@/components/Cards/CardStats.vue";
export default {
  name: "user-dashboard-page",
  components: {
    CardStats,
  },
  data() {
    return {
      wallets: {
        credits: {
          amount: 0
        },
        loan: {
          amount: 0
        }
      },
      walletloading: false
    }
  },
  methods: {
    async GetWallets(){
      this.walletloading = true

      const response = await fetch(`${process.env.VUE_APP_API_URL}/wallets/getwallets`, {
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

        this.walletloading = false
        return;
      }

      this.wallets = responseData.data.wallets
      this.walletloading = false
    }
  },
  mounted(){
    this.GetWallets()
  }
};
</script>
