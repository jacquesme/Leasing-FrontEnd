<template>
  <form
    class="mt-8 md:mt-0 md:flex md:items-center md:justify-between md:flex-wrap md:py-6 md:px-10"
  >
    <div class="flex items-center flex-shrink-0 md:text-white md:mr-6">
      <Logo class="logo block" />
      <span class="ml-4 text-2xl text-accent-purple">AutoLizing</span>
      <button
        class="hamburger block md:hidden"
        type="button"
        @click="menuOpen = !menuOpen"
      >
        <div class="hamburger-line bg-grey-600"></div>
        <div class="hamburger-line bg-grey-600"></div>
        <div class="hamburger-line bg-grey-600"></div>
      </button>
    </div>

    <div
      class="dropdown mt-6 md:hidden"
      :class="{ 'dropdown-after': menuOpen }"
    >
      <input
        type="text"
        placeholder="Vehicle search"
        class="dropdown-search w-full bg-grey-200 p-2 rounded-md inline-block text-black"
      />
      <button
        class="bg-accent-purple inline-block float-right relative -mt-10 btn-search"
      >
        <Search class="btn-search_icon" />
      </button>
    </div>

    <div class="w-full block md:flex-grow md:flex md:items-center md:w-auto">
      <div class="text-xs hidden md:block md:flex-grow">
        <input
          type="text"
          placeholder="Vehicle search"
          class="big-input bg-grey-200 px-4 h-md-40 rounded-l"
        />
        <button class="bg-accent-purple btn-search">
          <Search class="btn-search_icon" />
        </button>
      </div>
      <div class="hidden md:block">
        <button class="btn btn-purple">To add an advert</button>
      </div>
    </div>
  </form>
</template>

<script>
import Search from "@/assets/svg/search.svg?inline";
import Logo from "@/assets/svg/logo.svg?inline";

export default {
  components: { Logo, Search },
  name: "SearchBar",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  min-width: 40px;
}

.hamburger {
  margin-left: auto;
  cursor: pointer;
  &:focus {
    outline: none;
  }
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
  width: 100%;
  transition: height 0.5s ease;
  overflow: hidden;

  &-after {
    height: calc(25vh - 50px);
    transition: height 0.5s ease;
  }

  &-search {
    border-radius: 0.25rem 0 0 0.25rem;

    &::placeholder {
      color: black;
      opacity: 1;
    }

    &:focus {
      outline: none;
    }
  }
}

.btn-search {
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  vertical-align: top;
  border-radius: 0 0.25rem 0.25rem 0;
  margin-left: -6px;

  &:hover {
    background-color: #852bbd;
    transition: ease-in-out 0.4s;
  }

  &_icon {
    margin-left: 11px;
  }
}

.big-input {
  color: black;
  margin-left: 6%;
  width: 75%;

  &::placeholder {
    color: black;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
}
</style>
