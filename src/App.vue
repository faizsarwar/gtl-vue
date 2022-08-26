<template>
  <div
    style="
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    "
    class="p-0 m-0"
  >
    <section class="header-main border-bottom bg-light" id="navbar_top">
      <div class="container-fluid">
        <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
          <div class="col-md-2">
            <img
              :src="require('@/assets/img/logo.jpeg')"
              alt=""
              style="
                background-size: contain;
                background-repeat: no-repeat;
                text-align: center;
                width: 100%;
              "
            />
          </div>
          <div class="col-md-8">
            <form
              class="example ml-5"
              action="action_page.php"
              style="border-radius: 15px"
            >
              <input
                type="text"
                placeholder="Search.."
                name="search"
                style="border-radius: 15px 0px 0px 15px"
              />
              <button type="submit" style="border-radius: 0px 15px 15px 0px">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div class="col-md-2">
            <li v-if="$store.state.isAuthenticated" style="list-style-type: none">
              <div class="d-flex d-none d-md-flex flex-row align-items-center">
                <a href="/my-account" class="nav-link" style="color: black"
                  >My Account<span class="sr-only">(current)</span></a
                >
                <button @click="logout()" class="btn btn-success">Log out</button>
              </div>
            </li>
            <li v-else style="list-style-type: none">
              <div class="d-flex d-none d-md-flex flex-row align-items-center">
                <div class="dropdown">
                  <button
                    class="btn btn-primary-outline p-2 mt-0 font-weight-bold faiz mr-3 pr-3"
                    style="
                      border-radius: 20px;
                      background-color: white;
                      border-color: black;
                    "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                    Sign In
                  </button>
                  <div
                    class="dropdown-menu p-4"
                    style="border-radius: 18px"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item btn btn-primary mt-4 mb-3"
                      style="border-radius: 14px"
                      href="/log-in"
                      >Sign In</a
                    >
                    <a
                      class="dropdown-item btn btn-outline mb-4"
                      style="
                        border-radius: 20px;
                        background-color: white;
                        border-color: black;
                      "
                      href="/sign-up"
                      >Create An Account</a
                    >
                    <!-- <a class="dropdown-item" href="#">Something else here</a> -->
                  </div>
                </div>
                <a href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    fill="black"
                    class="bi bi-cart-fill ml-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    />
                  </svg>
                  <span class="badge badge-warning" id="lblCartCount">
                    ({{ cartTotalLength }})
                  </span>
                </a>
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>

    <nav
      class="navbar navbar-expand-lg navbar-light mt-0 mb-0"
      id="navbar_top"
      style="background-color: #e4f1f7; color: black"
    >
      <div class="container-fluid pt-2">
        <ul class="navbar-nav">
          <li class="nav-item mr-3 ml-3">
            <a class="" style="color: black" href="/">HOME</a>
          </li>
          <li class="nav-item mr-3 ml-5">
            <a class="" style="color: black" href="/life-session">Life Session</a>
          </li>
          <li class="nav-item mr-3 ml-3 dropdown">
            <a
              class=" dropdown-toggle"
              style="color: black"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop 
            </a>
            <ul class="dropdown-menu multi-column columns-3 pt-3 pb-3">
              <div class="row pl-5 pr-5">
                <div class="col-sm-3 ">
                  <ul class="multi-column-dropdown">
                    <b><strong> Delta </strong></b>
                        <li class="divider"></li>
                    <li>            
                      <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/">
                      Delta 10 Gummies
                      </a>
                    </li>
                    <li>            
                      <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/">
                      Delta 8 Gummies  
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="#">Kumbucha</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="multi-column-dropdown">
                    <b><strong> Family Of Brands </strong></b>
                                        <li class="divider"></li>
                    <li><a href="#">Grow to life</a></li>
                    <li><a href="#">Carpe Diem</a></li>
                    <li><a href="#">Hippies At Home</a></li>
                    <li><a href="#">Kuribl link</a></li>
                    <li><a href="#">Philotimo</a></li>
                    <li><a href="#">Prana Kombucha</a></li>
                    <li><a href="#">River Valley Hemp co.</a></li>
                                        <li class="divider"></li>
                    <li><a href="#">Promotions</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="multi-column-dropdown">
                    <b><strong> CBD </strong></b>
                                        <li class="divider"></li>
                    <li><a href="#">Consumables</a></li>
                    <li><a href="#">Gummies</a></li>
                    <li><a href="#">Pets</a></li>
                    <li><a href="#">Supplimemnts</a></li>
                    <li><a href="#">Flower</a></li>
                    <li><a href="#">Tinctures</a></li>
                    <li><a href="#">Topicals</a></li>
                    <li><a href="#">Samples</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="multi-column-dropdown">
                    <b><strong> Quality Goods </strong></b>
                    <li><a href="#">Pets </a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Elderly</a></li>
                    <li><a href="#">Athletes</a></li>
                    <li><a href="#">Sexual Health </a></li>
                    <li><a href="#">Everyone</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item mr-3 ml-5">
            <a class="" style="color: black" href="/shop-all">Purcahse A Gift Card</a>
          </li>
          <li class="nav-item mr-3 ml-3 dropdown">
            <a
              class=" "
              style="color: black"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learn
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/blogs"
                ><strong>Blog</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/cbd-101"
                ><strong>CBD 101</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/essential-oil"
                ><strong>Essential Oils</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/terpenes"
                ><strong>Terpenes</strong>
              </a>
            </div>
          </li>

          <li class="nav-item mr-3 ml-3 dropdown">
            <a
              class=" "
              style="color: black"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/"
                ><strong>Our Communtiy</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/"
                ><strong>COA's</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/fda-disclaimer"
                ><strong>FDA's DISCLAIMER</strong>
              </a>         
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/refund-policy"
                ><strong>REFUND POLICY</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/privacy-policy"
                ><strong>PRIVACY POLICY</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/"
                ><strong>TERMS OF SERVICES</strong>
              </a>
              <a class="dropdown-item mb-4 ml-2 mr-2" href="/"
                ><strong>SHIPPING</strong>
              </a>
            </div>

          </li>
          <li class="nav-item mr-3 ml-5">
            <a class="" style="color: black" href="/visit-us">Visit Us</a>
          </li>
        </ul>
      </div>
    </nav>

    <section style="overflow-x: hidden" class="body-tag">
      <router-view />
    </section>

    <!-- Footer -->
    <footer
      class="font-small footer"
      style="background-color: #f0f0f0; color: #818181 !important"
    >
      <!-- Footer Links -->
      <div class="text-center text-md-left pt-5 pb-5">
        <!-- Grid row -->
        <div class="row mt-4 ml-4 mr-4">
          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-2"
              style="color: black"
            >
              Navigate
            </h5>

            <ul class="">
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/purchase-a-gift-card/"
                  >Purchase a Gift Card</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/life-sessions/"
                  >Life Sessions</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/learn/"
                  >Learn</a
                >
              </li>

              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/about-us/"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/visit-us/"
                  >Visit Us</a
                >
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4" style="color: black">
              Quality Goods
            </h5>

            <ul class="">
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/shop/"
                  >Shop</a
                >
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4" style="color: black">
              MN Made Brands
            </h5>

            <ul class="ml-0">
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/pureom/"
                  >PureomEO
                </a>
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/grow-to-life/"
                  >Grow To Life</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/hippies-at-home/"
                  >Hippies At Home</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/functional-botanicals/"
                  >Functional Botanicals</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/kuribl/"
                  >Kuribl</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/element/"
                  >Element</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/endo/"
                  >ENDO</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/hemony/"
                  >Hemony</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="https://growtolife.com/philotimo/"
                  >Philotimo</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/prana/"
                  >Prana</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="https://growtolife.com/brands/"
                  >View all brands</a
                >
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: black"
            >
              Subscribe to our newsletter
            </h5>

            <form @submit.prevent="submitForm">
              <div class="row ml-4">
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
                <button type="submit" class="btn btn-danger ml-4" style="height: 40px">
                  Submit
                </button>
                <sub
                  >By subscribing you agree with our Terms of Use & Privacy Policy.</sub
                >
              </div>
            </form>

            <p class="mt-5 mb-4 ml-4 pr-4" style="color: #818181 !important">
              4815 Excelsior Boulevard Minneapolis, MN 55416 Email: info@growtolife.com
              <br />
              Call: (952) 405-8181 <br />
              Email: info@growtolife.com
            </p>

            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4 mt-2"
              style="color: black"
            >
              Connect With Us
            </h5>
            <div class="row pl-5 pr-5">
              <div claiss="col-3">
                <a href="https://www.facebook.com/grow2life">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="blue"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-3">
                <a href="https://www.instagram.com/growtolife/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="red"
                    class="bi bi-instagram ml-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-3">
                <a href="https://www.youtube.com/channel/UCeMEVgRGh2zAQlxhOvRvTww">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="red"
                    class="bi bi-youtube ml-4 mb-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-3">
                <a href="https://www.linkedin.com/company/growtolife/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="blue"
                    class="bi bi-linkedin ml-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- <hr
        style="background-color: rgb(252, 222, 222); width: 90%"
        class="ml-5"
      /> -->
      <!-- Copyright -->
      <div class="footer-copyright p-4">
        All hemp or CBD based products on this website contain .03% THC or less. No
        statement in this web site has been evaluated by the Food and Drug Administration
        (FDA). Furthermore, none of the statements in this web site should not be
        construed as dispensing medical advice or making claims regarding the cure of
        diseases. Products sold by Grow To Life are not intended to diagnose, treat, cure
        or prevent any disease.
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showMobileMenu: false,
      email: "",
      errors: [],
      cart: {
        items: [],
      },
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");
      this.$store.commit("removeToken");
      this.$store.commit("removeUserId");
      this.$router.push("/");
    },
    async submitForm() {
      const formData = {
        email: this.email,
      };
      await axios
        .post("/api/v1/info/", formData)
        .then((response) => {
          console.log(response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Subscribed Email",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");
            console.log(JSON.stringify(error));
          }
        });
    },
  },

  computed: {
    cartTotalLength() {
      console.log("hi faiz", this.cart.items.length);
      let totalLength = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }
      return totalLength;
    },
  },
};
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
</script>

