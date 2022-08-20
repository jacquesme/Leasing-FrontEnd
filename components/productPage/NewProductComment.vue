<template>
  <div>
    <div
      class="flex justify-center border-2 rounded-t-sm border-b-0 border-accent-purple w-40"
    >
      <h2 class="text-xl text-accent-purple font-bold">New Comment</h2>
    </div>
    <textarea
      class="border-2 border-accent-purple rounded rounded-tl-none w-full px-4 py-2"
      rows="4"
    ></textarea>
    <div class="flex flex-col md:flex-row w-full mt-4">
      <div class="w-full">
        <input
          type="text"
          placeholder="name ......."
          class="w-full border-2 rounded border-accent-purple px-5 py-1"
        />
      </div>
      <div class="w-full my-4 md:my-0 md:mx-4">
        <input
          type="text"
          placeholder="email  ......."
          class="w-full border-2 rounded border-accent-purple px-5 py-1"
        />
      </div>
      <div class="w-full">
        <button
          class="btn-purple px-5 py-1 border-2 border-accent-purple hover:bg-accent-purple-light rounded w-full"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
::placeholder {
  @apply text-m;
}
</style>
