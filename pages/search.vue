<template>
  <div>
    <mySearch />

    <div class="flex flex-wrap md:flex-no-wrap mx-4 md:mx-10 mt-16 m-auto">
      <div class="md:w-1/6">
        <searchCategory />
        <myPrice />
      </div>
      <div class="flex flex-row flex-wrap">
        <ProductCard
          class="sm:w-full md:w-1/2 lg:w-1/3"
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
import mySearch from "~/components/Search";
import searchCategory from "~/components/SearchCategory";
import ProductCard from "~/components/GoodsCard";
import mainItems from "@/assets/data/main-items.json";
import myPrice from "~/components/Price";

export default {
  components: { mySearch, searchCategory, ProductCard, myPrice },
  name: "search",
  data() {
    return {
      mainitems: mainItems,
    };
  },
};
</script>

<style scoped></style>