<style lang="scss">
.header {
  background: rgb(0, 178, 255);
  color: #fff;
}
#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 5px 5px;
  vertical-align: top;
  margin-left: -8px;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .product-img {
    height: 250px;
    width: 200px;
  }
}
/* max 1250 or less */
@media only screen and (max-width: 1250px) {
  // .card-text{
  //   display:none;
  // }
}
@media only screen and (max-width: 770px) {
  .product-img {
    height: 300px;
    width: 250px;
  }
}
/* max 800px or less */
@media only screen and (max-width: 800px) {
  .no-overflow {
    display: none;
  }
  .cards-heading {
    display: none;
  }
}
// header-img
/* max 1150px or less */
@media only screen and (max-width: 1250px) {
  .header-img {
    display: none;
  }
  .product-img {
    height: 400px;
    width: 350px;
  }
}
@media only screen and (min-width: 1250px) {
  .product-img {
    height: 600px;
    width: 550px;
  }
}
////
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 999px) {
  .card-img-top {
    height: 260px !important;
  }
}
.body-tag {
  overflow-x: hidden;
}
.product-img {
  overflow-y: hidden;
  overflow-x: hidden;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.heading {
  font-weight: 300;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
}
.heading:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 1px;
  bottom: 0;
  left: 25%;
  border-bottom: 3px solid black;
}
.center_elements {
  display: flex;
  justify-content: center;
  text-align: center;
}
.swal2-icon {
  overflow-y: hidden;
}
.navigation {
  position: fixed;
  width: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  bottom: 0;
  border-top: 0;
  transition: 0.3s;
}
.swal2-icon .swal2-success .swal2-icon-show {
  overflow-y: hidden;
  overflow-x: hidden;
}
li a {
  color: white;
  text-decoration: none;
}
.no-underline {
  text-decoration: none !important;
}
.categories li a {
  color: #466d1d;
  text-decoration: none;
  font-weight: bolder;
}
.card-image {
  height: 300px;
}
.cards {
  height: 280px;
}
.card {
  overflow-y: hidden;
}
.cards {
  overflow-y: hidden;
}
.card-body {
  overflow-y: hidden;
}
.no-overflow {
  overflow-y: hidden;
}
.card {
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  background-color: white;
}

