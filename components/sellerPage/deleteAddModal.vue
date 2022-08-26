<template>
  <div
    class="delete-modal bg-black-overlay top-0 w-full fixed flex justify-center items-center"
  >
    <div class="bg-grey-100 grid grid-cols-1 w-4/5 md:w-2/5 relative">
      <div class="absolute w-full flex justify-end pt-3 pr-3">
        <CloseIcon class="cursor-pointer" @click="sendData" />
      </div>
      <div class="col-span-1 rounded p-8">
        <div class="flex justify-center pb-3">
          <h3 class="text-sm font-black font-bold">
            Are you sure you want to delete the ad?
          </h3>
        </div>
        <div class="flex justify-center pb-3">
          <h3 class="text-sm font-black font-bold">
            This action is irreversible.
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="">
            <button
              class="btn btn-grey w-full focus:outline-none"
              @click="sendData"
            >
              No
            </button>
          </div>
          <div class="">
            <button class="btn btn-purple w-full focus:outline-none">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/svg/closeIcon.svg?inline";

export default {
  components: { CloseIcon },
  methods: {
    sendData() {
      if (true) {
        this.$emit("close");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.delete-modal {
  height: calc(100% + 65px);
}
</style>
