<template>
  <div>
    <mySuggestion />
    <div class="flex flex-wrap md:flex-no-wrap mx-10 mt-16">
      <div class="md:w-1/6">
        <myCatogory />
      </div>
      <div class="flex flex-row flex-wrap">
        <ProductCard
          class="sm:w-1/2 lg:w-1/3"
          v-for="(mainitem, key) in mainitems"
          :key="key"
          :mainitem="mainitem"
        />
      </div>
    </div>
    <div class="flex justify-center mx-10 mt-10 mb-16">
      <Pagination />
    </div>
  </div>
</template>

<script>
import mySuggestion from "~/components/MySuggestions";
import myCatogory from "~/components/Category";
import ProductCard from "@/components/GoodsCard.vue";
import mainItems from "@/assets/data/main-items.json";
import Pagination from "@/components/Pagination";
export default {
  components: { mySuggestion, myCatogory, ProductCard, Pagination },
  name: "seller",
  data() {
    return {
      mainitems: mainItems,
    };
  },
};
</script>

<style scoped></style>