.navbar strong {
  color: black;
}

.navbar p {
  color: green;
}

.col-md-4 {
  overflow-y: hidden;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  text-decoration: none;
}
@media (max-width: 990px) {
  .card {
    margin: 20px;
  }
}
#app {
  font-family: Bogle, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none !important;
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.a-exact-active {
      color: #42b983;
    }
  }
}

// adding responsive tags
@media (max-width: 992px) {
  .section-title {
    font-size: 3rem;
  }
}
@media (max-width: 561px) {
  .section-title {
    font-size: 2rem;
  }
  .card-img-top {
    height: 200px;
  }
}
@media (max-width: 270px) {
  .flexDirectionColAt270 {
    flex-direction: column;
  }
  .card-img-top {
    height: 150px;
  }
}
.icon {
  font-size: 30px;
  margin-right: 20px;
}
@media (max-width: 1326px) {
  html {
    font-size: 100%;
  }
}
@media (max-width: 1200px) {
  html {
    font-size: 95%;
  }
}
@media (max-width: 1100px) {
  html {
    font-size: 90%;
  }
}
#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  /* height: 40px;
            background: grey; */
}
@media (max-width: 1000px) {
  html {
    font-size: 85%;
  }
  .card-img-top {
    height: 300px;
  }
}
@media (max-width: 900px) {
  html {
    font-size: 80%;
  }
  .card-img-top {
    height: 300px;
  }
}
@media (max-width: 770px) {
  html {
    font-size: 75%;
  }
  .card-img-top {
    height: 270px;
  }
}
@media (max-width: 680px) {
  html {
    font-size: 70%;
  }
  .card-img-top {
    height: 200px;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 65%;
  }
  .card-img-top {
    height: 200px;
  }
  .protocol-img {
    height: 50%;
  }
}

