<template>
  <div class="purchase-container">
    <page-caption :caption-text="trailingCaption" />
    <div class="flex flex-col gap-8 px-0 md:px-24 py-20">
      <product-table />
      <product-table />
      <product-table />
    </div>
  </div>
</template>
<script>
import pageCaption from "../components/allPages/pageCaption";
import productTable from "../components/orders-purchases-basketPages/ProductTable";

export default {
  components: { pageCaption, productTable },
  data() {
    return {
      trailingCaption: "MY",
    };
  },
};
</script>
<style lang="scss" scoped>
.purchase-container {
  min-height: calc(100vh - 164px);
}
</style>
