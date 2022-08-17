  
<template>
  <div class="page-sign-up m-5 row">

        <!-- loader -->
        <loading v-model:active="isLoading"
                 :loader="bars"
                 :width="width"
                 :height="height"
                 :color="color"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>

    <div class="container p-5" style="text:justify-center">
        <h1 class="heading">BEYOND BY SUNMED</h1>
        <div class="pl-5 pr-5 m-5">
            <p class="mt-lg-5">Experience a whole new world of hemp. Introducing an innovative new product line BEYOND by SUNMED. The BEYOND line is defined by an extract that is packed with 400 percent more minor cannabinoids than our conventional Full Spectrum formulation. Unlike any other products in the marketplace, BEYOND features more CBG, CBC, CBN, THC-V, and other beneficial compounds to create a cutting-edge “fuller” spectrum.</p>
            <br>
            <p class="mt-lg-3">
   BEYOND’s Indica formulations are more closely associated with soothing and relaxing terpene profiles and minor cannabinoids.  BEYOND’s Sativa formulation is packed with lively, uplifting terpenes and filled with CBG extract to provide an entirely unique experience         </p>
        </div>
        <b>Please call us at 203-826-7560 to place an order for the Beyond Products.  We must verify your age before purchase.</b>
    
    </div>

    <section class="p-4 container" v-if="this.allProducts.length ">

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
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
name: 'beyond_',
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
    Loading,
  },
    mounted(){
    this.getAllProducts()
    this.getAccountDetails()
  },
  methods: {
      async getAllProducts() {
          this.$store.commit('setIsLoading', true)
          axios.get('/api/v1/category/beyond/')
          .then(response=>{
            this.allProducts=response.data;
            this.isLoading=false
          })
          .catch(error=>{
              console.log(error)
          })
          this.$store.commit('setIsLoading', false)
      },
      getAccountDetails(){
        axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
          .then(response=>{
            this.account_details=response.data
          })
          .catch(error=>{
              console.log(error)
          })
      }
  }


}
</script>
<style scoped>
a{
    color: white;
    font-weight: bolder;
}
.form-label {
  /* display: inline-block;
  width: 140px; */
  margin-bottom: 2px;
  text-align: left;
  color: blue;
}
p{
    color: black;
}

h2 b {
    color: black;
}

</style>
