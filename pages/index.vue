<template>
  <div class="bg-grey-400 w-full">
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

    <div class="home-container md:max-w-300 m-auto bg-white">
      <div class="px-0">
        <div class="bg-white pt-8 px-4">
          <div
            class="main flex flex-wrap md:ml-4 md:flex-no-wrap flex-col-reverse md:flex-row"
          >
            <div class="parent1 flex flex-col flex-no-wrap">
              <div class="side-title flex mb-4">
                <div class="bg-accent-purple w-1 h-8"></div>
                <h1 class="text-accent-purple font-bold ml-4">NEW LISTINGS</h1>
              </div>

              <SideProductCard
                v-for="(sideitem, key) in sideitems"
                :key="key"
                :sideitem="sideitem"
              />
            </div>
            <div class="parent2 flex flex-row flex-wrap md:mt-12">
              <ProductCard
                class="sm:w-full md:w-1/2 lg:w-1/3"
                v-for="(mainitem, key) in mainitems"
                :key="key"
                :mainitem="mainitem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/GoodsCard.vue";
import SideProductCard from "@/components/SideGoodsCard.vue";
import sideItems from "@/assets/data/sidebar-items.json";
import mainItems from "@/assets/data/main-items.json";

export default {
  components: { ProductCard, SideProductCard },
  name: "homepage",
  data() {
    return {
      sideitems: sideItems,
      mainitems: mainItems,
    };
  },
  head() {
    return {
      title: "Autolizing-Home",
    };
  },
};
</script>

<style lang="scss" scoped></style>
