<template>
  <div class="flex">
    <div class="w-full hidden md:block md:w-3/12">
      <img :src="comment.src" alt="man" class="w-full" />
    </div>
    <div class="px-2">
      <h1 class="text-xl font-bold">{{ comment.name }}</h1>
      <h3 class="text-2xs text-grey-500">{{ comment.date }}</h3>
      <p class="text-2xs">{{ comment.msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"],
};
</script>

<style scoped></style>
