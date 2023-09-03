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
      <tr v-for="(category, index) in categories" :key="index" class="border-b dark:border-neutral-500">
        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index+1 }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ category.name }}</td>
        <td class="whitespace-nowrap px-6 py-4 flex gap-3">
          <button class="py-2 px-4 text-white bg-red-600 rounded-md" @click.prevent="clickDelete(category.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'CategoryTable',
  computed: {
    ...mapState(useCounterStore, ['categories'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchCategories']),
    async fetchData() {
      try {
        await this.fetchCategories();
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ['deleteCategory']),
    async clickDelete(id) {
      try {
        await this.deleteCategory(id)
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
