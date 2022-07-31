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

