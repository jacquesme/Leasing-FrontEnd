<template>
  <div class="table-wrapper">
    <div class="w-full">
      <div class="bg-grey-400">
        <div class="flex items-center md:justify-between px-8 py-4">
          <div>No: 001</div>
          <div class="ml-64 md:ml-0">8/28/2022</div>
          <div class="hidden md:block" v-if="$route.name === 'orders'">
            Jacques Vd Merwe
          </div>
          <div class="hidden md:block" v-if="$route.name === 'purchases'">
            2 items worth $2400.00
          </div>
          <div class="cursor-pointer" @click="tableOpen = !tableOpen">
            <div class="arrow-container flex items-center gap-2">
              <p class="hidden md:block">More</p>
              <arrow-down :class="!tableOpen ? 'arrow-up' : 'arrow-down'" />
            </div>
          </div>
        </div>
      </div>

      <div :class="!tableOpen ? 'collapse-dropdown' : 'expand-dropdown'">
        <ProductTableItem
          v-for="(mainitem, key) in mainitems"
          :key="key"
          :mainitem="mainitem"
          class="pb-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import arrowDown from "/assets/svg/arrow.svg?inline";
import ProductTableItem from "./ProductTableItem";
import MainItems from "@/assets/data/main-items.json";

export default {
  components: { arrowDown, ProductTableItem },
  data() {
    return {
      tableOpen: false,
      mainitems: MainItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.arrow-down {
  transition: 0.6s ease-in-out;
  transform: rotate(180deg);
}

.arrow-up {
  transition: 0.6s ease-in-out;
  transform: rotate(0deg);
}

.expand-dropdown {
  max-height: 2500px;
  transition: max-height 3s ease-out;
  overflow: hidden;
}

.collapse-dropdown {
  max-height: 0;
  width: 100%;
  transition: max-height 0.8s ease-in;
  overflow: hidden;
}
</style>
