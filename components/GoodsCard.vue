<template>
  <div class="goods-card">

    <div class="goods-content">
      <div class="goods-img-container">
        <img class="goods-image" :src="content.jpeg" :alt="car-image">
      </div>

      <div class="bg-grey-100 p-4">
        <h3 class="goods-name text-m text-black mb-2">{{ content.name }}</h3>

        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="col-span-2 mb-4">
            <p class="goods-model text-xs text-black">Model: {{ content.model }}</p>
          </div>
          <div class="col-span-3 md:ml-10">
            <p class="goods-transmission text-xs text-black">Transmission: {{ content.transmission }}</p>
          </div>
          <div class="col-span-2">
            <p class="text-m caption-style">$ {{ content.price }}</p>
          </div>
          <div class="col-span-3 md:ml-5">
            <button class="btn btn-purple">More details</button>
          </div>

        </div>

      </div>
    </div>

    <div class="bg-black">
      <div><a href="#"><span v-html="content.svg"></span></a></div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['content']
  }
</script>
