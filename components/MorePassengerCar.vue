<template>
  <div>
    <div
      class="bg-grey-100 flex justify-between items-center flex-wrap mt-12 py-4 px-10"
    >
      <h2 class="text-xl font-bold">MORE PASSENGER CARS</h2>
    </div>
    <div class="flex flex-col md:flex-row p-8">
      <div class="flex flex-col md:flex-row w-full md:w-4/5 mt-8 gap-4">
        <Productcard
          class="sm:w-full md:w-1/2 lg:w-1/3"
          v-for="(mainitem, key) in mainitems"
          v-if="key >= 3 && key <= 5"
          :key="key"
          :mainitem="mainitem"
        />
      </div>
      <div class="md:w-1/5 mt-0 md:mt-8 pb-2 pt-4 md:pt-0 md:pl-4">
        <div
          class="flex justify-center items-center border border-accent-purple rounded w-full h-40 md:h-full"
        >
          <div class="h-24 md:h-32">
            <div
              class="flex justify-center items-center border-4 border-accent-purple rounded-full h-12 w-12 m-auto"
            >
              <div
                class="flex justify-center items-center bg-accent-purple rounded-full h-1 w-5"
              >
                <div class="bg-accent-purple rounded-full h-5 w-1"></div>
              </div>
            </div>
            <h2 class="text-xl font-bold text-accent-purple text-center mt-2">
              Go to the category <br />"Cars"
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Productcard from "~/components/GoodsCard";
import Mainitems from "~/assets/data/main-items.json";
export default {
  components: { Productcard },
  data() {
    return {
      mainitems: Mainitems,
    };
  },
};
</script>

<style scoped></style>
