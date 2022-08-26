<template>
  <div class="home container pb-5 pt-5">
    <h1 class="mt-5 mb-5 pb-5"><strong style="color:black" >  Refnd Policy </strong></h1>

    <div class="text-left mt-5 pt-5 mb-5 pb-5">
        <h3> TERMS OF SALE AND REFUND POLICY</h3>
        <p class="mb-5">If our products didn’t perform for you, there’s a good chance that you may have not found the right one just yet.  If this could be the case for you, simply reach out to our customer support team through email at info@growtolife.com and one of our team members will help you find the right product for you. Customer is responsible for return shipping. Please submit your request to info@growtolife.com or call (612) 405-8181.</p>

        <h3 class="mt-4 ">DAMAGE DUE TO FREIGHT OR SHIPPING</h3>
        <p class="mb-5">All of our products are tested for quality, and all shipments are carefully inspected before leaving our warehouse. Upon delivery of your order, please check product carefully to ensure it has not been damaged during shipping. All claims for damaged product must be made within 48 hours. Please contact us and provide detailed information for any product damaged during shipping within that time. Please include a full description of the damages to the product.</p>

        <h3 class="mt-4">CUSTOMER SERVICE</h3>
        <p class="mb-5">Phone: (952) 405-8181  <br> Email: info@growtolife.com</p>

    </div>

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
