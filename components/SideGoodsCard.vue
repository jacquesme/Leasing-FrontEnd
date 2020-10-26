<template>

  <div class="side-goods-card">

    <div class="side-goods-card_content">

      <div class="side-goods-card_img-container relative">
        <div class="bg-accent-purple rounded-full h-8 w-8 flex items-center justify-center absolute ml-4 mt-4">
          <p class="text-white text-2xs">NEW</p>
        </div>
        <img class="max-w-full h-full object-contain" :src="sideitem.src"/>
        <div class="side-goods-card_overlay">
          <div class="side-goods-card_pencil-container">
            <a href="#">
              <PencilEdit class="side-goods-card_pencil-icon"/>
            </a>
          </div>
          <div class="side-goods-card_bin-container">
            <a href="#">
              <RubbishBin class="side-goods-card_bin-icon"/>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-grey-100 px-4">
        <h3 class="text-m text-black font-bold mb-2">{{ sideitem.name }}</h3>

        <div>
          <p class="goods-model text-xs text-black">Model: {{ sideitem.model }}</p>
          <p class="goods-transmission text-xs text-black">Transmission: {{ sideitem.transmission }}</p>
          <p class="text-m caption-style">$ {{ sideitem.price }}</p>
          <div class="flex justify-center pb-4">
            <button class="btn side-btn-purple">More details</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import PencilEdit from '~/assets/svg/pencil-edit-button.svg?inline';
  import RubbishBin from '~/assets/svg/rubbish-bin.svg?inline';
    export default {
      components: {PencilEdit, RubbishBin},
      name: "SideGoodsCard",
      props:['sideitem']
    }
</script>

<style lang="scss" scoped>
  .side-goods-card {
    border-radius: 0.375rem;
    display: inline-block;
    overflow: auto;

    &_content {
      background-color: #F2F2F2;
      height: auto;
      width: 200px;
    }

    &_img-container {
      position: relative;
      height: 160px;
      width: 200px;

      &:after {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.4);
        content: '\A';
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
          opacity: 1
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
      transform: translate( 0%, -35%);
      transition: all;
      transition-duration: 500ms;
      opacity: 0;
    }

    &_pencil-container {
      position: relative;
      margin-left: 0.5rem;
      display: inline-block;
      border: 1px solid white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    &_pencil-icon {
      position: absolute;
      top: 24%;
      left: 25%;
    }

    &_bin-container {
      position: relative;
      display: inline-block;
      margin-left: 0.5rem;
      border: 1px solid white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    &_bin-icon {
      position: absolute;
      top: 24%;
      left: 30%;
    }
  }
</style>

