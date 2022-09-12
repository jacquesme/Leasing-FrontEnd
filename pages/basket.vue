<template>
  <div class="basket-container w-full">
    <page-caption />
    <div class="flex flex-col gap-8 px-24 py-20">
      <div class="border-2 rounded-l shadow-md border-grey-400">
        <div class="bg-grey-400">
          <div class="flex items-center justify-between px-8 py-4">
            <div class="">Name</div>
            <div class="">Price</div>
          </div>
        </div>
        <div class="flex items-center justify-between px-8 py-4">
          <div class="">
            <div class="flex items-center">
              <div class="">
                <img
                  src="@/static/img/325.png"
                  alt="car image"
                  width="100"
                  height="100"
                  class="arrow"
                />
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="flex gap-12 items-center justify-center">
            <p>$1200.00</p>
            <div class="flex justify-center items-center">
              <div class="border-1 border-grey-500 rounded-full w-8 h-8">
                <div class="w-8 h-8 flex items-center justify-center">
                  <RubbishGreyBin class="rubbish-grey" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageCaption from "../components/allPages/pageCaption";
import RubbishGreyBin from "@/assets/svg/rubbish-grey-bin.svg?inline";

export default {
  components: { pageCaption, RubbishGreyBin },
};
</script>

<style lang="scss" scoped>
.basket-container {
  min-height: calc(100vh - 164px);
}

.rubbish-grey {
  margin-right: 1px;
  margin-bottom: 2px;
}
</style>
