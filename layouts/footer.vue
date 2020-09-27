<template>
    <div class="bg-grey-400 mt-12">
      <section class="flex flex-col md:flex-row pb-12">
        <div class="w-full p-8 md:w-1/2">
          <div class="py-8 flex items-center">
            <div class="bg-accent-purple w-1 h-8"></div>
            <h1 class="text-accent-purple font-bold ml-4">ABOUT US</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit nunc at tellus hendrerit, eget rhoncus augue lobortis. Nullam a.
          </p><br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo nunc, porttitor vel felis vel, efficitur tincidunt massa. Sed nec felis tincidunt odio pellentesque porttitor. Nullam a nulla porta, vestibulum massa non, gravida ligula. Nam semper ligula odio, ut pulvinar libero dictum a. Aliquam tincidunt quis eros condimentum sodales. Donec at justo commodo, commodo nulla quis, consectetur est. Nam eu arcu non magna dictum vestibulum.
          </p>
        </div>

        <div class="w-full p-8 md:w-1/2">
          <div class="py-8 flex items-center">
            <div class="bg-accent-purple w-1 h-8"></div>
            <h1 class="text-accent-purple font-bold ml-4">PAYMENTS AND RETURNS</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit nunc at tellus hendrerit, eget rhoncus augue lobortis. Nullam a.
          </p><br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo nunc, porttitor vel felis vel, efficitur tincidunt massa. Sed nec felis tincidunt odio pellentesque porttitor. Nullam a nulla porta, vestibulum massa non, gravida ligula. Nam semper ligula odio, ut pulvinar libero dictum a. Aliquam tincidunt quis eros condimentum sodales. Donec at justo commodo, commodo nulla quis, consectetur est. Nam eu arcu non magna dictum vestibulum.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
</template>

<script>
  import Footer from '~/components/Footer.vue';
    export default {
      components: {Footer},
      name: "Newfooter"
    }
</script>

<style scoped>

</style>
