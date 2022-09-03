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
      path: '/blogs/:blogId',
      name: 'blog',
      component: () => import('../views/blog.vue')
    },
    {
      path: '/visit-us',
      name: 'visit-us',
      component: () => import('../views/visit-us.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import(/* webpackChunkName: "about" */ '../views/blogs.vue')
    },
    {
      path: '/terpenes',
      name: 'terpenes',
      component: () => import(/* webpackChunkName: "about" */ '../views/terpenes.vue')
    },
    {
      path: '/essential-oil',
      name: 'essential-oil',
      component: () => import(/* webpackChunkName: "about" */ '../views/essential-oil.vue')
    },
    {
      path: '/cbd-101',
      name: 'blogs',
      component: () => import(/* webpackChunkName: "about" */ '../views/cbd-101.vue')
    },
    {
      path: '/cbd_oil',
      name: 'cbd',
      component: () => import(/* webpackChunkName: "about" */ '../views/cbd-oil.vue')
    },
    {
      path: '/refund-policy',
      name: 'refund-policy',
      component: () => import(/* webpackChunkName: "about" */ '../views/refund-policy.vue')
    },///terms_of_service/
    {
      path: '/terms_of_service',
      name: 'terms_of_service',
      component: () => import(/* webpackChunkName: "about" */ '../views/terms_of_service.vue')
    },
    {
      path: '/Shipping',
      name: 'Shipping',
      component: () => import(/* webpackChunkName: "about" */ '../views/Shipping.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import(/* webpackChunkName: "about" */ '../views/privacy-policy.vue')
    },
    {
      path: '/fda-disclaimer',
      name: 'fda-disclaimer',
      component: () => import(/* webpackChunkName: "about" */ '../views/fda-disclaimer.vue')
    },
    {
      path: '/shop-all',
      name: 'shop-all',
      component: () => import(/* webpackChunkName: "about" */ '../views/shop-all.vue')
    },
    {
      path: '/life-session',
      name: 'shop',
      component: () => import(/* webpackChunkName: "about" */ '../views/life-session.vue')
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
      path: '/cao',
      name: 'cao',
      component: () => import(/* webpackChunkName: "about" */ '../views/cao.vue')
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
    {
      path: '/categories/:category',
      name: 'categories',
      component: () => import('../views/category.vue')
    },
    {
      path: '/subcategories/:subcategory',
      name: 'subcategories',
      component: () => import('../views/subcategory.vue')
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

