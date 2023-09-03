<template>
  <table class="min-w-full text-left text-xs lg:text-sm">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="px-6 py-4">#</th>
        <th scope="col" class="px-6 py-4">Name</th>
        <th scope="col" class="px-6 py-4">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(manufacturer, index) in manufacturers" :key="index" class="border-b dark:border-neutral-500">
        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index+1 }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ manufacturer.name }}</td>
        <td class="whitespace-nowrap px-6 py-4 flex gap-3">
          <button class="py-2 px-4 text-white bg-red-600 rounded-md" @click.prevent="clickDelete(manufacturer.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'ManufacturerTable',
  computed: {
    ...mapState(useCounterStore, ['manufacturers'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchManufacturers']),
    async fetchData() {
      try {
        await this.fetchManufacturers();
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ['deleteManufacturer']),
    async clickDelete(id) {
      try {
        await this.deleteManufacturer(id)
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
