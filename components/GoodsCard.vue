<template>
  <div class="goods-card w-full">
    <div class="goods-card_content overflow-x-hidden">
      <div class="goods-card_img-container">
        <img
          alt="car image"
          class="max-w-full h-full object-contain block m-auto"
          :src="mainitem.src"
        />
        <div
          class="goods-card_overlay grid grid-rows-1 grid-flow-col gap-2"
          :class="isRootName"
        >
          <div
            class="goods-card_pencil-container flex justify-center items-center float-left"
          >
            <a href="#" class="flex items-center">
              <PencilEdit class="goods-card_pencil-icon block m-0 m-auto" />
            </a>
          </div>
          <div
            class="goods-card_bin-container flex justify-center items-center float-right"
          >
            <a href="#" class="flex items-center" @click="sendData">
              <RubbishBin class="goods-card_bin-icon block m-0 m-auto" />
            </a>
          </div>
        </div>
      </div>

      <div class="bg-grey-100 pt-4 px-4 pb-4">
        <h3 class="text-m text-black font-bold mb-2">{{ mainitem.name }}</h3>
        <div class="grid sm:grid-cols-1 gap-0 xl:grid-cols-2 xl:gap-4">
          <div class="grid grid-cols-1">
            <div class="">
              <p class="goods-model text-xs text-black">
                Model: {{ mainitem.model }}
              </p>
            </div>
            <div class="">
              <p class="text-m">$ {{ mainitem.price }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="">
              <p
                class="goods-transmission text-xs text-black xl:float-right md:pr-5 pb-3"
              >
                Transmission: {{ mainitem.transmission }}
              </p>
            </div>
            <div class="">
              <button class="btn btn-purple xl:float-right w-full">
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PencilEdit from "@/assets/svg/pencil-edit-button.svg?inline";
import RubbishBin from "@/assets/svg/rubbish-bin.svg?inline";

export default {
  components: { PencilEdit, RubbishBin },
  props: ["mainitem"],
  computed: {
    isRootName() {
      return this.$route.name === "seller" ? "" : "hidden";
    },
  },
  methods: {
    sendData() {
      if (true) {
        this.$emit("open", this.mainitem);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-card {
  border-radius: 1rem;
  display: inline-block;
  overflow: auto;
  width: 100%;

  &_content {
    background-color: #f2f2f2;
    height: auto;
    width: 100%;
  }

  &_img-container {
    position: relative;
    height: 240px;
    width: 100%;

    &:after {
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      content: "\A";
      opacity: 0;
      width: 100%;
      height: 100%;
      transition: all;
      transition-duration: 1000ms;
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
      -webkit-transition: all 1s;
    }

    &:hover {
      &:after {
        opacity: 1;
      }

      .goods-card_overlay {
        opacity: 1;
        z-index: 10;
      }
    }
  }

  &_overlay {
    position: absolute;
    text-align: center;
    top: 20px;
    right: 20px;
    transition: all;
    transition-duration: 500ms;
    opacity: 0;
  }

  &_pencil-container {
    border: 1px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  &_bin-container {
    border: 1px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
}
</style>
