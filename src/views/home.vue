<template>
  <div class="home">
      <!-- <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}
                      <img src="https://cdn.shopify.com/s/files/1/0279/0267/3029/files/3_2000x.jpg?v=1577358134"  alt=""  style="background-size:contain;  background-repeat: no-repeat; text-align: center;">

      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel> -->
      <!-- <h2>hi</h2> -->
        <!-- Product Disc -->
  <!-- <section style="background-color:white;">
    <div class="mt-2">
      <div class="row">
        <div class="col-lg " style=" text-align: left; color: black;">
          <div class=" mr-5 p-5 ">
            <div class="pr-5 pt-3">      
              <h1 class="mr-5  "><b> Education for the Real World </b></h1>
              <p class="mr-5  mt-4">We provide a wide range of courses for all interests. Our site offers the possibility to try out free classes in any subject and we have instructors who are available 24/7 via chat, email or phone calls if you ever need help with your learning objectives. You can try out our free classes in all subjects by saving them to your wish list. We offer real-world topics like coding, investing & entrepreneurship or math; science for those who enjoy learning about the natural world around them through data analysis.</p>
              <button button type="" class="btn btn-success btn-lg " style="height:65px; width : 300px; border-radius: 12px;font-size:16px">Try A Free class</button>      
            </div>
            <div class="row mt-1">
                <div class="col-4 mt-5">
                    <img src="../assets/img/trustpilot.png" alt=""  style="background-size:contain;  background-repeat: no-repeat; text-align: center;">
                </div>
                <div class="col-8 mt-5">
                    <img src="../assets/img/trustpilot-starts.png" alt=""  style="background-size:contain;  background-repeat: no-repeat; text-align: center;">
                </div>

            </div>
          </div>
        </div>
        <div class="col-lg">
          <img src="../assets/img/c.png" alt="" style="background-size:contain;  background-repeat: no-repeat; text-align: center;width:100%">
        </div>
      </div>
    </div>
  </section> -->

  <section class="p-2">

    <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="item in this.allProducts" :key="item.id">
      <div class="carousel__item m-5 ml-2 mr-2">
         <div class="card m-2 " style="width: 30rem;">
              <img :src= item.get_image  class="card-image" alt="...">
              <div class="card-body" style="height: 16rem;">
                  <h5 class="card-title"><b> {{item.name}}</b></h5>
                  <p class="card-text"><b> ${{item.price}} </b></p>
                  <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
              </div>
          </div>
      </div>
    </Slide>

      <template #addons>
      <Pagination />
      <Navigation />
      </template>
    </Carousel>
  </section>


  <section class="p-5" style="background-color:#e4f1f7">
    <h4>We’d love to hear what you think!</h4>
    <button type="button" style="border-radius:20px; background-color:white; border-color: black;" class="p-3 mt-3 btn" >
      Give feedback
    </button>
  </section>


  <!--  Faqs-->
  <Faqs/>
        <loading v-model:active="isLoading"
                 :loader="bars"
                 :width="width"
                 :height="height"
                 :color="color"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>


  <section class="p-4" >

    <div class="row pl-5 pr-5">
      <div class="mr-auto">
        <h1 class="ml-3"><b style="color:#07ad31"> Top Deals Today </b></h1>
      </div>
      <div class="ml-auto">
      <a href="/shop-all">
        <h3 class="mr-5"><b style="color:#07ad31"> Shop More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></b></h3>
</a>
      </div>
    </div>
    <div class="row pl-5 pr-5">
      <div class="col-3 m-0" v-for="item in this.allProducts.slice(0,4)" :key="item.id">
         <div class="card m-2 " style="width: 30rem;">
              <img :src= item.get_image  class="card-image" alt="...">
              <div class="card-body" style="height: 16rem;">
                  <h5 class="card-title"><b> {{item.name}}</b></h5>
                  <p class="card-text"><b> ${{item.price}} </b></p>
                  <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
              </div>
          </div>
      </div>
    </div>
  
  </section>

  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
// import Categories from '@/components/categories.vue'
// import best_seller_slides from '../components/best-seller-slides.vue'
// import testemonials from '../components/testemonials.vue'
import Faqs from '../components/Faqs.vue'
import axios from 'axios'
// import compare_course from '../components/compare-course.vue'
// import explore_more_topics from '../components/explore-more-topics.vue'

import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

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
          height: "120",
          width: "120",
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
    // best_seller_slides
    Carousel,
    Slide,
    Loading,
    Pagination,
    Navigation,
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
            this.isLoading= false
          })
          .catch(error=>{
              console.log(error)
          })
      },
      getAccountDetails(){
        axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
          .then(response=>{
            this.account_details=response.data;
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
