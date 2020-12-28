<template>
  <div>
    <mySearch />

    <div class="flex flex-wrap md:flex-no-wrap mx-4 md:mx-10 mt-16 m-auto">
      <div class="md:w-1/6 mr-8 hidden md:block">
        <searchCategory />
        <myPrice class="mt-12" />
        <myDropDown
          v-for="(dropdown, key) in dropdowns"
          :key="key"
          :dropdown="dropdown"
        />
        <CarModal class="mt-24" />
      </div>
      <button
        class="btn btn-filter focus:outline-none w-full mt-12 mb-16 md:hidden"
        @click="toggleData()"
      >
        Filters
        <ArrowIcon class="inline-block up" v-bind:class="{ down: isToggled }" />
      </button>
      <div class="filter-option" v-bind:class="{ hidden: !isToggled }">
        <div class="md:w-1/6 mr-8">
          <searchCategory />
          <myPrice class="mt-12" />
          <myDropDown
            v-for="(dropdown, key) in dropdowns"
            :key="key"
            :dropdown="dropdown"
          />
          <CarModal class="mt-24" />
        </div>
        <button
          class="btn btn-purple w-full focus:outline-none mt-12 mb-16 md:hidden"
        >
          Apply filters
        </button>
      </div>
      <div class="flex flex-row flex-wrap">
        <ProductCard
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
import mySearch from "~/components/Search";
import searchCategory from "~/components/SearchCategory";
import ProductCard from "~/components/GoodsCard";
import mainItems from "~/assets/data/main-items.json";
import dropDowns from "~/assets/data/drop-down.json";
import myPrice from "~/components/Price";
import myDropDown from "~/components/Dropdown";
import CarModal from "~/components/CarModel";
import Pagination from "~/components/Pagination";
import ArrowIcon from "@/assets/svg/arrow.svg?inline";

export default {
  components: {
    mySearch,
    searchCategory,
    ProductCard,
    myPrice,
    Pagination,
    myDropDown,
    CarModal,
    ArrowIcon,
  },
  name: "search",

  data() {
    return {
      mainitems: mainItems,
      dropdowns: dropDowns,
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
