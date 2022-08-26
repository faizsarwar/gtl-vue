<template>
  <div class="home container pb-5 pt-5">
    <h1 class="mt-5 mb-5 pb-5"><strong style="color:black" >  Shipping </strong></h1>

    <div class="text-left mt-5 pt-5 mb-5 pb-5">
       
        <p class="mb-3">We are happy to offer free ground shipping & handling within the U.S. for all orders over $99.00. On orders less than $99.00 within the U.S., shipping & handling is a flat rate of $7.95. Ground shipping generally takes 7 business days from the time an order is placed to arrive at your door.
</p>
<br>
        <p class="mb-3">If you select one of our expedited shipping & handling options (2nd Day or Next Day Air), we will fulfill any orders placed before 12 pm CT the same business day, otherwise they will be shipped the next day. This excludes weekends and holidays within the United States.</p>
<br>
<p class="mb-3">We encourage our customers to place an order when half of the product has been consumed. This will mitigate shipping delay dilemmas and ensures you are not out of Hemp.</p>
   
   
<br>
<p class="mb-3">If you have additional shipping & handling questions, please call us at 952-405-8181.</p>
    </div>

  </div>
</template>

<script>


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Shipping-policy',
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
