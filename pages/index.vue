<template>
  <div class="index-container bg-grey-400 w-full">
    <section
      class="banner-section bg-grey-300 text-center md:text-left grid md:grid-cols-2 px-16 md:pl-56 md:pr-20 py-6"
    >
      <div class="inline-block w-11/12 md:w-9/12 mt-8">
        <h1 class="font-bold text-4xl">Autolizing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet tincidunt libero. Duis.
        </p>
        <button class="btn btn-purple mt-4">Search product</button>
      </div>
      <div
        class="hidden md:inline-block md:flex md:justify-center md:items-center"
      >
        <img src="/img/audiQ5.png" alt="audiQ5" class="audi w-4/5 h-auto" />
      </div>
    </section>

    <div class="home-container md:w-full m-auto bg-white pb-20">
      <div class="px-0">
        <div class="bg-white p-8">
          <div class="main grid md:grid-cols-5 sm:grid-cols-1 md:gap-x-8">
            <div class="parent1 grid grid-cols-1 col-span-1 gap-4">
              <div class="">
                <div class="side-title flex items-center">
                  <div class="bg-accent-purple w-1 h-8"></div>
                  <h1 class="text-accent-purple font-bold ml-4">NEW</h1>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-4 w-full">
                <SideProductCard
                  v-for="(sideitem, key) in sideitems"
                  :key="key"
                  :sideitem="sideitem"
                />
              </div>
            </div>
            <div
              class="parent2 grid sm:grid-cols-1 md:grid-cols-3 md:col-span-4 gap-4 w-full"
            >
              <ProductCard
                v-for="(mainitem, key) in mainitems"
                :key="key"
                :mainitem="mainitem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutReturns />
  </div>
</template>

<script>
import ProductCard from "@/components/GoodsCard.vue";
import SideProductCard from "@/components/indexPage/SideGoodsCard.vue";
import SideItems from "@/assets/data/sidebar-items.json";
import MainItems from "@/assets/data/main-items.json";
import AboutReturns from "@/components/indexPage/AboutPayments.vue";

export default {
  components: { ProductCard, SideProductCard, AboutReturns },
  name: "homepage",
  data() {
    return {
      sideitems: SideItems,
      mainitems: MainItems,
    };
  },
  head() {
    return {
      title: "Autolizing-Home",
    };
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  min-height: calc(100vh - 164px);
}
</style>
