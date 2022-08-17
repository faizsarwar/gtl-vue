<template>
  <div class="about mb-3">
                        <!-- Loader  -->
                <loading v-model:active="isLoading"
                 :loader="bars"
                 :width="width"
                 :height="height"
                 :color="color"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>
    <div>
      <h1 class="m-5">
        <strong> {{ product.name }} </strong>
      </h1>

    
      <div class="row m-5">

        <div class="col-lg">
          <figure class="mb-6" style="">
            <img
              class="product-img"
              v-bind:src="product.get_image"
              style="
                    background-size:contain;  
                    background-repeat: no-repeat; text-align: center;
                overflow-y: 'hidden';
              "
            />
            <!-- <img v-bind:src="product.get_image" alt="" width="100%" style="background-size:contain;  background-repeat: no-repeat; text-align: center;"> -->
          </figure>

        </div>
        <div class="col-lg text-left">
                    <div class="ml-4">
            <h2 class="heading mt-5"><strong> Product Details</strong></h2>

            <div  class="m-4">
                <div style="display:inline-block">
                <h3 > <strong> Price :</strong></h3>
                </div>
                <div style="display:inline-block" class="ml-4">
                <h4 > <strong style="color:black;">$ {{ product.price }} </strong></h4>
          
                </div>
            </div>


            <div  class="m-4">
                <div style="display:inline-block">
                <h3 > <strong> Description :</strong></h3>
                </div>
                <div style="display:inline-block" class="ml-4">
                <h4 >{{ product.description }} </h4>
                 
                </div>
            </div>


            <div  class="m-4">
                <div style="display:inline-block">
                <h3 > <strong> Gift Wrapping : </strong></h3>
                </div>
                <div style="display:inline-block" class="ml-4">
                <h4 >{{ product.giftWrapping }} </h4>
                 
                </div>
            </div>


            <div  class="m-4">
                <div style="display:inline-block">
                <h3 > <strong> Size : </strong></h3>
                </div>
                <div style="display:inline-block" class="ml-4">
                <h4> {{product.size}} </h4>
                 
                </div>
            </div>


            <!-- {{this.allVariations}}   -->
            <div class="m-4">
              
              <div class="mt-3" v-if="this.item_price.price">
                <div
                  v-if="
                    account_details.account_type != 'Consumer' &&
                    account_details.approved == true
                  "
                >
                  <strike
                    ><b>
                      <span
                        >Price: ${{
                          parseInt(this.item_price.price) * this.quantity
                        }}
                      </span>
                    </b>
                  </strike>
                  <br />
                  <span>
                    Discounted Price: ${{
                      parseInt(this.item_price.price) *
                      this.quantity *
                      this.discount
                    }}
                  </span>
                </div>
                <div
                  v-else-if="
                    account_details.account_type != 'Consumer' &&
                    account_details.approved == false
                  "
                >
                  <b>
                    <span
                      >Price: ${{
                        parseInt(this.item_price.price) * this.quantity
                      }}
                    </span>
                  </b>
                </div>
                <div v-else-if="discount != 1">
                  <strike
                    ><b>
                      <span
                        >Price: ${{
                          parseInt(this.item_price.price) * this.quantity
                        }}
                      </span>
                    </b>
                  </strike>
                  <br />
                  <span>
                    Discounted Price: ${{
                      parseInt(this.item_price.price) *
                      this.quantity *
                      this.discount
                    }}
                  </span>
                </div>
                <div v-else>
                  <span
                    >Price: ${{
                      parseInt(this.item_price.price) * this.quantity
                    }}
                  </span>
                </div>
              </div>
            </div>

            <!-- {{this.product}} -->

            <div class="field has-addons mt-6">
              <div class="control" style="width: 70%">
                <!-- <input type="number" class="input" min="1" v-model="quantity"> -->
                <vue-number-input
                  controls
                  class="input"
                  min="1"
                  v-model="quantity"
                ></vue-number-input>
              </div>
              <div class="control ml-5">
                <a
                  class="button btn btn-success mr-3 mt-3 mb-3 ml-5"
                  style="color: white"
                  @click="addToCart()"
                  >Add to cart</a
                >
                <a
                  class="btn btn-success mr-3 mt-3 mb-3"
                  href="/cart"
                  style="color: white"
                  >View cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>



        <div class="row ml-5 mr-5" style="text-align: left">
          <p class="m-3 mt-5 pl-5 pr-5">{{ product.description2 }}</p>
        </div>

        <!-- best seller slides -->
        <!-- <best_seller_slides /> -->
        <Faqs />
    </div>
  </div>
</template>

<style>
p{
  color:black;
}

</style>


<script>
// import blogs from "../components/blogs.vue";
import Faqs from "../components/Faqs.vue";
import axios from "axios";
// import best_seller_slides from "../components/best-seller-slides.vue";
// import testemonials from '../components/testemonials.vue'
// import best_seller_slides from '../components/best-seller-slides.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/blogs.vue'
// import { notify } from "notiwind";
// import VueNumberInput from "@chenfengyuan/vue-number-input";
// ES6 Modules or TypeScript
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Swal from "sweetalert2";
// CommonJS
// const Swal = require('sweetalert2')
export default {
  name: "Product-",
  data() {
    return {
      product: {},
      allVariations: [],
      id: this.$route.params.productId,
      dismissSecs: 5,
      dismissCountDown: 0,
      quantity: 1,
      showDismissibleAlert: false,
      item_price: 0,
      isLoading: true,
      fullPage: true,
      bars: "bars",
      color:"#07ad31",
      height: "120",
      width: "120",
      account_details: [],
      discount: 1,
    };
  },
  components: {
    // blogs,
    Faqs,
    // best_seller_slides,
    // notify,
    // VueNumberInput,
    Loading,
  },
  mounted() {
    this.getProduct();
    this.getProductVariations();
    this.getAccountDetails();
    // this.setDiscount()
  },
  methods: {
    async getProduct() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get("/api/v1/products/" + this.id)
        .then((response) => {
          this.product = response.data[0];
          this.isLoading=false
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    }, //product-variations/
    getProductVariations() {
      axios
        .get("/api/v1/product-variations/" + this.id)
        .then((response) => {
          this.allVariations = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }
      const item = {
        product: this.product,
        quantity: this.quantity,
        price: this.product.price,
                category:
        this.productsize,
      };
      this.$store.commit("addToCart", item);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Added To Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    getAccountDetails() {
      axios
        .get(`/api/v1/CustomUser/${localStorage.getItem("userid")}/`)
        .then((response) => {
          this.account_details = response.data;
          this.setDiscount();
               })
        .catch((error) => {
          console.log(error);
        });
    },
    setDiscount() {
      console.log("hello ", this.account_details.account_type);
      if (this.account_details.account_type == "Retailer") {
        this.discount = 0.6;
      } else if (this.account_details.account_type == "Distributor") {
        console.log("distributor");
        this.discount = 0.4;
      } else {
        this.discount = 1;
      }
    },
  },
};
</script>