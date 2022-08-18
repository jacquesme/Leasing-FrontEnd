<template>
  <div class="side-goods-card w-full">
    <div class="side-goods-card_content md:w-full rounded-md">
      <div class="side-goods-card_img-container relative w-full">
        <div
          class="bg-accent-purple rounded-full h-8 w-8 flex items-center justify-center absolute ml-4 mt-4"
        >
          <p class="text-white text-2xs">NEW</p>
        </div>
        <img
          class="max-w-full h-full object-contain block m-auto"
          :src="sideitem.src"
        />
        <div class="side-goods-card_overlay grid grid-rows-1 grid-flow-col gap-4 absolute ml-4 mt-4">
          <div
            class="side-goods-card_pencil-container flex justify-center items-center"
          >
            <a href="#" class="flex items-center">
              <Penciledit
                class="side-goods-card_pencil-icon block m-0 m-auto"
              />
            </a>
          </div>
          <div
            class="side-goods-card_bin-container flex justify-center items-center"
          >
            <a href="#" class="flex items-center">
              <Rubbishbin class="side-goods-card_bin-icon block m-0 m-auto" />
            </a>
          </div>
        </div>
      </div>

      <div class="bg-grey-100 px-4 rounded-md">
        <h3 class="text-m text-black font-bold pt-2">
          {{ sideitem.name }}
        </h3>

        <div>
          <p class="goods-model text-xs text-black">
            Model: {{ sideitem.model }}
          </p>
          <p class="goods-transmission text-xs text-black">
            Transmission: {{ sideitem.transmission }}
          </p>
          <p class="text-m caption-style">$ {{ sideitem.price }}</p>
          <div class="flex md:justify-center pb-4">
            <button class="side-btn-purple w-full">More details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Penciledit from "@/assets/svg/pencil-edit-button.svg?inline";
import Rubbishbin from "@/assets/svg/rubbish-bin.svg?inline";

export default {
  components: { Penciledit, Rubbishbin },
  props: ["sideitem"],
};
</script>

<style lang="scss" scoped>
.side-goods-card {
  border-radius: 0.375rem;
  display: inline-block;
  overflow: hidden;

  &_content {
    background-color: #f2f2f2;
    height: auto;
  }

  &_img-container {
    position: relative;
    height: 160px;

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

      .side-goods-card_overlay {
        opacity: 1;
        z-index: 10;
      }
    }
  }

  &_overlay {
    position: absolute;
    margin-left: -40px;
    text-align: center;
    top: 15%;
    left: 73%;
    transform: translate(0%, -35%);
    transition: all;
    transition-duration: 500ms;
    opacity: 0;
  }

  &_pencil-container {
    //position: relative;
    //display: inline-block;
    border: 1px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  &_bin-container {
    //display: inline-block;
    //margin-left: 0.3rem;
    border: 1px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
}
</style>
