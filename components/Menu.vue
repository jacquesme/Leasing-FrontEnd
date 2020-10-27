<template>
  <nav class="box-border m-0 p-0 text-white grid sm:grid-cols-2 md:grid-cols-1">
    <!--NAV HEADER-->
    <div class="nav-top bg-accent-blue inline-block md:block">
      <ul class="menu sm:text-m md:overflow-hidden">
        <li class="menu-item__toggle md:hidden">
          <a href="#"><span class="close hairline"></span></a>
        </li>
        <li
          class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"
        >
          <a href="#">Vehicle leasing</a>
        </li>
        <li
          class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"
        >
          <a href="#">Commercial vehicle leasing</a>
        </li>
        <li
          class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"
        >
          <a href="#">Bus leasing</a>
        </li>
        <!--      <li class="md:col-span-2"><a href="#"><Cart class="inline mr-2"/>Basket {$ 2250.00}</a></li>-->
        <!--      <li class="md:col-span-2"><a href="#">Jacques Beck</a></li>-->
        <li class="px-8 py-5 text-xs md:py-2 md:float-clear md:float-right">
          <a href="#">Login/Registration</a>
        </li>
        <li class="pl-8 pt-8 pb-8 md:hidden">
          <button class="btn btn-purple">To add an advert</button>
        </li>
      </ul>
    </div>

    <!--SEARCH BAR-->
    <div class="sm:ml-8 md:ml-0">
      <SearchBar />
    </div>
  </nav>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: { SearchBar },
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.menu {
  list-style: none;
  &-item__toggle {
    padding: 20px 15px 0 0;
    a {
      display: block;
      .close {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        overflow: hidden;
        &:before,
        &::after {
          content: "";
          position: absolute;
          height: 2px;
          width: 100%;
          top: 50%;
          left: 0%;
          margin-top: -1px;
          background: white;
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
      .hairline {
        margin-left: 80%;
        &::before,
        &::after {
          height: 2px;
        }
      }
    }
  }
}
</style>
