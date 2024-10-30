<template>
  <div>
    <a
      class="text-black text-xl uppercase lg:inline-block font-semibold pt-12"
      href="javascript:void(0)"
    >
      Admin Dashboard
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
                statSubtitle="TOTAL INCOME"
                statTitle="₱0.00"
                statIconName="fas fa-wallet"
                statIconColor="bg-emerald-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="BIDDING INCOME"
                statTitle="₱0.00"
                statIconName="fas fa-wallet"
                statIconColor="bg-red-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="LOAN INCOME"
                statTitle="₱0.00"
                statIconName="fas fa-wallet"
                statIconColor="bg-pink-500"
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

        <!--#region USERS-->
        <div>
          <p class="text-lg font-semibold">USERS</p>
          <hr style="border-color: black;">
          <br/>

          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL USERS"
                statTitle="0"
                statIconName="fas fa-user"
                statIconColor="bg-orange-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="USER"
                statTitle="0"
                statIconName="fas fa-user"
                statIconColor="bg-emerald-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="ADMIN"
                statTitle="0"
                statIconName="fas fa-user"
                statIconColor="bg-red-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="FINANCERS"
                statTitle="0"
                statIconName="fas fa-user"
                statIconColor="bg-yellow-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="CUSTOMER SUPPORT"
                statTitle="0"
                statIconName="fas fa-user"
                statIconColor="bg-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardStats from "@/components/Cards/CardStats.vue";
export default {
  name: "dashboard-page",
  components: {
    CardStats,
  },
};
</script>
