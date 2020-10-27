<template>
  <div class="table-wrapper">
    <table>
      <thead class="bg-grey-400">
        <tr>
          <th class="w-4/5">Name</th>
          <th class="w-1/6">The cost</th>
          <th class="w-1/12"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="td-1">Lorem ipsum dolor sit amet.</td>
          <td class="td-2">$1200.00</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum dolor.</td>
          <td class="td-2">$127.00</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum.</td>
          <td class="td-2">$154.00</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum dolor sit amet.</td>
          <td class="td-2">$1890.00</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum dolor.</td>
          <td class="td-2">$12.50</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum dolor.</td>
          <td class="td-2">$12500.78</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
        <tr>
          <td class="td-1">Lorem ipsum dolor sit.</td>
          <td class="td-2">$25400.00</td>
          <td class="td-3"><button class="btn-delete">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style scoped>
.btn-delete:hover {
  @apply underline;
}
tr:nth-child(even) {
  @apply bg-grey-100;
}
</style>
