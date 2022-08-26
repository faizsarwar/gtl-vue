<template>
  <div class="home container pb-5 pt-5">
    <h1 class="mt-5 mb-5 pb-5"><strong style="color:black" >  Terms of Service </strong></h1>

    <div class="text-left mt-5 pt-5 mb-5 pb-5">
        <h3> <strong style="color:black" >In General </strong></h3>
        <p class="mb-3">Grow To Life owns and operates this Website. The terms and conditions set forth in this document govern your relationship with Grow To Life and your use of the website located at https://growtolife.com(“Website”).
</p>
<br>
        <p class="mb-3">Your access to and your use of this Website, and the purchase and sale of the products and services that are available through this Website, (collectively, the “Services”) are subject to the following terms, conditions and notices (the “Terms of Service”). By using the Services you are agreeing to each of these Terms of Service, all as may be updated by Grow To Life from time to time. You should check this page regularly to take notice of any changes that Grow To Life may have made to these Terms of Service.
</p>
<br>
        <p class="mb-3">Access to this Website is permitted on a temporary basis, and Grow To Life reserve the right to withdraw or amend the Services without notice. Grow To Life will not be liable if for any reason this Website is unavailable at any time or for any period. From time to time, Grow To Life may restrict access to some parts or to all of this Website. Grow To Life will not be liable if for any reason some or any portion of this Website is unavailable at any time or for any period.</p>
<br>
<p class="mb-3">This Website may contain links to other websites that are not operated by Grow To Life (the “Linked Sites”). Grow To Life has no control over the Linked Sites and accepts no responsibility for them, nor for any loss or damage that may arise from your use of the Linked Sites. Your use of the Linked Sites will be subject to the terms of use and service contained within each such Linked Site.</p>
    </div>

  </div>
</template>

<script>


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'terms-policy',
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

p{
    color:black;
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
