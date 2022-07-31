<template>
<div class="body p-4">
        <div class="d-flex justify-content-center align-items-center mt-5"> <button class="btn btn-dark">OUR CATEGORIES</button> </div>
    <div class="d-flex justify-content-center mt-3 mb-3"> <span class="text text-center">Finding Best Products Now<br> in Your Fingertips</span> </div>
    <div class="row mt-2 g-4">
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Mobile</span> <span>Phones</span> </div>
                    <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Head</span> <span>Phones</span> </div>
                    <div> <img src="https://i.imgur.com/SHWASPG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div> <img src=" https://i.imgur.com/Ya0OXCv.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Air</span> <span>Purifiers</span> </div>
                    <div> <img src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                    <div> <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div> <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                    <div> <img src=" https://i.imgur.com/Zq8VigZ.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
            <div class="card_ p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Faqs-",
  data() {
    return {
      Faqs: [],
    };
  },
  mounted() {
    this.getFaqs();
  },
  methods: {
    getFaqs() {
      axios
        .get("/api/v1/Faqs/")
        .then((response) => {
          this.Faqs = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0
}

.body {
    background-color: #e4f1f7
}

.name {
    font-size: 16px;
    color: #e83d16 !important;
    font-weight: 500
}

.navbar-toggler {
    font-size: 15px
}

.nav-link {
    font-size: 14px;
    color: #000 !important;
    font-weight: bold;
    margin-left: 40px
}

.form-control {
    height: 32px;
    width: 100%;
    border-radius: 20px;
    color: #c7c6cb;
    font-size: 13px;
    border: none
}

.searchitem {
    position: relative
}

.searchitem i {
    position: absolute;
    right: 18px;
    top: 10px;
    font-size: 13px
}

.btn {
    height: 35px;
    width: 170px;
    border: none;
    border-radius: 20px;
    background-color: #633a9c;
    font-size: 14px;
    font-weight: 500
}

.text {
    font-size: 23px;
    font-weight: bold
}

.card_ {
    height: 130px;
    background-color:white;
    overflow: hidden;
    border: none;
    border-radius: 15px
}

.imagename {
    font-size: 14px;
    font-weight: bold
}
</style>
