<template>
  <div class="home container">
    <h1><strong style="color:black"> Terpenes </strong></h1>

    <h2 class="mt-5 mb-3">What Are Terpenes?</h2>

    <div class="">
      <div class=" p-4">
        <p class="mt-5 p-5" style="color:black;">
        Terpenes are a large and diverse class of organic compounds, produced by a variety of plants, particularly conifers, and by some insects. They often have a strong odor and may protect the plants that produce them by deterring herbivores and by attracting predators and parasites of herbivores. Terpenes are chemicals with a huge array of fragrances, flavours, and effects. Their extractions from plants are the most important components of the essential oils used in herbal medicine, nutritional supplements and cosmetics.
        </p>
      </div>
     <div class="">
          <img :src="require('@/assets/img/terpenes1.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">
      </div>

    </div>

    <h2 class="mt-3 mb-3">What are CBD Terpenes used for?</h2>

    <div class="">
      <div class=" p-4">
        <p class="mt-5 p-5" style="color:black;">
   Understanding terpenes and the “entourage effect” For example, cannabinoids and terpenoids may work together to provide pain relief, reduce inflammation, and alleviate mental health issues like anxiety, and even potential bacterial infections.     </p>
      </div>
     <div class="">
          <img :src="require('@/assets/img/trepenes2.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">
      </div>

    </div>

      <img :src="require('@/assets/img/terpenes5.png')" alt="" class="mt-2 mb-5 " style="width:40%; ">

    <p class="mt-5 p-5" style="color:black;">For CBD oil users, it means that CBD isn’t the only compound responsible for the health benefits you experience. If you feel stronger relief from the stress of physical discomfort using a full-spectrum CBD oil, this may be caused by the synergistic effects provided by other cannabinoids, such as CBD, CBDV, CBG, CBC, or CBN, and terpenes such as beta-caryophyllene, limonene, myrcene, or linalool.  While CBD is a powerful compound on its own, it needs a team of supporters to develop its full potential.Terpenes are fascinating molecules, and we’re going to devote an entire section to them, but before we make it there, let’s take a look at the most well-known entourage effect between CBD and THC.</p>

    <h2 class="mt-3 mb-3">Great to learn about the science behind natures greatest gift...</h2>
    
      <img :src="require('@/assets/img/terpenes3-.jpeg')" alt="" class="mt-2 mb-5 " style="width:80%; ">

    <h3>THC & CBD: The Most Well-Known Cannabis Entourage Effect</h3>
    <p class="mt-5 p-5" style="color:black;">One of the first observed and most cited entourage effects is the relationship between CBD and THC.While THC, the cannabinoid that gets you high, binds directly to the CB1 cannabinoid receptors in the brain, CBD uses different mechanisms to manifest its effects. When you take these two compounds together, CBD reduces THC’s psychotic potential by blocking the sites of the CB1 receptors to which THC tries to bind. As a result, you feel less high than you would if you consumed THC alone.The evidence supporting CBD’s ability to help take the edge off THC is piling up.  In the 1980s, the Food and Drug Administration (FDA), approved a synthetic form of THC known as Marinol. While the medication did a decent job of increasing patients’ appetite, it also had side effects such as paranoia. Another FDA-approved drug, Sativex, contains both CBD and THC in a 1:1 ratio, so patients can tolerate it without getting too stoned.Once you understand the interaction between CBD, THC, and the CB1 receptor, you should get a general idea of how the entourage effect works.THC is the agonist of this receptor, meaning it works like a key that unlocks the receptor’s lock. CBD isn’t a direct agonist of the CB1 receptor, but it competes with THC for its space.</p>
       <img :src="require('@/assets/img/terpenes4.png')" alt="" class="mt-2 mb-5 " style="width:80%; ">

    <p class="mt-5 p-5" style="color:black;">As mentioned, taking these two compounds together leaves fewer receptors for THC to activate. In this scenario, the potential side-effects of THC, such as anxiety and paranoia, are modulated.Adie Wilson-Poe, a professor at Washington University (St. Louis) says that CBD uses a minimum of 14 different mechanisms of action in the central nervous system alone. Aside from that, it has over 65 molecular targets.</p>
    
    <p class="mt-5 p-5" style="color:black;">CBD acts through a myriad of pathways, so it’s hard to link its health benefits solely to CB1 occupation.Now, when you take full-spectrum CBD oil, there are a lot more compounds entering your body. Using full-spectrum products activates legions of beneficial molecules at the same time.</p>
  
    <button class="btn btn-success mb-5">Reach Out</button>
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
