<template>
  <div class="home container">
    <h1 class="mt-5 mb-5"><strong style="color:black" > FDA Disclaimer </strong></h1>
    
    <div class="text-left mt-5 pt-5 pb-5">
        <h3 class="text-left mt-5 mb-5" >FDA DISCLAIMER</h3>

        <p>
        All products on this website contain .3% THC or less. No statement in this web site has been evaluated by the Food and Drug Administration (FDA). Furthermore, none of the statements in this web site should be construed as dispensing medical advice or making claims regarding the cure of diseases. Products sold by Grow To Life are not intended to diagnose, treat, cure or prevent any disease.

        <br>
       <br>        
        You should consult a licensed health care professional before starting any dietary supplement, especially if you are pregnant or have any pre-existing injuries or medical conditions.

        <br>
       <br>
        These product is not for use by or sale to persons under the age of 18. These products should be used only as directed on the label. Consult with your physician if pregnant or nursing. A Doctor’s advice should be sought before using hemp derived products.

        <br>
       <br>
        All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse Grow To Life or Grow To Life products.

        <br>
       <br>
        By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law.

        <br>
       <br>
        Grow To Life assumes no responsibility for any legal charges as a result of changing local/state laws. It is buyer’s responsibility to determine if any transaction from <a href="/" Style="color:green"> growtolife.com</a>  and its affiliates is in violation with local rules and regulations.

        <br>
       <br>
        This website contains general information about diet, health and nutrition. The information is not advice, and should not be treated as such. The general information on this website is provided “as is” without any representations or warranties, express or implied. Grow to Life makes no representations or warranties in relation to the health information on this website. You must not rely on the information on this website as an alternative to medical advice from your professional healthcare provider. If you are suffering from any medical condition you should seek immediate medical attention. You should never delay seeking medical advice, disregard medical advice, or discontinue medical treatment because of information in Grow to Life materials or provided by any Grow to Life representative, none of which information is intended to be a substitute for medical diagnosis, advice or treatment. If you are considering making any changes to your lifestyle, diet or nutrition, you should consult with your health care provider.

        <br>
       <br>
        Neither the Company nor its representatives is providing any medical advice, and none should be inferred, from any ideas, suggestions, testimonials or other information set forth on this website or in other Company materials or provided over the phone or in email correspondence. This website may contain links to third-party websites. Grow to Life provides these links as a convenience only and does not endorse any of these sites. Grow to Life is not responsible for the content of, and does not make any representations regarding the materials on, such linked third-party websites. If you decide to access or rely on information at linked third-party website, you do so at your own risk.

        </p>

        <h2>HEMP FLOWER ADVISORY</h2>
        <br>
        <p>Hemp Flower products look and smell like marijuana. Treat raw hemp flower like cannabis. Please observe your local laws while consuming it. Grow To Life is not responsible for anyone confiscating this product, arresting, or fining our customers because of an unfortunate misunderstanding. Please use your discretion and keep the original packaging as added support that it is legal hemp.</p>   
       </div>

  </div>
</template>

<script>


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'refund-policy',
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
