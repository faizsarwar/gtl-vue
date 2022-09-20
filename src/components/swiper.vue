<template>
  <swiper
    class="swiper"
    :modules="modules"
    direction="vertical"
    :pagination='{ "clickable": true }'
    :autoplay="autoplay"
    
  >
    <swiper-slide class="slide m-2 " v-for="item in this.allProducts" :key="item.id" >
        <div class="row w-100 pl-5 pr-5">
            <div class="col-6 pl-5">
                <img :src= item.get_image  class="card-image" alt="...">
            </div>   
            <div class="container3 col-6 pr-5 text-left">
                
                <a :href="'/products/' + item.id ">
                    <div>
                        <h4><b style="color:black !important"> {{item.name}}</b></h4>
                        <p ><b style="color:black !important"> ${{item.price}} </b></p>
                    </div>
                      <h3 class="mr-2"><b style="color:#07ad31"> view <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                      </svg></b></h3>
                  </a>
                
            </div>         
        </div>

    </swiper-slide>
  </swiper>
</template>

<script >
  import { defineComponent } from 'vue'
  import axios from 'axios'
  import { Pagination, Autoplay } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/autoplay'

  export default defineComponent({
    name: 'swiper-example-vertical-',
    title: 'Vertical slider',
    url: import.meta.url,
      data(){
      return {
          allProducts:[],
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
      }
  },
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
        modules: [Pagination,Autoplay]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import './variables.scss';
  @import './mixins.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper();
  }

  div.container3 {

   position: relative }              /* 1 */
div.container3 a {
   margin: 0;
   position: absolute;               /* 2 */
   top: 40%;                         /* 3 */
   transform: translate(0, -40%) }   /* 4 */

  .slide {
    @include swiper-slide();
  }
</style>