<template>
  <div class="home">
    <homeSwiper/>


  <div class="p-2 m-2">
    <Swiper/>    

  </div> 

  <Faqs/>

 <best_seller_slides/>

  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
// import Categories from '@/components/categories.vue'
import best_seller_slides from '../components/best-seller-slides.vue'
// import testemonials from '../components/testemonials.vue'
// import pdf from 'vue-pdf'
import Faqs from '../components/Faqs.vue'
import Swiper from '../components/swiper.vue'
import homeSwiper from '../components/homeslider.vue'
// import slide3d from '../components/slide3d.vue'
// import slide3 from '../components/slider3.vue'
import axios from 'axios'
// import compare_course from '../components/compare-course.vue'
// import explore_more_topics from '../components/explore-more-topics.vue'

import { defineComponent } from 'vue';

import 'vue3-carousel/dist/carousel.css';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

export default defineComponent({
  name: 'HomeView',
  data(){
      return {
          allProducts:[],
          allCategories:[],
          isLoading: true,
          fullPage: true,
          bars: "bars",
          color:"#07ad31",
          height: 120,
          width: 120,
          account_details:[]
      }
  },
  components: {
    // HelloWorld
    // blogs,
    // testemonials,
    // compare_course,
    // explore_more_topics,
    Faqs,
    best_seller_slides,
    Swiper,
    homeSwiper
    // pdf,
    // Carousel,
    // Slide,
    // slide3d,
    // slide3,
    // Loading,
    // Pagination,
    // Navigation,
    // Categories,
  },
  mounted(){
    this.getAllProducts()
    this.getAccountDetails()
  },
  methods: {
      async getAllProducts() {
          axios.get('/api/v1/products/')
          .then(response=>{
            this.allProducts=response.data;
            console.log("products fetched")
            // this.isLoading= false
          })
          .catch(error=>{
              console.log(error)
          })
      },
      getAccountDetails(){
        axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
          .then(response=>{
            this.account_details=response.data;
            // this.isLoading= false
          })
          .catch(error=>{
              console.log(error)
          })
      }
  }
})
</script>

<style scoped>

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.collections{
  background-size: cover;  
  background-repeat: no-repeat;
  height: 270px;
  overflow-y:hidden ;
}

.no-overflow{
  overflow-x:hidden;
  overflow-y:hidden;
}


.card-body .col {
    overflow-y:hidden !important;
    overflow-x:hidden !important;
}

p a b,label{
  color:#211ea6
}

.circular-square { border-top-left-radius: 50% 50%; border-top-right-radius: 50% 50%; border-bottom-right-radius: 50% 50%; border-bottom-left-radius: 50% 50%; }

li{
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
