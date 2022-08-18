<template>
  <div class="px-8" v-bind:class="{hidden: !isHidden}">
    <div class="flex justify-center items-center recoverModal">
      <div class="grid grid-cols-1 w-full md:w-1/5">
        <div class="col-span-1 border-2 border-grey-500 rounded p-5">
          <div class="flex justify-center pb-3">
            <p class="text-sm font-black font-bold">Password recovery</p>
          </div>
          <div class="grid gap-5">
            <div>
              <input
                type="text"
                placeholder="Enter login ......."
                class="w-full text-xs appearance-none rounded bg-grey-100 p-4 focus:outline-none"
              />
            </div>
            <div class="">
              <button class="btn btn-purple w-full focus:outline-none" @click="toggleClass()">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      isHidden: true,
    };
  },
  methods: {
    toggleClass: function (event) {
      this.isHidden = !this.isHidden;
    }
  }
}
</script>

<style lang="scss" scoped>
.recoverModal {
  height: 100vh;
  @media (min-width: 768px) {
    height: calc(100vh - 200px);
  }
}
</style>
