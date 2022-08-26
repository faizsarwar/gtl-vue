  
<template>
  <div class="page-sign-up m-5 row">

        <div class="col-4 ">

        </div>
      <div class="col-4 is-offset-4">
        <h1 class="heading"> <b>  Log in </b></h1>

        <form @submit.prevent="submitForm" >
          <div class="form-group mt-4 mb-5">
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

          <!-- warning -->
          <div class="notification is-danger" v-if="errors.length">
            <!-- <p v-for="error in errors" v-bind:key="error">{{ error }}</p> -->
            <p>Username or password is not valid </p>
          </div>

            <button type="submit" class="btn btn-success">Log in</button>

          <hr />

          Or <router-link to="/sign-up">click here</router-link> <b> to Sign Up! </b> 
          
        </form>
      </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Log In | GTL'
    },
    methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                email: this.email,
                password: this.password
            }
            await axios
                .post("/api/v1/CustomUser/login", formData)
                .then(response => {
                    const token = response.data.auth_token
                    const userid=response.data.id
                    console.log(userid,"token")
                    this.$store.commit('setToken', token)
                    this.$store.commit('setUserId', userid)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    localStorage.setItem("userid", userid)
                    const toPath = this.$route.query.to || '/cart'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>
<style scoped>
a{
    color: blue;
    font-weight: bolder;
}
.form-label {
  /* display: inline-block;
  width: 140px; */
  margin-bottom: 2px;
  text-align: left;
  color: blue;
}
</style>
