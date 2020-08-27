<template>

  <div class="menu grid sm:ml-0">
    <div v-for="item in items">
      <div class="menu-item"><a href="#"><span class="svg" v-html="item.svg"></span> {{ item.name }}</a></div>
    </div>
    <div class="menu-logOff">
      <div class="item-logOff"><a href="#">{{ logOff.name }}<span class="svg-logOff" v-html="logOff.svg"></span></a></div>
    </div>
  </div>

</template>



<script>

  export default {
    props: ['items', 'logOff']
  }

</script>


<style scoped>
  .menu {
    @apply bg-white text-sm text-black shadow-lg w-xl rounded-lg;
  }

  .menu-item {
    @apply mt-4 ml-6;
  }

  .svg {
    @apply inline-block mr-4 h-3 w-3 align-middle;
  }

  .menu-logOff {
    @apply bg-grey-400 mt-4;
  }

  .item-logOff {
    @apply ml-6 mt-6 mb-4;
  }

  .svg-logOff {
    @apply inline-block ml-4 h-4 w-4 align-middle;
  }


</style>
