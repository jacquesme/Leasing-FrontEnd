<template>
  <div>
    <div class="flex items-center">
      <div class="bg-accent-purple w-1 h-10 inline-block"></div>
      <div class="ml-3 w-48 h-10 flex items-center">
        <h3 class="text-m text-accent-purple font-medium">NUMBER OF SEATS</h3>
      </div>
    </div>
    <div class="ml-4 mt-5">
      <form action="dropdown">
        <select name="" id="">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeatNumber",
};
</script>

<style scoped></style>
