<template>
  <div
    class="bg-grey-100 flex justify-between items-center flex-wrap py-4 px-10"
  >
    <h2
      class="page-name text-xl font-bold"
      v-if="$route.name === 'orders' || $route.name === 'purchases'"
    >
      {{ captionText }} {{ $route.name.toUpperCase() }}
    </h2>
    <h2
      class="page-name text-xl font-bold"
      v-else-if="$route.name === 'seller'"
    >
      {{ captionText }}
    </h2>
    <h2
      class="page-name text-xl font-bold"
      v-else-if="$route.name === 'product'"
    >
      {{ captionText }}
    </h2>
    <h2 class="page-name text-xl font-bold" v-else-if="$route.name">
      {{ $route.name.toUpperCase() }}
    </h2>
    <div class="text-xs text-grey-600">
      <a href="#" class="pr-4">Main</a> /
      <a href="#" class="px-4">{{ $route.name.toLowerCase() }}`</a>
    </div>
  </div>
</template>

<script>
export default {
  props: { captionText: String },
};
</script>

<style lang="scss" scoped></style>
