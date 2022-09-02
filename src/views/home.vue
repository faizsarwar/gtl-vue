<template>
  <div class="home">

  <div class="p-2 m-2">
  <Swiper/>    
  </div> 



  
  <!-- <section class="mt-3 mb-3   bg-danger">
    <div class="row  ">
      <div class="mr-auto pt-0 mt-0 pl-5"> 
         <slide3d/>
      </div>
      <div class="ml-auto pr-5">
      <a href="/shop-all">
        <h3 class="mr-5"><b style="color:#07ad31"> Shop More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg></b></h3>
      </a>
      </div>
    </div>
  </section> -->


 <!-- <slide3d/> -->


  <!--  Faqs-->
  <Faqs/>

 <best_seller_slides/>

  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
// import Categories from '@/components/categories.vue'
import best_seller_slides from '../components/best-seller-slides.vue'
// import testemonials from '../components/testemonials.vue'
import Faqs from '../components/Faqs.vue'
import Swiper from '../components/swiper.vue'
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
