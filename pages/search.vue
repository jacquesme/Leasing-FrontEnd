<template>
  <div>
    <Mysearch />
    <div class="grid grid-cols-1 md:grid-cols-5 p-8">
      <div class="col-span-1 md:pr-8">
        <div class="grid grid-cols-1">
          <div class="mr-8 hidden md:block">
            <Searchcategory />
            <Myprice class="mt-12" />
            <Mydropdown
              v-for="(dropdown, key) in dropdowns"
              :key="key"
              :dropdown="dropdown"
            />
            <Carmodal class="mt-24" />
          </div>
          <button
            class="btn btn-filter focus:outline-none w-full mt-12 mb-16 md:hidden"
            @click="toggleData()">
            Filters
            <Arrowicon
              class="inline-block up"
              v-bind:class="{ down: isToggled }"
            />
          </button>
          <div class="filter-option" v-bind:class="{ hidden: !isToggled }">
            <div class="mr-8">
              <Searchcategory />
              <Myprice class="mt-12" />
              <Mydropdown
                v-for="(dropdown, key) in dropdowns"
                :key="key"
                :dropdown="dropdown"
              />
              <Carmodal class="mt-24" />
            </div>
            <button
              class="btn btn-purple w-full focus:outline-none mt-12 mb-16 md:hidden">Apply filters</button>
          </div>
        </div>
      </div>
      <!--Product Cards-->
      <div class="col-span-4">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 md:col-span-4 gap-4 w-full">
          <Productcard
            class="sm:w-full md:w-1/2 lg:w-1/3"
            v-for="(mainitem, key) in mainitems"
            :key="key"
            :mainitem="mainitem"
          />
        </div>
        <div class="w-full">
          <div class="flex justify-center items-center mx-10 mt-10 mb-10">
            <Pagination />
          </div>
        </div>
      </div>
      <!--End of Product Card Container-->
    </div>
  </div>
</template>

<script>
import Mysearch from "~/components/Search";
import Searchcategory from "~/components/SearchCategory";
import Productcard from "~/components/GoodsCard";
import Mainitems from "~/assets/data/main-items.json";
import Dropdowns from "~/assets/data/drop-down.json";
import Myprice from "~/components/Price";
import Mydropdown from "~/components/Dropdown";
import Carmodal from "~/components/CarModel";
import Pagination from "~/components/Pagination";
import Arrowicon from "@/assets/svg/arrow.svg?inline";

export default {
  components: {
    Mysearch,
    Searchcategory,
    Productcard,
    Myprice,
    Pagination,
    Mydropdown,
    Carmodal,
    Arrowicon,
  },
  name: "search",

  data() {
    return {
      mainitems: Mainitems,
      dropdowns: Dropdowns,
      isToggled: false,
    };
  },
  methods: {
    toggleData: function (event) {
      this.isToggled = !this.isToggled;
    },
  },
};
</script>

<style scoped>
.up {
  transform: rotate(0deg);
}

.down {
  transform: rotate(180deg);
}
</style>
