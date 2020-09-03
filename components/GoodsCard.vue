<template>
  <div class="goods-card">

    <div class="goods-card_content">

      <div class="goods-card_img-container">
        <img src="~/assets/img/car.jpg"/>
        <div class="goods-card_overlay">
          <div class="goods-card_pencil-container">
            <a href="#">
              <PencilEdit class="goods-card_pencil-icon"/>
            </a>
          </div>
          <div class="goods-card_bin-container">
            <a href="#">
              <RubbishBin class="goods-card_bin-icon"/>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-grey-100 pt-4 px-4 pb-2">
        <h3 class="text-m text-black mb-2">{{ content.name }}</h3>

        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="col-span-2 mb-4">
            <p class="goods-model text-xs text-black">Model: {{ content.model }}</p>
          </div>
          <div class="col-span-3 md:ml-10">
            <p class="goods-transmission text-xs text-black">Transmission: {{ content.transmission }}</p>
          </div>
          <div class="col-span-2">
            <p class="text-m caption-style">$ {{ content.price }}</p>
          </div>
          <div class="col-span-3 md:ml-5">
            <button class="btn btn-purple">More details</button>
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
    props: ['content']
  }
</script>

<style lang="scss" scoped>
  .goods-card {
    border-radius: 0.375rem;
    display: inline-block;
    overflow: auto;
    &_content {
      background-color: #F2F2F2;
      height: auto;
      width: 300px;
      .goods-card_img-container {
        position: relative;
        height: 240px;
        width: 300px;
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
        .goods-card_overlay {
          position: absolute;
          text-align: center;
          top: 15%;
          left: 73%;
          transform: translate(-20%, -55%);
          transition: all;
          transition-duration: 500ms;
          opacity: 0;
          .goods-card_pencil-container {
            position: relative;
            margin-left: 0.5rem;
            display: inline-block;
            border: 1px solid white;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            .goods-card_pencil-icon {
              position: absolute;
              top: 24%;
              left: 25%;
            }
          }
          .goods-card_bin-container {
            position: relative;
            display: inline-block;
            margin-left: 0.5rem;
            border: 1px solid white;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            .goods-card_bin-icon {
              position: absolute;
              top: 24%;
              left: 30%;
            }
          }

        }
        &:hover {
          &:after {
            opacity: 1
          }
          .goods-card_overlay {
            opacity: 1;
            z-index: 10;
          }
        }
      }
    }
  }
</style>
