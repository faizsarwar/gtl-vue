<template>
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
</template>

<script>
import axios from 'axios'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
export default {
  name: "slider3-",
  data() {
    return {
      allProducts: [],
    };
  },
  components: {
    // HelloWorld
    Carousel,
    Slide,
    // Loading,
    Pagination,
    Navigation,
    // Categories,
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
