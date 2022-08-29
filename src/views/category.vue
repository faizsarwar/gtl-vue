<template>
    <section class="">
        <div style="text-align: center;" class="m-5">
            <h1 style="font-family: fantasy;" class="heading"> Order now </h1>
        </div>

        <!-- container -->
        <div class="ml-3">
            <div class="row">
                
                <div class="col-3 " style="text-align: left;">
                    <h4 style="font-family: fantasy;" class="heading "> Category </h4>
                    <ul class="categories" style="font-family: Impact, Haettenschweiler, sans-serif;">
                        <!-- list of Categories -->
                        <li class='mt-2' v-for="item in this.allCategories" :key="item.id">
                            <a :href="'/categories/' + item.name_without_space " > {{item.title}} </a>
                        </li>

                    </ul>
                </div>

                <div class="col-9 ">
                  <div v-if="!this.allProducts.length ">
                    <h1 class="heading m-5">Sorry we are updating our website </h1>
                    <p class="m-5"><strong>PLEASE Call Toll- Free 1 (833) ANASAZI to place an order.</strong></p>
                  </div>
                  <div v-else>
                    <!-- Row -->
                    <div class="row">
                        <!-- Card -->
                        <div class="card m-2 " style="width: 18rem;" v-for="item in this.allProducts" :key="item.id">
                            <img :src= item.get_image  style="height: 350px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b> {{item.name}}</b></h5>
                                <p class="card-text">{{item.priceRange}}</p>
                                <router-link :to="'/products/'+item.id" class="btn btn btn-success">Quick view</router-link>
                            </div>
                        </div>

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
// import blogs from '../components/blogs.vue'
// import testemonials from '../components/testemonials.vue'
// import best_seller_slides from '../components/best-seller-slides.vue'
import Faqs from '../components/Faqs.vue'
import axios from 'axios'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/blogs.vue'
export default {
  name: 'HomeView',
  data(){
      return {
          allProducts:[],
          allCategories:[],
          category: this.$route.params.category
      }
  },
  components: {
    Faqs
  },
  mounted(){
    this.getAllProducts()
    this.getAllCategories()
  },
  methods: {
      getAllProducts() {
          axios.get('/api/v1/category/' + this.category)
          .then(response=>{
            this.allProducts=response.data
          })
          .catch(error=>{
              console.log(error)
          })
      },
      getAllCategories() {
        axios.get('/api/v1/category/')
          .then(response=>{
            this.allCategories=response.data
          })
          .catch(error=>{
              console.log(error)
          })
      }
  }
}
</script>
