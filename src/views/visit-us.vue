<template>
  <div class="home container">
    <h1><strong style="color:black" class="m-4"> Visit Us</strong></h1>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.552927882334!2d-93.34409098423596!3d44.9324264767886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6215286c52f05%3A0x2eacbfc77bdb1e1a!2sGrow%20To%20Life!5e0!3m2!1sen!2s!4v1661501490875!5m2!1sen!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div class="">    
        <h2 class="mt-5 mb-3 "><strong style="color:black" class="m-4"> Get in touch </strong></h2>

        <p style="color:black">Send us a message and we will be in touch within 48 hours</p>
    </div>

      <form @submit.prevent="submitForm" class="d-flex flex-column align-items-center ">
          <div class="form-group mt-4 mb-5 ">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label"> <b> Email </b></p> 
            <div class="">
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>
          </div>

            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput2">Password</label> -->
                <p class="form-label"> <strong> Name</strong></p> 
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput3"
                    placeholder="Enter Name"
                    v-model="Name"
                />
                </div>
            </div>

            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput2">Password</label> -->
                <p class="form-label"> <strong> Company</strong></p> 
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput4"
                    placeholder="Enter Company"
                    v-model="Company"
                />
                </div>
            </div>

            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput2">Password</label> -->
                <p class="form-label"> <strong> Phone Number</strong></p> 
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput5"
                    placeholder="Enter Phone Number"
                    v-model="PhoneNumber"
                />
                </div>
            </div>

            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput2">Password</label> -->
                <p class="form-label"> <strong> Message</strong></p> 
                <div class="control">
                <textarea class="form-control" id="exampleFormControlTextarea1"                     placeholder="Enter Message"
                    v-model="Message" rows="3"></textarea>
                </div>
            </div>

          <!-- warning -->
          <div class="notification is-danger" v-if="errors.length">
            <!-- <p v-for="error in errors" v-bind:key="error">{{ error }}</p> -->
            <p>Username or password is not valid </p>
          </div>

            <button type="submit" class="btn btn-success mb-5">Log in</button>

          
        </form>
 
  </div>
</template>

<script>


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data(){
      return {
          email: "",
          Company: "",
          Message: "",
          Name: "",
          PhoneNumber: "",
          allProducts:[],
          allCategories:[],
          errors:[],
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

a{
    color: blue;
    font-weight: bolder;
}
.form-label {
  margin-bottom: 2px;
  text-align: left;
  color: blue;
}

.form-control{
    width:100%
}
.form-group{
    width:60%
}
</style>
