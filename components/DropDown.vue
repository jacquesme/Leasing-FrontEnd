<template>
  <div class="flex items-center mt-24">
    <div class="bg-accent-purple w-1 h-10 inline-block"></div>
    <div class="ml-3 w-48 h-10">
      <h3 class="text-m text-accent-purple font-medium align-middle mt-3 mb-6">
        {{ dropdown.name }}
      </h3>
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
  name: "SeatNumber",
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
