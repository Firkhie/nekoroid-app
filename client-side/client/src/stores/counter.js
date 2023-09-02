import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    featuredItems: [],
    catalogItems: [],
    detailItem: {}
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async fetchFeaturedItems() {
      try {
        let items = await axios.get(`${this.baseUrl}/items`)
        this.featuredItems = items.data
      } catch (err) {
        console.log(err)
      }
    },
    async fetchCatalogItems() {
      try {
        let items = await axios.get(`${this.baseUrl}/items`)
        this.catalogItems = items.data
      } catch (err) {
        console.log(err)
      }
    },
    async fetchDetailItem() {
      try {
        let item = await axios.get(`${this.baseUrl}/items/1`)
        this.detailItem = item.data
      } catch (err) {
        console.log(err)
      }
    }
  },
})