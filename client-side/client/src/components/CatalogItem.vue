<template>
  <div v-for="(item, index) in catalogItems" :key="index" class="w-full flex flex-col gap-1 cursor-pointer">
    <img :src="item.image" alt="" class="w-full object-cover object-center rounded-md">
    <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">{{ item.category }}</p>
    <div class="flex flex-col gap-0">
      <p class="font-bold line-clamp-2">{{ item.name }}</p>
      <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. {{ item.price }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'CatalogItem',
  computed: {
    ...mapState(useCounterStore, ['catalogItems'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchCatalogItems']),
    fetchData() {
      this.fetchCatalogItems()
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style></style>