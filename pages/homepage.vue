<template>
  <div class="bg-grey-400">
    <div class="home-container w-10/12 md:w-75 m-auto bg-white">
      <div class="hidden md:block">
        <Nav/>
      </div>
      <div class="ml-8 md:hidden">
          <SearchBar/>
      </div>

      <section class="banner-section bg-grey-300 grid md:grid-cols-2 px-20 py-6">
        <div class="inline-block w-11/12 md:w-9/12 mt-8">
          <h1 class="font-bold text-4xl">Autolizing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tincidunt libero. Duis.</p>
          <button class="btn btn-purple mt-4">Search product</button>
        </div>
        <div class="hidden md:inline-block">
          <img src="../assets/img/audiQ5.png" alt="audiQ5" class="audi w-4/5 h-auto">
        </div>
      </section>

      <aside>

      </aside>

    </div>
  </div>

</template>

<script>
  import Nav from '~/layouts/nav.vue';
  import SearchBar from '~/components/SearchBar.vue';
  import AudiQ5 from '~/assets/img/audiQ5.png';
    export default {
        components: {Nav, SearchBar,AudiQ5},
        name: "homepage"
    }
</script>

<style lang="scss" scoped>
.home-container {

}
</style>
