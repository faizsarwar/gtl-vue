  
<template>
  <div class="page-sign-up m-5 row">
    <div class="container p-5" style="text:justify-center">
        <h1 class="heading">TRIM BY SUNMED PRODUCT LINE</h1>
        <div class="pl-5 pr-5 m-5">
            <p class="mt-lg-5">Introducing SUNMED™'s TRIM™ line of products, a revolutionary new way to approach weight loss, brought to you by the innovators behind all of SUNMEDs incredible line of CBD products!</p>
            <br>
            <p class="mt-lg-3">
            TRIM products are predominantly CBD and come with the introduction of two new cannabinoids, THCV and CBDV. THC-V, a compound in hemp known to naturally suppress your appetite. Studies conducted in conjunction with the MAYO clinic demonstrate the efficacy of the extract for weight loss, girth loss, BMI reduction and improvement of overall health.
            </p>
        </div>
        <h2 class="heading"><b>HOW IT WORKS</b></h2>
        <div class="pl-5 pr-5 m-5">
            <p class="mt-lg-5">THC-V directly binds with the CB1 Receptor (located in our Endocannabinoid System) and deactivates it. This action prevents appetite stimulation.</p>
            <br>
            <p class="mt-lg-3">
                 The recommended serving is 50mg per day over a 90-day introductory period. Clinical trial have shown up to 18lbs in weight reduction and up to 6 inches in waistline reduction resulting from consistent use of TRIM by SUNMED™ over the 90-day period (with averages of weight and waistline reductions of 9 pounds and 3 inches, respectively, results may vary).           
            </p>
        </div>
        <h2 class="heading"><b>THE BENEFITS</b></h2>
        <div class="pl-5 pr-5 m-5">
            <p class="mt-lg-5">The efficacy of this revolutionary new line of weight loss products is corroborated by a first-of-its-kind human clinical study, which showed a remarkable rate of success amongst participants spanning over 13 weeks. The results of the study confirm natural appetite suppressing benefits utilizing THC-V, the core component of the TRIM by SUNMED™ product line.</p>
            <br>
            <p class="mt-lg-3">
               Explore an all natural approach to weight loss. TRIM by SUNMED is scientifically backed by clinical trials with proven weight loss by 100% of participants, over a 13 week trial period.    
            </p>
        </div>
        <p>LET HEMP DO THE WORK.</p>
    
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


  </div>
</template>


<script>
import axios from 'axios'
export default {
name: 'trim_',
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
          axios.get('/api/v1/category/trim/')
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
