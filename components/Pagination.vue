<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="pag-list bg-grey-100">
          <a href="" class="pag-arrow">&#60;</a>
        </li>
        <li class="pag-list bg-grey-100"><a href="">1</a></li>
        <li class="pag-list bg-white"><a href="">...</a></li>
        <li class="pag-list bg-accent-purple text-white shadow-md">
          <a href="">77</a>
        </li>
        <li class="pag-list bg-white"><a href="">...</a></li>
        <li class="pag-list bg-grey-100"><a href="">1589</a></li>
        <li class="pag-list bg-grey-100">
          <a href="" class="pag-arrow">&#62;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style scoped>
.pag-list {
  @apply inline px-2 py-2 rounded;
}

.pag-arrow {
  @apply font-semibold;
}

.pag-arrow:hover {
  @apply font-black text-accent-blue;
}
</style>
