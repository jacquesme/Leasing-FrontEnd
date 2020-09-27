<template>
  <div class="bg-grey-400 w-full">
    <div class="home-container md:w-75 m-auto bg-white">
      <div class="hidden md:block">
        <Nav/>
      </div>
      <div class="ml-8 md:hidden">
          <SearchBar/>
      </div>

      <section class="banner-section bg-grey-300 grid md:grid-cols-2 px-20 py-6">
        <div class="inline-block w-11/12 md:w-9/12 mt-8">
          <h1 class="font-bold text-4xl">Autolizing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tincidunt libero. Duis.</p>
          <button class="btn btn-purple mt-4">Search product</button>
        </div>
        <div class="hidden md:inline-block">
          <img src="../assets/img/audiQ5.png" alt="audiQ5" class="audi w-4/5 h-auto">
        </div>
      </section>

      <div class="px-0">
        <div class="bg-white pt-8 px-4">

            <div class="main flex flex-wrap md:ml-4 md:flex-no-wrap flex-col-reverse md:flex-row">
              <div class="parent1 flex flex-col flex-no-wrap">
                <div class="side-title flex mb-4">
                  <div class="bg-accent-purple w-1 h-8"></div>
                  <h1 class="text-accent-purple font-bold ml-4">NEW LISTINGS</h1>
                </div>
                <SideProductCard v-for="(sideItem, key) in sideItems" :key="key" :sideItem="sideItem"/>
              </div>
              <div class="parent2 flex flex-row flex-wrap md:mt-12">
                <ProductCard v-for="(mainItem, key) in mainItems" :key="key" :mainItem="mainItem"/>
              </div>
            </div>

        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  </div>

</template>

<script>
  import Nav from '~/layouts/nav.vue';
  import Footer from '~/layouts/footer.vue';
  import SearchBar from '~/components/SearchBar.vue';
  import ProductCard from '~/components/GoodsCard.vue';
  import SideProductCard from '~/components/SideGoodsCard.vue';
  import AudiQ5 from '~/assets/img/audiQ5.png';

    export default {
      components: {Nav, Footer, SearchBar, AudiQ5, ProductCard, SideProductCard},
      name: "homepage",
      data() {
        return {
          sideItems:[
            {
              name: 'MASERATI',
              model: 'Quattroprote',
              transmission: 'auto',
              price: '520.00',
              src: require('~/assets/img/maserati.png')
            },
            {
              name: 'ASTON MARTIN',
              model: 'Vantage',
              transmission: 'auto',
              price: '720.00',
              src: require('~/assets/img/aston.png')
            },
            {
              name: 'FERRARI',
              model: 'Spider 430',
              transmission: 'auto',
              price: '770.00',
              src: require('~/assets/img/ferrari.png')
            },
            {
              name: 'LAMBORGHINI',
              model: 'Huracan',
              transmission: 'auto',
              price: '970.00',
              src: require('~/assets/img/lambo.png')
            },
            {
              name: 'MERCEDES-BENZ',
              model: 'Slr',
              transmission: 'auto',
              price: '820.00',
              src: require('~/assets/img/slr.png')
            }
          ],
          mainItems:[
            {
              name: 'BMW',
              model: '634Ci',
              transmission: 'auto',
              price: '480.00',
              src: require('~/assets/img/635.png')
            },
            {
              name: 'MERCEDES-BENZ',
              model: 'C200',
              transmission: 'auto',
              price: '220.00',
              src: require('~/assets/img/c200.png')
            },
            {
              name: 'FORD',
              model: 'Focus',
              transmission: 'auto',
              price: '120.00',
              src: require('~/assets/img/focus.png')
            },
            {
              name: 'HONDA',
              model: 'Accord',
              transmission: 'auto',
              price: '170.00',
              src: require('~/assets/img/honda.png')
            },
            {
              name: 'HUMMER',
              model: 'H2o',
              transmission: 'auto',
              price: '320.00',
              src: require('~/assets/img/hummer.png')
            },
            {
              name: 'KIA',
              model: 'Optima',
              transmission: 'auto',
              price: '320.00',
              src: require('~/assets/img/optima.png')
            },
            {
              name: 'AUDI',
              model: 'Q7',
              transmission: 'auto',
              price: '430.00',
              src: require('~/assets/img/q7.png')
            },
            {
              name: 'AUDI',
              model: 'Rs4',
              transmission: 'auto',
              price: '400.00',
              src: require('~/assets/img/rs4.png')
            },
            {
              name: 'TOYOTA',
              model: 'Scion',
              transmission: 'auto',
              price: '100.00',
              src: require('~/assets/img/scion.png')
            },
            {
              name: 'MERCEDES-BENZ',
              model: 'Ml 350',
              transmission: 'auto',
              price: '310.00',
              src: require('~/assets/img/ml350.png')
            },
            {
              name: 'MERCEDES-BENZ',
              model: 'Sl 500',
              transmission: 'auto',
              price: '380.00',
              src: require('~/assets/img/sl500.png')
            },
            {
              name: 'BMW',
              model: 'i8',
              transmission: 'auto',
              price: '410.00',
              src: require('~/assets/img/i8.png')
            },
            {
              name: 'MERCEDES-BENZ',
              model: 'Glc 250',
              transmission: 'auto',
              price: '280.00',
              src: require('~/assets/img/glc.png')
            },
            {
              name: 'PORSCHE',
              model: 'Cayman',
              transmission: 'auto',
              price: '330.00',
              src: require('~/assets/img/caiman.png')
            },
            {
              name: 'AUDI',
              model: 'A6',
              transmission: 'auto',
              price: '290.00',
              src: require('~/assets/img/a6.png')
            }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
