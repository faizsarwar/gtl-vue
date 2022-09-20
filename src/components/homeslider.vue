<template>
    <swiper
      class="swiper"
      :modules="modules"
      :pagination='{ "clickable": true }'
      :autoplay="autoplay"
      
    >
    <swiper-slide class="slide m-2 "  :key="1" >
        <img :src="require('@/assets/img/pic1.jpg')"  class="card-image" alt="..."   >
    </swiper-slide>
    <swiper-slide class="slide m-2 "  :key="2" >
        <img :src="require('@/assets/img/1613647160777.jpeg')"  class="card-image" alt="..." style="width: 100% ; background-size: 'cover' ; background-repeat: 'no-repeat'; height:100%" >
    </swiper-slide>
    <!-- <swiper-slide class="slide m-2 "  :key="3" >
        <img :src="require('@/assets/img/pic3.jpg')"  class="card-image" alt="..." style="width: 100% ; background-size: 'cover' ; background-repeat: 'no-repeat'; height:100%" >
    </swiper-slide> -->
    <swiper-slide class="slide m-2 "  :key="4" >
        <img :src="require('@/assets/img/pic4.jpg')"  class="card-image" alt="..." style="width: 100% ; background-size: 'cover' ; background-repeat: 'no-repeat'; height:100%" >
    </swiper-slide>
    </swiper>
  </template>
  
  <script >
    import { defineComponent } from 'vue'
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

    },
    methods: {
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