h1 b,
h2 b,
h3 b,
h4 b {
  color: #07ad31;
}

p,
strong,
b {
  color: #07ad31;
}

@media (max-width: 530px) {
  html {
    font-size: 60%;
  }
  .card-img-top {
    height: 180px;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 350px) {
  html {
    font-size: 55%;
  }
  .card-img-top {
    height: 150px;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 250px) {
  html {
    font-size: 50%;
  }
  .card-img-top {
    height: 150px;
  }

  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 230px) {
  html {
    font-size: 45%;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 210px) {
  html {
    font-size: 40%;
  }
  .card-img-top {
    height: 150px;
  }
  .protocol-img {
    height: 50%;
  }
}

.set-color {
  color: black;
}

@media (min-width: 768px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
  }
}
@media (max-width: 767px) {
  .dropdown:hover .dropdown-menu {
    display: none;
    margin-top: auto;
  }
}

//for searchbar
.form-inputs {
  position: relative;
}
.form-inputs .form-control {
  height: 45px;
}

.form-inputs .form-control:focus {
  box-shadow: none;
  border: 1px solid #000;
}

.form-inputs i {
  position: absolute;
  right: 10px;
  top: 15px;
}

.qty {
  font-size: 12px;
}

.faiz {
  font-family: "Times New Roman", Times, serif;
  position: relative;
  text-decoration: none;
  font-weight: 100;
  color: black;
  transition: all 0.25s ease;
}

.navbar li {
  font-family: "Times New Roman", Times, serif;
  position: relative;
  text-decoration: none;
  font-weight: 100;
  color: black;
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    color: black;

    &::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}

ul {
  list-style-type: none;
}

@media (max-width: 190px) {
  html {
    font-size: 35%;
  }
  .card-img-top {
    height: 100px;
  }
  .protocol-img {
    height: 50%;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 15px;
  }
  //   .card-img-top, .card-body, .seller-Card{
  //   height: 200px
  // }
}

ul li a {
  color: #818181;
}
.swal2-icon,
.swal2-success,
.swal2-icon-show,
.swal2-success-ring,
.swal2-success-fix,
.swal2-timer-progress-bar,
.swal2-timer-progress-bar-container,
.swal2-container,
.swal2-top-end,
.swal2-backdrop-show {
  overflow-x: hidden !important;
}
.swal-wide {
  overflow: hidden !important;
}

* {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 65%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 10%;
  padding: 10px;
  background: #e4f1f7;
  color: black;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}

.wrapper {
  height: 100%;
}

.dropdown-menu {
	min-width: 200px;
}
.dropdown-menu.columns-2 {
	min-width: 400px;
}
.dropdown-menu.columns-3 {
	min-width: 1200px;
}
.dropdown-menu li a {
	padding: 5px 15px;
	font-weight: 300;
}
.multi-column-dropdown {
	list-style: none;
  margin: 0px;
  padding: 0px;
}
.multi-column-dropdown li a {
	display: block;
	clear: both;
	line-height: 1.428571429;
	color: #333;
	white-space: normal;
}
.multi-column-dropdown li a:hover {
	text-decoration: none;
	color: #262626;
	background-color: #999;
}
 
@media (max-width: 767px) {
	.dropdown-menu.multi-column {
		min-width: 240px !important;
		overflow-x: hidden;
	}
}

</style>
