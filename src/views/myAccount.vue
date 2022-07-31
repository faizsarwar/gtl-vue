<template>
    <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="mt-4 mb-4">
                <h1 class="title ">ACCOUNT DETAILS</h1>
            </div>


            <div class="col-12">
                <button @click="logout()" class="btn btn-success">Log out</button>
            </div>

            <hr>

            <div class="col-12">
                <div class="row">
                    <h2 class="subtitle heading float-left m-4 ">My orders</h2>
                </div>
                <br>

                <div v-if="orders.length!=0">
                    <OrderSummary
                        v-for="order in orders"
                        v-bind:key="order.id"
                        v-bind:order="order" />
                </div>

                <div v-else>
                    <h2 class="m-5">No Orders Yet !!!!</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import OrderSummary from '@/components/OrderSummary.vue'
export default {
    name: 'MyAccount',
    components: {
        OrderSummary
    },
    data() {
        return {
            orders: [],
            account_details:[]
        }
    },
    mounted() {
        document.title = 'My account | Anasazi'
        this.getMyOrders()
        this.getAccountDetails()
    },
    methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$store.commit('removeUserId')
            this.$router.push('/')
        },
        async getMyOrders() {
            this.$store.commit('setIsLoading', true)
            await axios
                .get('/api/v1/orders/')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        },
        async GetFile () {
            await axios.get(`/api/v1/CustomUser/document`, {
                responseType: 'blob' // !!!
            }).then((response) => {
            window.open(URL.createObjectURL(response.data));
            })
        },
        getAccountDetails(){
            axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
            .then(response=>{
                this.account_details=response.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>