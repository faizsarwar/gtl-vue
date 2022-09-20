<template>
  <section class="p-4" >

    <div class="row pl-5 pr-5">
      <div class="mr-auto">
        <h1 class="ml-3"><b style="color: #2a7494;"> Top Deals Today </b></h1>
      </div>
      <div class="ml-auto">
      <a href="/shop-all">
        <h3 class="mr-5"><b style="color: #2a7494;"> Shop More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07ad31" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></b></h3>
</a>
      </div>
    </div>
    <div class="row pl-5 pr-5">
      <div class="col-sm-3 m-0" v-for="item in this.allProducts.slice(0,4)" :key="item.id">
         <div class="card m-2 " style="width: 30rem;">
              <img :src= item.get_image  class="card-image" alt="...">
              <div class="card-body" style="height: 16rem;">
                  <h5 class="card-title"><b style="color: #2a7494;"> {{item.name}}</b></h5>
                  <p class="card-text"><b style="color: #2a7494;"> ${{item.price}} </b></p>
                  <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
              </div>
          </div>
      </div>
    </div>
  
  </section>
  </template>

<script>
import axios from 'axios'
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: "blogs-1",
  data() {
    return {
      allProducts: [],
    };
  },
  components: {
        // Loading
    },
  mounted() {
    this.getAllProducts();
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
div{
  color:blue;
}
.card , .card-body{
    overflow-x:hidden;
}
.card-img-top{
    height:200px;
}
.card{
    border-radius: 12px;
}
</style>
