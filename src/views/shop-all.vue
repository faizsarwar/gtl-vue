<template>
    <section class="" style="overflow-x:hidden">
        <div style="text-align: center;" class="m-5">
            <h1 style="font-family: fantasy;" class="heading"> Order Now </h1>
            <!-- {{this.allProducts}}
            <div class="row">
              {{this.subcategories}}
            </div> -->

        </div>
                <!-- Loader  -->
                <loading v-model:active="isLoading"
                 :loader="bars"
                 :width="width"
                 :height="height"
                 :color="color"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>

        <!-- container -->
        <div class="ml-3">
            <div class="row">
                <div class="col-2 mr-3" style="text-align: left;">
                    <h4 style="font-family: fantasy;" class="heading "> Category </h4>
                    <ul class="categories" style="font-family: Impact, Haettenschweiler, sans-serif;">
                        <!-- list of Categories -->
                        <li class='mt-2' v-for="item in this.allCategories" :key="item.id">
                            <router-link :to=" item.name_without_space " > {{item.title}} </router-link>
                            <div class="form-check" v-for="subcategory in this.subcategories[item.title]" :key="subcategory.id">
                              <input type="checkbox" value="" @click="say(subcategory.id)"  :id="'flexCheckDefault'+ subcategory.id">
                              <label class="form-check-label ml-5" for="checkbox">
                                {{subcategory.title}}
                              </label>   
                            </div>
                        </li>

                    </ul>
                </div>
                
                <div class="col-8 ml-3">

                  <div v-if="!this.allProducts.length ">
                    <h1 class="heading m-5">Sorry we are updating our website </h1>
                    <p class="m-5"><strong>PLEASE Call Toll- Free 1 (833) ANASAZI to place an order.</strong></p>
                  </div>
                  <div v-else>
                    <!-- Row -->
                    <div class="row">
                        <!-- Card -->
                        <div class="card m-2 " style="width: 28rem;" v-for="item in this.allProducts" :key="item.id">
                            <img :src= item.get_image  class="card-image" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b> {{item.name}}</b></h5>
                                <p class="card-text">{{item.priceRange}}</p>
                                <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
                            </div>
                        </div>


                        <!--  -->
              
              <!--  -->
                    </div>
                  </div>
                </div>
                
            </div>
        </div>

        <!--  Faqs-->
        <Faqs/>

    </section>


</template>



<script>
import Faqs from '../components/Faqs.vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'HomeView',
  data(){
      return {
          allProducts:[],
          allCategories:[],
          subcategories:{},
          isLoading: true,
          fullPage: true,
          checked: true,
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
    // best_seller_slides,
    Loading,
    Faqs,
    // Loading
  },
  mounted(){
    this.getAllProducts()
    this.getAllCategories()
    this.getAccountDetails()
    this.getAllsubCategories()
  },
  methods: {
      say(message) {

        console.log(message)
      },
      async getAllProducts() {
          this.$store.commit('setIsLoading', true)
          axios.get('/api/v1/products/')
          .then(response=>{
            this.allProducts=response.data
            console.log("data fetched")
          })
          .catch(error=>{
              console.log(error)
          })
          this.$store.commit('setIsLoading', false)
      },
      getAllCategories() {
        axios.get('/api/v1/category/')
          .then(response=>{
            this.allCategories=response.data;
            
          })
          .catch(error=>{
              console.log(error)
          })
      },
      // SubcategoryFromCategory/
      getAllsubCategories() {
        axios.get('/api/v1/SubcategoryFromCategory/')
          .then(response=>{
            this.subcategories=response.data;
            this.isLoading=false            
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
}
</script>