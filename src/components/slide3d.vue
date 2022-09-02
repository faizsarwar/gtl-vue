<template>
  <div class="flip-example">
    <swiper
      class="swiper"
      :modules="modules"
      :effect="'flip'"
      :grab-cursor="true"
      :pagination="false"
      :navigation="true"
    >
      <swiper-slide v-for="item in this.allProducts" :key="item.id">
        <div class="carousel__item ">
            <div class="card " style="width: 30rem;">
                <img :src= item.get_image  class="card-image" alt="...">
                <div class="card-body" style="height: 16rem;">
                    <h5 class="card-title"><b> {{item.name}}</b></h5>
                    <p class="card-text"><b> ${{item.price}} </b></p>
                    <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
                </div>
            </div>
        </div>
    
      </swiper-slide>
    </swiper>
  </div>
</template>

<script >
  import { defineComponent } from 'vue'
  import { Pagination, Navigation, EffectFlip } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/effect-flip'
  import axios from 'axios'

  export default defineComponent({
    name: 'swiper-example-3d-flip',
    title: '3D Flip effect',
      data(){
      return {
          allProducts:[],
      }
  },
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
      mounted(){
    this.getAllProducts()
  },
  methods: {
    async getAllProducts() {
          axios.get('/api/v1/products/')
          .then(response=>{
            this.allProducts=response.data.slice(0,6);
            console.log("products fetched")
            // this.isLoading= false
          })
          .catch(error=>{
              console.log(error)
          })
      },
    },
    setup() {
      return {
        modules: [Pagination, Navigation, EffectFlip]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import './variables.scss';
  @import './mixins.scss';
  @import './style.scss';

  .flip-example {
    position: relative;
  }

  .swiper {
    width: 300px;
    height: 300px;
    padding: 50px;
    box-sizing: content-box;

    .slide {
      width: 300px;
      height: 300px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>