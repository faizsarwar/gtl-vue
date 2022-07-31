<template>

  <div class="page-sign-up m-5 row">
        <div class="col-4 ">

        </div>
      <div class="col-4 is-offset-4">
        <h1 class="heading"> <b>  Sign up </b></h1>

        <form @submit.prevent="submitForm" >
          <div class="form-group mt-4 mb-5">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label"> <b> Username </b></p> 
            <div class="">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Useraname"
                v-model="username"
              />
            </div>
          </div>

          <div class="form-group mt-4 mb-5">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label"> <b> Email </b></p> 
            <div class="">
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Email Address"
                v-model="email"
              />
            </div>
          </div>

          <!-- <p class="form-label"> <strong> Account Type</strong></p> 
          <select class="form-control" aria-label="Default select example" v-model="this.account_type">
            <option value="Consumer">Consumer Account</option>
            <option value="Retailer">Wholesale Account or “Retailer”</option>
            <option value="Distributor">Distributor Account</option>
            <option value="Affiliate">Affiliate or “AGO Representative”</option>
            <option value="Referral Partner">Referral Partner Program</option>
          </select> -->
            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput2">Password</label> -->
                <p class="form-label"> <strong> Password</strong></p> 
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Password"
                    v-model="password"
                />
                </div>
          </div>

            <div class="form-group mt-4 mb-5" >
                <!-- <label for="formGroupExampleInput3">Repeat Password</label> -->
                <p class="form-label"> <b> Repeat Password</b></p>
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput3"
                    placeholder="Enter Password Again"
                    v-model="password2"
                />
                </div>
            </div>

          <!-- warning -->
          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>

            <button type="submit" class="btn btn-success">Sign up</button>

          <hr />

          Or <router-link to="/log-in">click here </router-link> <b> to Log in! </b> 
          
        </form>
      </div>
  </div>
</template>

<script>
import axios from "axios";
// import { toast } from 'bulma-toast'
import Swal from 'sweetalert2'
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      account_type:"",
      password: "",
      password2: "",
      email:"",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (this.username === "") {
        this.errors.push("The username is missing");
      }
      if (this.password === "") {
        this.errors.push("The password is too short");
      }
      if (!this.email) {
        this.errors.push("Email is Required");
      }
      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
      }
      if (!this.errors.length) {
        let approved;
        if (this.account_type== 'Consumer'){
          approved = true
        }else{
          approved = false
        }
        console.log(approved)
        const formData = {
          username: this.username,
          password: this.password,
          email: this.email,
          // account_type: this.account_type,
          approved : approved
        };
        axios
          .post("/api/v1/CustomUser/", formData)
          .then((response) => {
              console.log(response)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Account Successfully Created',
            showConfirmButton: false,
            timer: 1500
          })
            this.$router.push("/log-in");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script>

<style scoped>
a{
    color: green;
    font-weight: bolder;
}
.form-label {
  /* display: inline-block;
  width: 140px; */
  margin-bottom: 2px;
  text-align: left;
  color: green;
}
</style>