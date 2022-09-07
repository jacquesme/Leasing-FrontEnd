<template>
  <div class="product-container w-full">
    <page-caption :caption-text="trailingCaption" />
    <div class="flex flex-col w-full md:flex-row p-8">
      <!--      IMAGE DIV-->
      <div class="flex flex-wrap-reverse w-full md:flex-no-wrap md:w-1/3">
        <div
          class="flex w-full space-x-4 md:space-x-0 md:w-3/12 md:space-y-4 flex-row md:flex-col"
        >
          <div class="w-full"><img src="/img/front.png" alt="car" /></div>
          <div class="w-full"><img src="/img/back.png" alt="car" /></div>
          <div class="w-full"><img src="/img/interior.png" alt="car" /></div>
        </div>
        <div class="main-pic md:w-3/4 mx-4">
          <img src="/img/c200.png" alt="car" />
        </div>
      </div>
      <!--      PRODUCT DESCRIPTION DIV-->
      <div class="mt-8 md:w-1/2 md:mt-0">
        <h1 class="text-xl font-bold">Mercedes Benz C200</h1>
        <div class="flex flex-wrap pb-3">
          <button class="side-btn-purple w-24 mt-3">Mercedes</button>
          <button class="side-btn-purple mx-3 w-24 mt-3">Auto</button>
          <button class="side-btn-purple w-24 mt-3">Gas</button>
        </div>
        <div>
          <p class="mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
      <!--      SELLER NAME DIV-->
      <div class="md:w-1/4">
        <div
          class="border-2 border-accent-purple md:float-right rounded mt-4 md:mt-0 p-4 space-y-4 w-full md:w-3/4"
        >
          <h2 class="text-center">$ 12 400.00</h2>
          <div class="border-b-2 border-accent-purple"></div>
          <button class="btn-purple px-5 py-1 rounded w-full">Buy now</button>
        </div>
        <div
          class="border-2 border-accent-purple md:float-right rounded w-full md:w-3/4 p-4 space-y-4 mt-4"
        >
          <div class="flex">
            <div class="">
              <img src="/img/mark.png" alt="man" class="" />
            </div>
            <div class="px-2">
              <h3 class="text-2xs text-grey-500">Seller</h3>
              <h1 class="text-xl font-bold">Mark Sims</h1>
              <p class="text-2xs">Sometimes by accident</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--      COMMENT CARDS-->
    <div class="w-full md:w-4/5 px-8">
      <div
        class="flex justify-center border-2 rounded-t-sm border-b-0 border-accent-purple w-40"
      >
        <h2 class="text-xl text-accent-purple font-bold">Comments</h2>
      </div>
      <div
        class="border-2 border-accent-purple rounded rounded-tl-none w-full p-4 space-y-4"
      >
        <Commentcard
          v-for="(comment, key) in comments"
          :key="key"
          :comment="comment"
          class="border-b-1 pb-4"
        />
      </div>
    </div>
    <!--NEW COMMENT CARD-->
    <div class="w-full md:w-4/5 mt-8 px-8">
      <Newcommentcard />
    </div>
    <!--MORE SELLER'S PRODUCTS-->
    <Moresellerproduct />
    <!--MORE PASSENGER CARS-->
    <Morepassengercar />
  </div>
</template>

<script>
import Commentcard from "~/components/productPage/ProductComment";
import Newcommentcard from "~/components/productPage/NewProductComment";
import Productcomments from "~/assets/data/product-comment.json";
import Moresellerproduct from "~/components/productPage/MoreSellerProduct";
import Morepassengercar from "~/components/productPage/MorePassengerCar";
import PageCaption from "../components/allPages/pageCaption";

export default {
  components: {
    Commentcard,
    Newcommentcard,
    Moresellerproduct,
    Morepassengercar,
    PageCaption,
  },
  data() {
    return {
      comments: Productcomments,
      trailingCaption: "Mercedes Benz C200",
    };
  },
};
</script>

<style scoped>
.product-container {
  min-height: calc(100vh - 164px);
}
</style>
