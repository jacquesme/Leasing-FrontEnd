<template>
  <div class="goods-card">
    <div class="goods-card_content">
      <div class="goods-card_img-container">
        <img class="goods-card_image" src="~/assets/img/car.jpg"/>
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
        <h3 class="goods-name text-m text-black mb-2">{{ content.name }}</h3>

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
    display: inline-block;
    border-radius: 0.375rem;
    overflow: auto;
    &_content {
      background-color: #F2F2F2;
      width: 300px;
      height: auto;
      .goods-card_img-container {
        position: relative;
        width: 300px;
        height: 240px;
        &:after {
          content: '\A';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0,0,0,0.4);
          opacity: 0;
          transition: all;
          transition-duration: 1000ms;
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          -webkit-transition: all 1s;
        }
        .goods-card_image {

        }
        .goods-card_overlay {
          transition: all;
          transition-duration: 500ms;
          opacity: 0;
          position: absolute;
          text-align: center;
          top: 15%;
          left: 73%;
          transform: translate(-20%, -55%);
          .goods-card_pencil-container {
            position: relative;
            display: inline-block;
            margin-left: 0.5rem;
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
        &:hover:after {
          opacity: 1
        }
        &:hover .goods-card_overlay {
          opacity: 1;
          z-index: 10;
        }
      }

    }
  }
</style>
