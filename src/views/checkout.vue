<template>
    <div class="page-checkout p-0 mt-0 mb-0">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="heading">Checkout</h1>
            </div>
            <div class="column is-12 box pr-5 pl-5">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
            
                    <tfoot>
                        <tr>
                            <td colspan="2">Total</td>
                            <td></td>
                            <td>{{ cartTotalLength }}</td>
                            <td>${{ cartTotalPrice.toFixed(2) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="column is-12 box pl-5 pr-5 pb-5">
                <h2 class="heading mt-5">Shipping details</h2>

                <p class="has-text-grey mb-5">* All fields are required</p>
            <div class="ml-5 mr-5 pl-5 pr-5 mt-4">
                <div class="form-row pr-5 pl-5">
                    <div class="form-group col-md-6">
                    <p for="inputEmail4" class="form-label">Email</p>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
                    </div>
                    <div class="form-group col-md-6">
                    <p for="inputPassword4 " class="form-label">Phone</p>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Phone Number" v-model="phone">
                    </div>
                </div>
                    <div class="form-row pr-5 pl-5">
                    <div class="form-group col" >
                    <p for="inputCity" class="form-label">First Name</p>
                    <input type="text" class="form-control" id="inputCity" v-model="first_name">
                    </div>
                    <div class="form-group col">
                    <p for="inputCity" class="form-label">Last Name</p>
                    <input type="text" class="form-control" id="inputCity" v-model="last_name">
                    </div>
                    <div class="form-group col">
                    <p for="inputZip" class="form-label">Zip</p>
                    <input type="text" class="form-control" id="inputZip"  v-model="zipcode">
                    </div>
                </div>
                <div class="form-group pr-5 pl-5">
                    <p for="inputAddress" class="form-label">Address</p>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="address">
                </div>
                <div class="form-group pr-5 pl-5">
                    <p for="inputAddress2" class="form-label">Place</p>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" v-model="place">
                </div>
    <!--  -->
                <div class="notification bg-danger mt-4 pr-5 pl-5" style="color: white" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>

                <hr>

                <div id="card-element" class="m-5"></div>
                <div v-if="cartTotalLength">

                    <button class="btn btn btn-success mt-3 mb-3" @click="submitForm">Pay with Stripe</button>
                </div>
                <!--  -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Checkout_',
    components: {
        CartItem,
    },
    data() {
        return {
            cart: {
                items: []
            },
            stripe: {},
            card: {},
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            zipcode: '',
            place: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Checkout | Anasazi'
        this.cart = this.$store.state.cart
        if (this.cartTotalLength > 0) {
            this.stripe = window.Stripe('pk_test_51KfMtDCo5tQGz5JpkIZmtwCH9xiGit1BV4ONCSTQoDXWApnsZ9VGG59uhPQSZPT0jcQmBCr0cuUF2wxDdwdOffIK00S6Ww2xer')
            const elements = this.stripe.elements();
            this.card = elements.create('card', { hidePostalCode: true })
            this.card.mount('#card-element')
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.price
        },
        submitForm() {
            this.errors = []
            if (this.first_name === '') {
                this.errors.push('The first name field is missing!')
            }
            if (this.last_name === '') {
                this.errors.push('The last name field is missing!')
            }
            if (this.email === '') {
                this.errors.push('The email field is missing!')
            }
            if (this.phone === '') {
                this.errors.push('The phone field is missing!')
            }
            if (this.address === '') {
                this.errors.push('The address field is missing!')
            }
            if (this.zipcode === '') {
                this.errors.push('The zip code field is missing!')
            }
            if (this.place === '') {
                this.errors.push('The place field is missing!')
            }
            if (!this.errors.length) {
                this.$store.commit('setIsLoading', true)
                this.stripe.createToken(this.card).then(result => {                    
                    if (result.error) {
                        this.$store.commit('setIsLoading', false)
                        this.errors.push('Something went wrong with Stripe. Please try again')
                        console.log( "error is this", result.error.message)
                    } else {
                        this.stripeTokenHandler(result.token)
                    }
                })
            }
        },
        async stripeTokenHandler(token) {
            console.log("hello")
            const items = []
            for (let i = 0; i < this.cart.items.length; i++) {
                const item = this.cart.items[i]
                const obj = {
                    product: item.product.id,
                    quantity: item.quantity,
                    price: item.price * item.quantity
                }
                items.push(obj)
            }
            const data = {
                'first_name': this.first_name,
                'last_name': this.last_name,
                'email': this.email,
                'address': this.address,
                'zipcode': this.zipcode,
                'place': this.place,
                'phone': this.phone,
                'stripe_token': token.id,
                'items': items,
            }
            await axios
                .post('/api/v1/checkout/', data)
                .then(response => {
                    this.$store.commit('clearCart')
                    this.$router.push('/success')
                    console.log(response)
                })
                .catch(error => {
                    this.errors.push('Something went wrong. Please try again')
                    console.log(error, "err0or 2")
                })
                this.$store.commit('setIsLoading', false)
        }
    },
    computed: {
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.price * curVal.quantity
            }, 0)
        },
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        }
    }
}
</script>
<style scoped>
.form-label {
  margin-bottom: 2px;
  text-align: left;
  color: green;
}
</style>