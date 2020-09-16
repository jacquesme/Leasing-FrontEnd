<template>

  <nav class="box-border m-0 p-0 text-white grid sm:grid-cols-2 md:grid-cols-1">

    <!--NAV HEADER-->
    <div class="bg-accent-blue inline-block md:block">
      <ul class="menu sm:text-m md:overflow-hidden">
        <li class="menu-item__toggle md:hidden"><a href="#"><span class="close hairline"></span></a></li>
        <li class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"><a href="#">Vehicle leasing</a></li>
        <li class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"><a href="#">Commercial vehicle leasing</a></li>
        <li class="px-8 py-5 text-xl md:py-2 md:clear-right md:float-left md:text-xs"><a href="#">Bus leasing</a></li>
        <!--      <li class="md:col-span-2"><a href="#"><Cart class="inline mr-2"/>Basket {$ 2250.00}</a></li>-->
        <!--      <li class="md:col-span-2"><a href="#">Jacques Beck</a></li>-->
        <li class="px-8 py-5 text-xs md:py-2 md:float-clear md:float-right"><a href="#">Login/Registration</a></li>
        <li class="pl-8 pt-8 pb-8 md:hidden"><button class="btn btn-purple">to add an advert</button></li>
      </ul>
    </div>

    <!--SEARCH BAR-->
    <div class="sm:ml-8 md:ml-0">
      <form class="mt-8 md:mt-0 md:flex md:items-center md:justify-between md:flex-wrap md:p-6">
        <div class="md:flex md:items-center md:flex-shrink-0 md:text-white md:mr-6">
          <Logo class="logo inline"/>
          <span class="ml-4 text-2xl text-accent-purple">AutoLizing</span>
          <button class="hamburger md:hidden" type="button" @click="menuOpen = !menuOpen">
            <div class="hamburger-line  bg-grey-600"></div>
            <div class="hamburger-line  bg-grey-600"></div>
            <div class="hamburger-line  bg-grey-600"></div>
          </button>
          <div class="dropdown mt-6 md:hidden" :class="{ 'dropdown-after' : menuOpen }">
            <input type="text" placeholder="Vehicle search" class="dropdown-search w-8/12 bg-grey-200 p-2 rounded-md inline-block text-black">
            <button class="bg-accent-purple inline-block btn-search"><Search class="btn-search_icon"/></button>
          </div>
        </div>
        <div class="w-full block md:flex-grow md:flex md:items-center md:w-auto">
          <div class="text-xs hidden md:block md:flex-grow">
            <input type="text" placeholder="Vehicle search" class="big-input bg-grey-200 px-4 h-md-40 rounded-l">
            <button class="bg-accent-purple  btn-search"><Search class="btn-search_icon"/></button>
          </div>
          <div class="hidden md:block">
            <button class="btn btn-purple">to add an advert</button>
          </div>
        </div>
      </form>
    </div>

  </nav>
</template>

<script>
  import Logo from '~/assets/svg/logo.svg?inline';
  import Search from '~/assets/svg/search.svg?inline';
  import Cart from '~/assets/svg/shopping-cart.svg?inline';
    export default {
      components: {Logo, Search, Cart},
      name: "Menu",
      data() {
        return {
          menuOpen: false
        }
      }
    }

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
          &::before, &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            top: 50%;
            left: 0%;
            margin-top: -1px;
            background: white;
          }
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
        .hairline {
          margin-left: 80%;
          &::before, &::after {
            height: 2px;
          }
        }
      }
    }
  }
  .hamburger {
    position: absolute;
    margin-left: 3rem;
    margin-top: 9px;
    cursor: pointer;
    &-line {
      margin-bottom: 8px;
      width: 30px;
      height: 2px;
    }
    &-line:last-child {
      margin-bottom: 0;
    }
  }
  .dropdown {
    height: 0px;
    width: 104%;
    transition: height 0.5s ease;
    overflow: hidden;
    &-after {
      height: calc(25vh - 50px);
      transition: height 0.5s ease;
    }
    &-search {
      border-radius: 0.25rem 0 0 0.25rem;
    }
  }
  .btn-search {
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 0 0.25rem 0.25rem 0;
    margin-left: -6px;
    &_icon {
      margin-left: 11px;
    }
  }
  .big-input {
    margin-left: 6%;
    width: 75%;
  }
</style>
