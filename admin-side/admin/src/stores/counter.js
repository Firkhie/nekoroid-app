import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    items: [],
    categories: [],
    manufacturers: []
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async handleLogin(email, password) {
      try {
        let user = await axios({
          method: 'post',
          url: `${this.baseUrl}/login`,
          data: { email, password }
        })
        localStorage.setItem('access_token', user.data.access_token)
        localStorage.setItem('fullName', user.data.fullName)
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async handleRegister(fullName, email, password, phoneNumber, address) {
      try {
        await axios({
          method: 'post',
          url: `${this.baseUrl}/register`,
          data: { fullName, email, password, phoneNumber, address }
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },
    handleLogout() {
      try {
        localStorage.clear()
        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },
    // Items
    async fetchItems() {
      try {
        let items = await axios({
          method: 'get',
          url: `${this.baseUrl}/item`,
          headers: { access_token: localStorage.getItem('access_token') }
        })
        this.items = items.data
      } catch (err) {
        console.log(err)
      }
    },
    async addNewItem(name, price, image, stock, CategoryId, ManufacturerId, description) {
      await axios({
        method: 'post',
        url: `${this.baseUrl}/item`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: { name, price, image, stock, CategoryId, ManufacturerId, description }
      })
    },
    async deleteItem(id) {
      await axios({
        method: 'delete',
        url: `${this.baseUrl}/item/${id}`,
        headers: { access_token: localStorage.getItem('access_token') },
      })
    },
    // Categories
    async fetchCategories() {
      try {
        let categories = await axios({
          method: 'get',
          url: `${this.baseUrl}/category`,
          headers: { access_token: localStorage.getItem('access_token') }
        })
        this.categories = categories.data
      } catch (err) {
        console.log(err)
      }
    },
    async addNewCategory(name) {
      await axios({
        method: 'post',
        url: `${this.baseUrl}/category`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: { name }
      })
    },
    async deleteCategory(id) {
      await axios({
        method: 'delete',
        url: `${this.baseUrl}/category/${id}`,
        headers: { access_token: localStorage.getItem('access_token') },
      })
    },
    // Manufacturers
    async fetchManufacturers() {
      try {
        let manufacturers = await axios({
          method: 'get',
          url: `${this.baseUrl}/manufacturer`,
          headers: { access_token: localStorage.getItem('access_token') }
        })
        this.manufacturers = manufacturers.data
      } catch (err) {
        console.log(err)
      }
    },
    async addNewManufacturer(name) {
      await axios({
        method: 'post',
        url: `${this.baseUrl}/manufacturer`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: { name }
      })
    },
    async deleteManufacturer(id) {
      await axios({
        method: 'delete',
        url: `${this.baseUrl}/manufacturer/${id}`,
        headers: { access_token: localStorage.getItem('access_token') },
      })
    },
  },
})
