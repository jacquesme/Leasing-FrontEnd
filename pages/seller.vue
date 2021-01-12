<template>
  <div>
    <Mysuggestion />
    <div class="flex flex-wrap md:flex-no-wrap mx-10 mt-16 m-auto">
      <div class="md:w-1/6">
        <Mycatogory />
      </div>
      <div class="flex flex-row flex-wrap">
        <Productcard
          class="sm:w-full md:w-1/2 lg:w-1/3"
          v-for="(mainitem, key) in mainitems"
          :key="key"
          :mainitem="mainitem"
        />
        <div class="w-full">
          <div class="flex justify-center mx-10 mt-10 mb-16">
            <Pagination />
          </div>
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
