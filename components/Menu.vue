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


