import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailPage from '../views/DetailPage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import CartPage from '../views/CartPage.vue'
import WishlistPage from '../views/WishlistPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistPage
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   let isAuthenticated = localStorage.getItem('access_token')

//   if (to.name === 'bookmark' && !isAuthenticated) next({ name: 'login' })
//   if (to.name === 'login' && isAuthenticated) next({ name: 'home' })
//   if (to.name === 'register' && isAuthenticated) next({ name: 'home' })
//   else next()
// })

export default router
