<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="flex items-center mt-12">
      <div class="bg-accent-purple w-1 h-10 inline-block"></div>
      <div class="">
        <h3 class="text-m text-accent-purple font-medium ml-4">
          {{ dropdown.name }}
        </h3>
      </div>
    </div>
    <div>
      <form action="dropdown" class="w-full bg-grey-100 p-3 rounded">
        <select name="" class="w-full bg-grey-100">
          <option v-for="i in dropdown.opt" :key="i">
            {{ i }}
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dropdown"],
};
</script>

<style lang="scss" scoped>
form {
  select {
    border: none;
    outline: none;
    option {
      background: #f9f9f9;
    }
    :hover {
      background: #3b8070;
    }
    :after selected {
      background: black;
    }
  }
}
</style>

