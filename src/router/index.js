import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'
import store from '../store'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/trim',
      name: 'trim',
      component: () => import(/* webpackChunkName: "about" */ '../views/trim.vue')
    },
    {
      path: '/cbd_oil',
      name: 'cbd',
      component: () => import(/* webpackChunkName: "about" */ '../views/cbd-oil.vue')
    },
    {
      path: '/shop-all',
      name: 'shop',
      component: () => import(/* webpackChunkName: "about" */ '../views/shop-all.vue')
    },
    {
      path: '/beyond',
      name: 'beyond',
      component: () => import(/* webpackChunkName: "about" */ '../views/beyond.vue')
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import(/* webpackChunkName: "about" */ '../views/pets.vue')
    },
    {
      path: '/capsules',
      name: 'capsules',
      component: () => import(/* webpackChunkName: "about" */ '../views/capsules.vue')
    },
    {
      path: '/edibles',
      name: 'edibles',
      component: () => import(/* webpackChunkName: "about" */ '../views/edibles.vue')
    },
    {
      path: '/products/:productId',
      name: 'products',
      component: () => import('../views/product.vue')
    },
    {
      path: '/topical_creams',
      name: 'topical-creams',
      component: () => import(/* webpackChunkName: "about" */ '../views/topical-creams.vue')
    },
    {
      path: '/water_solubles',
      name: 'water-solubles',
      component: () => import(/* webpackChunkName: "about" */ '../views/water-solubles.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/log-in',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout.vue'),
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: () => import('../views/myAccount.vue'),
      meta: {
        requireLogin: true
      }
    },
    

]  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router

