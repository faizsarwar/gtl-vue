<template>
    <section class="" style="overflow-x:hidden">
        <div style="text-align: center;" class="m-5">
            <h1 style="font-family: fantasy;" class="heading"> Order Now </h1>
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
                <div class="col-sm-3 mr-3 w3-monospace" style="text-align: left;">
                    <h4 style="font-family: fantasy;" class="heading "> Category </h4>
                    <ul class="categories ml-5">
                        <!-- list of Categories -->
                        <li class='mt-2' v-for="item in this.allCategories" :key="item.id">
                            <a :href="'/categories/' + item.name_without_space "  > {{item.title}} </a>
                            <div class="form-check" v-for="subcategory in this.subcategories[item.title]" :key="subcategory.id">
                              <input type="checkbox" value="" @click="say(subcategory.id)"  :id="'flexCheckDefault'+ subcategory.id">
                              <label class="form-check-label ml-5" for="checkbox" style="font-weight: normal; color:black !important">
                                {{subcategory.title}}
                              </label>   
                            </div>
                        </li>

                    </ul>
                </div>
                
                <div class="col-lg ml-3">

                  <div v-if="!this.previousProducts.length ">
                    <h1 class="heading m-5">Sorry no Products are available now </h1>
                    <p class="m-5"><strong>PLEASE Call  (952) 405-8181  to place an order.</strong></p>
                  </div>
                  <div v-else>
                    <!-- Row -->
                    <div class="row">
                        <!-- Card -->
                        <div class="col-sm-3" v-for="item in this.previousProducts" :key="item.id">
                          <div class="card ml-5 mr-5 mt-4 mb-4" >
                              <img :src= item.get_image  class="card-image" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title"><b style="color: #2a7494;"> {{item.name}}</b></h5>
                                  <p class="card-text">${{item.price}}</p>
                                  <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
                              </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
                
            </div>
        </div>

        <!--  Faqs-->
        <Faqs/>
         <best_seller_slides/>
    </section>


</template>



<script>
import Faqs from '../components/Faqs.vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import best_seller_slides from '../components/best-seller-slides.vue'
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'HomeView',
  data(){
      return {
          allProducts:[],
          allCategories:[],
          // filtered products will svave here
          counter:0,
          previousProducts:[],
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
    best_seller_slides,
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
        const cb = document.querySelector('#flexCheckDefault'+ message);
        if (cb.checked){
          // checking if counter is 0 (means it is hit for the fiurst time) so we have to clear the array to store filtered results 
          if (this.counter==0){
            this.previousProducts=[]
          }
          for (let i = 0; i < this.allProducts.length; i++) {
            if (this.allProducts[i]['Sub_category'] == message){
              this.previousProducts.push(this.allProducts[i])
              // console.log(this.previousProducts)
            }
          }
          this.counter+=1
        }
        else{

          for (let i = 0; i < this.previousProducts.length; i++) {
            if (this.previousProducts[i]['Sub_category'] == message){
              this.previousProducts.splice(i)
              console.log("matched")
            }
          }    
          this.counter-=1    
          // checking if the counter is 0 then we will display all products
          if (this.counter==0){
            this.previousProducts=this.allProducts
          } 

        }
      },
      async getAllProducts() {
          this.$store.commit('setIsLoading', true)
          axios.get('/api/v1/products/')
          .then(response=>{
            this.allProducts=response.data
            // at initial we will show all products
            this.previousProducts=response.data
                
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