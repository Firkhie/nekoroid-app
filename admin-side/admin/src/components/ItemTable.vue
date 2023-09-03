<template>
  <table class="min-w-full text-left text-xs lg:text-sm">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="px-6 py-4">#</th>
        <th scope="col" class="px-6 py-4">Name</th>
        <th scope="col" class="px-6 py-4">Price</th>
        <th scope="col" class="px-6 py-4">Image URL</th>
        <th scope="col" class="px-6 py-4">Stock</th>
        <th scope="col" class="px-6 py-4">Category</th>
        <th scope="col" class="px-6 py-4">Manufacturer</th>
        <th scope="col" class="px-6 py-4">Description</th>
        <th scope="col" class="px-6 py-4">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index" class="border-b dark:border-neutral-500">
        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index+1 }}</td>
        <td class="whitespace-nowrap px-6 py-4 overflow-hidden overflow-ellipsis max-w-[300px]">{{ item.name }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ item.price }}</td>
        <td class="whitespace-nowrap px-6 py-4 overflow-hidden overflow-ellipsis max-w-[300px]">{{ item.image }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ item.stock }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ item.CategoryId }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ item.ManufacturerId }}</td>
        <td class="whitespace-nowrap px-6 py-4 overflow-hidden overflow-ellipsis max-w-[300px]">{{ item.description }}</td>
        <td class="whitespace-nowrap px-6 py-4 flex gap-3">
          <button class="py-2 px-4 text-white bg-red-600 rounded-md" @click.prevent="clickDelete(item.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'ItemTable',
  computed: {
    ...mapState(useCounterStore, ['items'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchItems']),
    async fetchData() {
      try {
        await this.fetchItems();
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ['deleteItem']),
    async clickDelete(id) {
      try {
        await this.deleteItem(id)
      } catch (err) {
        console.log(err)
      } finally {
        this.fetchData()
      }
    },
  },
  created() {
    this.fetchData()
  }
}
</script>

<style></style>
