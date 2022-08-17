<template>
    <div class="page-cart mt-0 mb-0">
        <div class="">
            <!-- {{userid}} userid -->
            <!-- <div style="height:100px" class="invisible">
            </div> -->

            <div class="mt-3 p-3">
                <h1 > <b>  Cart</b></h1>
            </div>

          
            <div class="box m-4">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead >
                        <tr  >
                            <th class="text-center">Product</th>
                            <th class="text-center">size</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Quantity</th>
                            <th class="text-center">Total</th>
                            <th class="text-center"></th>
                        </tr>
                    </thead>



                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else class="m-2">You don't have any products in your cart...</p>
            </div>

            <!-- {{userid}} userid -->
            <!-- <div style="height:100px" class="invisible ">
            </div> -->

            <div class=" box m-4 p-4" style="text-align:left">
              <!-- <hr> -->
              <div class="row ml-3">
                <h2 class="subtitle mt-3"><b>  Summary</b></h2>
              </div>
              <div class=" ml-5">
                  <div class="row">
                      <div class="col-2">
                        <b>Price </b>
                      </div>
                      <div class="col">
                        $ {{ cartTotalPrice }}
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-2">
                        <b>Total Items</b>
                      </div>
                      <div class="col">
                        {{ cartTotalLength }}
                      </div>
                  </div>
              </div>
              <div class="row ml-5">
                <a href="/checkout" class="btn btn btn-success mt-3 mb-3" style="color: white">Proceed to checkout</a>
              </div>

            </div>

        </div>
    </div>
</template>

<script>
// import blogs from '../components/blogs.vue'
// import axios from 'axios'
// import testemonials from '../components/testemonials.vue'
// import best_seller_slides from '../components/best-seller-slides.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CartItem from '@/components/CartItem.vue'
export default {
    name: 'Cart_',
    components: {
        CartItem,
        // blogs,
    },
    data() {
        return {
            cart: {
                items: []
            },
            userid:0
        }
    },
    mounted() {
      this.cart = this.$store.state.cart
      this.userid = localStorage.getItem('userid')
    //   console.log(this.$store.state.userid)
    //   console.log(localStorage.getItem('userid'))
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity * curVal.price
            }, 0)
        },
    }
}
</script>

<style scoped>
.box{
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   height:100%;
}
/* max 800px or less */
@media only screen and (max-width: 936px) {
  .invisible{
    display:none;
  }
}
</style>