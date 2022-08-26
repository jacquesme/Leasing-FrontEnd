<template>
  <div class="px-8 py-32">
    <div class="flex justify-center items-center recoverModal">
      <div class="grid grid-cols-1 w-full md:w-1/5">
        <div class="col-span-1 border-2 border-grey-500 rounded p-5">
          <div class="flex justify-center pb-3">
            <h3 class="text-sm font-black font-bold">Password recovery</h3>
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
              <button class="btn btn-purple w-full focus:outline-none" @click="sendData">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sendData() {
      // send message logic
      if (true) {
        this.$emit("close");
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.recoverModal {
  //@media (min-width: 768px) {
  //  height: calc(300px + 90px);
  //}
}
</style>
