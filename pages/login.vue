<template>
  <div class="login_container">
    <div
      class="bg-grey-100 flex justify-between items-center flex-wrap py-4 px-10"
    >
      <h2 class="text-xl font-bold">LOG IN</h2>
      <div class="text-xs text-grey-600">
        <a href="#" class="">Main</a>
      </div>
    </div>
    <div class="grid grid-cols-1 pt-8 pb-16 gap-8 md:grid-cols-2 md:gap-4 px-8 md:py-32" v-bind:class="{hidden:!isHidden}">
      <div class="col-span-1 border-2 border-grey-500 rounded p-4">
        <p class="text-sm font-black font-bold pb-4">01. Login</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-3 md:pb-2">
          <div class="md:col-span-1">
            <input
              type="text"
              placeholder="Enter login ......."
              class="w-full text-xs appearance-none rounded w-full bg-grey-100 p-4"
            />
          </div>
          <div class="md:col-span-1">
            <input
              type="text"
              placeholder="Enter password ......."
              class="w-full text-xs appearance-none rounded w-full bg-grey-100 p-4"
            />
          </div>
        </div>
        <div class="flex justify-end px-4">
          <a class="text-xs font-black cursor-pointer" @click="toggleClass()">Forgot password?</a>
        </div>
        <div class="pt-4 px-4 pb-4 md:pt-0">
          <button class="btn btn-purple w-full md:w-40">Log in</button>
        </div>
      </div>
      <div class="col-span-1 border-2 border-grey-500 rounded p-4">
        <p class="text-sm font-black font-bold">02. Registration</p>
        <div class="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div class="md:col-span-1">
            <input
              type="text"
              placeholder="Enter login ......."
              class="w-full text-xs appearance-none rounded w-full bg-grey-100 p-4"
            />
          </div>
          <div class="md:col-span-1">
            <input
              type="text"
              placeholder="Enter password ......."
              class="w-full text-xs appearance-none rounded w-full bg-grey-100 p-4"
            />
          </div>
        </div>
        <div class="pt-4 px-4 pb-4 md:pt-0">
          <button class="btn btn-purple w-full md:w-40 cursor-pointer">Registration</button>
        </div>
      </div>
    </div>
    <PasswordRecoveryModal v-bind:class="{ hidden: isHidden }"/>
  </div>
</template>
<script>
import PasswordRecoveryModal from "../components/login/PasswordRecoveryModal";
export default {
  components: {PasswordRecoveryModal},
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
.login_container {
  height: 100vh;
  @media (min-width: 768px) {
    height: calc(100vh - 164px);
  }
}
</style>
