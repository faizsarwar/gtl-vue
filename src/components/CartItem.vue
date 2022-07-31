<template>
  <!-- <div v-if="item.quantity!=0"> -->
  <tr v-if="item.quantity != 0">
    <!-- {{item}} -->
    <td>
      <a :href="'/products/' + item.product.id"> {{ item.product.name }}</a>
    </td>
    <td>{{ item.category }}</td>
<!--  -->
              <td v-if="account_details.account_type!='Consumer' && account_details.approved==true" >
                 ${{ item.price * discount}} 
              </td>
              <td v-else-if="account_details.account_type!='Consumer' && account_details.approved==false" >
                 ${{ item.price }}
              </td>
              <td v-else-if="discount!=1">
                  ${{ item.price * discount }}           
              </td>
              <td v-else>
                 ${{ item.price }}                
              </td>
<!--  -->
    <!-- <td>${{ item.price }}</td> -->
    <td>
      <a @click="decrementQuantity(item)"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          style="color: green"
          fill="currentColor"
          class="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
          /></svg
      ></a>
      {{ item.quantity }}
      <a @click="incrementQuantity(item)"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          style="color: green"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          /></svg
      ></a>
    </td>
    <td>${{ getItemTotal(item).toFixed(2) }}</td>
    <!-- <td><button class="delete" @click="removeFromCart(item)"></button>delete</td> -->
  </tr>
  <!-- </div> -->
</template>

<script>
import axios from 'axios'
export default {
  name: "CartItem",
  props: {
    initialItem: Object,
  },
  data() {
    return {
      item: this.initialItem,
      account_details:[],
      discount:1
    };
  },
  mounted(){
    this.getAccountDetails()
  },
  methods: {
    getItemTotal(item) {
      if (this.account_details.account_type!='Consumer' && this.account_details.approved==true){
        return item.quantity * item.price *this.discount;        
      }
      else if(this.account_details.account_type!='Consumer' && this.account_details.approved==false) {
        return item.quantity * item.price ;
      }
      else if(this.discount!=1) {
        return item.quantity * item.price *this.discount ;
      }
      else{
        return item.quantity * item.price *this.discount;
      }
    },
    decrementQuantity(item) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        this.$emit("removeFromCart", item);
      }
      this.updateCart();
    },
    incrementQuantity(item) {
      item.quantity += 1;
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
    },
    removeFromCart(item) {
      this.$emit("removeFromCart", item);
      this.updateCart();
    },      
    getAccountDetails(){
        axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
          .then(response=>{
            this.account_details=response.data
            this.setDiscount()
          })
          .catch(error=>{
              console.log(error)
          })
      },
      setDiscount(){
        console.log("hello ",this.account_details.account_type)
        if (this.account_details.account_type=="Retailer"){
          this.discount=0.6
        }
        else if (this.account_details.account_type=="Distributor"){
          console.log("distributor")
          this.discount=0.4
        }
        else{
          this.discount=1
        }
      }
  },
};
</script>

<style scoped>
a {
  color: black;
}
</style>