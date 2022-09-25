<template>
    <section class="">
        <div style="text-align: center;" class="m-5">
            <h1 style="font-family: fantasy;" class="heading"> Order now </h1>
        </div>
                <!-- Loader  -->
                <loading v-model:active="isLoading"
                 :loader="bars"
                 :width="width"
                 :height="height"
                 :color="color"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>

                     <div class="row pl-5 pr-5">
      <!-- <div class="mr-auto">
        <h1 class="ml-3"><b style="color:#07ad31"> Top Deals Today </b></h1>
      </div> -->
      <div class="ml-auto">
      <a href="/shop-all">
        <h3 class="mr-5"><b style="color:#2a7494"> Shop More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></b></h3>
</a>
      </div>
    </div>

        <!-- container -->
        <div class="ml-3">
            <div class="row">
                
                <div class="col-sm-3 w3-monospace " style="text-align: left;">
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

                <div class="col-lg ">
                  <div v-if="!this.previousProducts.length ">
                    <h1 class="heading m-5">Sorry no Products are available now </h1>
                    <p class="m-5"><strong>PLEASE Call  (952) 405-8181  to place an order.</strong></p>
                  </div>
                  <div v-else>
                    <!-- Row -->
                    <div class="row">
                      <div class="col-sm-3">
                        <!-- Card -->
                        <div class="card  ml-5 mr-5 mt-4 mb-4"  v-for="item in this.previousProducts" :key="item.id">
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
// import blogs from '../components/blogs.vue'
// import testemonials from '../components/testemonials.vue'
import best_seller_slides from '../components/best-seller-slides.vue'
import Faqs from '../components/Faqs.vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/blogs.vue'
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
          account_details:[],
          category: this.$route.params.category
      }
  },
  components: {
    Faqs,
    Loading,
    best_seller_slides
  },
  mounted(){
    this.getAllProducts()
    this.getAllCategories()
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
      getAllProducts() {
          axios.get('/api/v1/productscategory/' + this.category)
          .then(response=>{
            this.allProducts=response.data
            // at initial we will show all products
            this.previousProducts=response.data
          })
          .catch(error=>{
              console.log(error)
          })
      },
      getAllCategories() {
        axios.get('/api/v1/category/')
          .then(response=>{
            this.allCategories=response.data
             this.isLoading=false    
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
  }
}
</script>
