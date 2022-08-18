<template>
  <div>
    <Mysuggestion />
    <div class="grid grid-cols-1 md:grid-cols-5 p-8">
      <div class="col-span-1 md:w-1/6">
        <Mycatogory />
      </div>
      <div class="col-span-4">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 md:col-span-4 gap-4 w-full">
          <Productcard
            class="sm:w-full md:w-1/2 lg:w-1/3"
            v-for="(mainitem, key) in mainitems"
            :key="key"
            :mainitem="mainitem"
          />
        </div>
        <div class="flex items-center justify-center mt-10 mb-10">
          <Pagination/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mysuggestion from "~/components/MySuggestions";
import Mycatogory from "~/components/Category";
import Productcard from "~/components/GoodsCard";
import Mainitems from "~/assets/data/main-items";
import Pagination from "~/components/Pagination";
export default {
  components: { Mysuggestion, Mycatogory, Productcard, Pagination },
  name: "seller",
  data() {
    return {
      mainitems: Mainitems,
    };
  },
};
</script>

<style scoped></style>
