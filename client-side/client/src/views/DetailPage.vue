<template>
  <main class="relative w-full px-6 md:px-8 lg:px-32 mt-20 md:mt-24 lg:mt-28 flex-1">
    <section class="w-full flex flex-col md:flex-row gap-4 md:gap-7 p-5 sm:p-10 shadow-lg bg-white rounded-md">
      <div class="flex-1 w-full h-fit flex justify-center">
        <img :src="detailItem.image" alt="">
      </div>
      <div class="flex-1 w-full flex flex-col gap-2">
        <h5 class="font-semibold">{{ detailItem.name }}</h5>
        <p class="text-gray-500 pb-1 lg:pb-3">By {{ detailItem.company }}</p>
        <hr>
        <h5 class="font-medium lg:pt-2 text-[#FC4B03]">Rp. {{ detailItem.price }}</h5>
        <p>Stock: {{ detailItem.stock }}</p>
        <div class="flex items-center gap-5 md:gap-7 border-2 border-black py-[6px] md:py-2 px-4 w-fit rounded-md font-semibold"> 
          <i class="fa-solid fa-minus cursor-pointer" @click.prevent="subItem"></i>
          <p class="">{{ amount }}</p>
          <i class="fa-solid fa-plus cursor-pointer" @click.prevent="addItem"></i>
        </div>
        <div class="flex gap-2 sm:gap-3 pt-3 md:pt-5 pb-3 text-white">
          <button class="py-3 sm:py-4 px-4 sm:px-6 lg:px-10 rounded-md bg-red-600 flex gap-2 items-center"><i class="fa-solid text-base md:text-lg fa-heart"></i>Wishlist</button>
          <button class="py-3 sm:py-4 rounded-md bg-[#FC4B03] w-full">Add to Cart</button>
        </div>
        <hr>
        <p class="pt-3">{{ detailItem.description }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'DetailPage',
  data() {
    return {
      amount: 1
    }
  },
  computed: {
    ...mapState(useCounterStore, ['detailItem'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchDetailItem']),
    fetchData() {
      this.fetchDetailItem()
    },
    addItem() {
      if(this.amount < this.detailItem.stock) this.amount++
    },
    subItem() {
      if(this.amount > 1) this.amount--
    },
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped></style>