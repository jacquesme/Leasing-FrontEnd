<template>

  <div class="menu">
    <div v-for="item in items">
      <div class="menu-item"><a href="#"><span class="menu-item_svg" v-html="item.svg"></span> {{ item.name }}</a></div>
    </div>
    <div class="menu-logOff">
      <div class="menu-logOff_item"><a href="#">{{ logOff.name }}<span class="menu-logOff_item_svg" v-html="logOff.svg"></span></a></div>
    </div>
  </div>

</template>



<script>

  export default {
    props: ['items', 'logOff']
  }

</script>


<style lang="scss" scoped>
  .menu {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    color: black;
    font-size: 14px;
    padding-top: 1.5rem;
    width: 180px;
    &-item {
      margin-top: 1rem;
      margin-left: 1.5rem;
      &_svg {
        display: inline-block;
        margin-right: 1rem;
        height: 0.75rem;
        vertical-align: middle;
        width: 0.75rem;
      }
    }
    &-logOff {
      background-color: #F2F2F2;
      margin-top: 1.8rem;
      padding-bottom: 5px;
      &_item {
        margin-bottom: 6px;
        margin-left: 1.5rem;
        margin-top: 1.5rem;
        padding-top: 12px;
        &_svg {
          display: inline-block;
          height: 1rem;
          margin-left: 1rem;
          vertical-align: middle;
          width: 1rem;
        }
      }
    }
  }

</style>


