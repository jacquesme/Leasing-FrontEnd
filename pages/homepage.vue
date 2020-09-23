<template>
    <div class="header-container center">
        <NavHeader/>
    </div>
</template>

<script>
  import NavHeader from '~/layouts/navheader.vue';
    export default {
        components: {NavHeader},
        name: "homepage"
    }
</script>

<style lang="scss" scoped>
.header-container {
  margin: 0;
  width: 1200px;
  background-color: #3b8070;
}
</style>
