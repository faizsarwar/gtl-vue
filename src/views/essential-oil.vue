<template>
  <div class="home">
    <h1><strong style="color:black"> CBD 101 </strong></h1>

    <h2 class="mt-3 mb-3">What are the Benefits and difference of CBD-Only Products?</h2>

    <div class="row mt-5">
      <div class="col-4">
          <img :src="require('@/assets/img/cbd1.jpg')" alt="" class="mt-2 mb-5 " style="width:80%; ">
      </div>
      <div class="col-8 p-4">
        <p class="mt-5 p-5" style="color:black;">
          CBD has very different effects from THC. The most vivid example is the lack of intoxication. It is the compound of choice for those who don’t tolerate THC well or are afraid of failing a drug test. Cannabidiol is also great for general supplementation because it supports the proper functioning of the endocannabinoid system.  CBD is mostly used to relieve: Stress, Sleep deprivation, Psychosis, Physical discomfort, Tiredness, Endocannabinoid deficiencies.  CBD also has a strong affinity with the immune system, regulating communication between immune cells and improving its performance.
        </p>
      </div>
    </div>

    <h2 class="mt-3 mb-3">What are the Benefits and difference of THC-Only Products?</h2>

    <div class="row mt-5">
      <div class="col-8 p-4">
        <p class="mt-5 p-5" style="color:black;">
          Please note that we cannot make any health claims regarding cannabis compounds. We always encourage you to do your own research and explore the world of cannabinoids and terpenes.  Below we only share information about the potential benefits of THC-only and CBD-only products. Some of the benefits are:  Deep relaxation, Relief from stress, Reduced discomfort and stiffness, Regulation of the sleep cycle, Modulation of the gut microbiome and potential Improved appetite.        </p>
      </div>
      <div class="col-4">
          <img :src="require('@/assets/img/cbd2.png')" alt="" class="mt-2 mb-5 " style="width:80%; ">
      </div>

    </div>

    <h4 class="pl-5 pr-5">    
      THC effects usually reach their peak when you consume an edible. When you eat a cannabis brownie, for example, THC gets metabolized in the liver, transforming into 11-hydroxy-THC. This metabolite is five times stronger than THC. So, when you smoke cannabis and take 10 mg of THC, it enters your lungs and goes to the bloodstream through the lung tissue. A 10 mg THC edible translates to 50 mg of THC when it comes to its potency.
    </h4>


    <h2 class="mt-5 mb-5">The Natural Science of Cannabis and our Body Working Together...</h2>

      <img :src="require('@/assets/img/1.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">

    <h2 class="mt-5 mb-5">This amazing plant and our body has a natural harmonious rhythm...</h2>

    <img :src="require('@/assets/img/2.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">

    <h2 class="m-5 pl-5 pr-5">As we evolve and grow our knowledge of this wild magical plant, we are learning that there is so much more to discover beyond just the science...</h2>

    <img :src="require('@/assets/img/3.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
      </div>
    </div>

   <h2 class="mt-5 mb-5 pl-5 pr-5">And we are just starting to truly discover the many benefits as we continue the journey to unlock it's incredbile nature...</h2>

    <img :src="require('@/assets/img/4.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">

   <h2 class="mt-5 mb-5 pl-5 pr-5">Join Our Journey and Learn More About How CBD can Help You Today, click below and take charge, get involved and let's Grow Together...</h2>

    <button class="btn btn-success mb-5"> Get INVOLVED</button>


  </div>
</template>

<script>


import { defineComponent } from 'vue';

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
  },
  mounted(){
    this.getAllProducts()
    this.getAccountDetails()
  },
  methods: {

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
