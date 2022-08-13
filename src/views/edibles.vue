  
<template>
  <div class="page-sign-up m-5 row">
    <div class="container p-5" style="text:justify-center">
        <h1 class="heading">EDIBLES</h1>
        <div class="pl-5 pr-5 m-5">
            <p class="mt-lg-5">Edible treats are a fun way to consume high-quality CBD that lets you snack with a <br> purpose. Ingesting CBD edibles takes a little bit longer to kick in, but they also last a <br> little longer as they pass through the entire digestive system 
             </p>
            <p class="mt-lg-5">Choose from premium broad or full spectrum <br> CBD gummy bears, broad spectrum peach rings, or our assorted flavor of CBD hard candies.</p>
        </div>
    </div>

  </div>


    <section class="p-4 container" v-if="this.allProducts.length ">

    <div class="row pl-5 pr-5">
      <div class="mr-auto">
        <h1 class="ml-3"><b style="color:#07ad31"> Top Deals Today </b></h1>
      </div>
      <div class="ml-auto">
        <h3 class="mr-5"><b style="color:#07ad31"> Shop More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></b></h3>
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

</template>


<script>
import axios from 'axios'

export default {
name: 'edibles_',
  data(){
      return {
          allProducts:[],
          allCategories:[],
          isLoading: true,
          account_details:[]
      }
  },
    mounted(){
    this.getAllProducts()
    this.getAccountDetails()
  },
  methods: {
      async getAllProducts() {
          this.$store.commit('setIsLoading', true)
          axios.get('/api/v1/category/edibles/')
          .then(response=>{
            this.allProducts=response.data
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
