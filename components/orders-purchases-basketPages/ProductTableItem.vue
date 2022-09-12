<template>
  <div class="flex items-center justify-between px-8 py-4">
    <div>
      <div class="flex items-center gap-8">
        <div>
          <img
            :src="mainitem.src"
            alt="car image"
            width="100"
            height="100"
            class="arrow"
          />
        </div>
        <p>
          {{ `${mainitem.name} ${mainitem.model} ${mainitem.transmission}` }}
        </p>
      </div>
    </div>
    <div>
      <p>{{ `$${mainitem.price}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainitem"],
};
</script>
