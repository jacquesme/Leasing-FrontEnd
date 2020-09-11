<template>
  <div class="box-border m-0 p-0 text-white">
    <nav class="bg-accent-blue inline-block md:block">
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
    </nav>

    <section class="absolute mt-6 ml-8 inline-block md:block md:mt-6">
      <Logo class="logo float-left"/>
      <p class="logo-name text-accent-purple float-left">AutoLizing</p>
      <button class="hamburger float-left md:hidden" type="button" @click="menuOpen = !menuOpen">
        <div class="hamburger-line  bg-grey-600"></div>
        <div class="hamburger-line  bg-grey-600"></div>
        <div class="hamburger-line  bg-grey-600"></div>
      </button>
      <div action="" class="dropdown mt-16" :class="{ 'dropdown-after' : menuOpen }">
        <input type="text" placeholder="Vehicle search" class="w-4/5 bg-grey-200 p-2 rounded-md block text-black">
        <button class="btn btn-purple center mt-4">search</button>
      </div>
    </section>

    <div class="addForm grid grid-cols-10 md:px-8 mt-4">
        <div class="logo-container col-span-2">
          <Logo class="logo inline"/>
          <p class="logo-name text-accent-purple inline">AutoLizing</p>
        </div>
        <form action="" class="col-span-6">
          <input type="text" placeholder="Vehicle search" class="bg-grey-200 p-2">
          <button class="bg-accent-purple  btn-search"><Search class="btn-search_icon"/></button>
        </form>
        <div class="col-span-2">
          <button class="btn btn-purple ml-10">to add an advert</button>
        </div>
    </div>

  </div>
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
          margin-left: 85%;
          &::before, &::after {
            height: 2px;
          }
        }
      }
    }
  }

  .logo-name {
    margin: 10px 0 0 10px;
  }
  .hamburger {
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
  }

  .addForm {
    display: none;
    .logo-container {
        margin-top: 6px;
        .logo {
          width: 28px;
          height: 28px;
        }
    }
    form {
        text-align: center;
        input[type=text] {
          width: 90%;
          font-size: 11px;
          height: 40px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 0.25rem 0 0 0.25rem;
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
    }
  }


</style>
