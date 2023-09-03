import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import ManufacturersPage from '../views/ManufacturersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesPage
    },
    {
      path: '/manufacturers',
      name: 'manufacturers',
      component: ManufacturersPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')
  if (to.name === 'dashboard' && !isAuthenticated) next({ name: 'login' })
  if (to.name === 'categories' && !isAuthenticated) next({ name: 'login' })
  if (to.name === 'manufacturers' && !isAuthenticated) next({ name: 'login' })
  if (to.name === 'login' && isAuthenticated) next({ name: 'dashboard' })
  if (to.name === 'register' && isAuthenticated) next({ name: 'dashboard' })
  else next()
})

export default router
