<template>
  <main class="relative w-full lg:w-[calc(100%-230px)] xl:w-[calc(100%-250px)] min-h-screen flex flex-col p-6 gap-7">
    <Status />
    <div class="flex flex-col bg-white rounded-md shadow-lg p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-2">
        <p class="text-base md:text-lg font-semibold">Manufacturer List</p>
        <button class="flex items-center justify-center rounded-md gap-2 px-4 py-2 bg-[#FC4B03] text-white text-xs md:text-sm" @click="newManufacturerModalOpen">
          <i class="fa-solid fa-plus"></i>
          <p>New Manufacturer</p>
        </button>
      </div>
      <!-- Modal -->
      <dialog ref="newManufacturerModal" class="w-[600px] h-fit bg-white shadow-lg p-4 rounded-md">
        <div class="flex items-center justify-between">
          <h6 class="font-semibold mb-2">Input new Manufacturer</h6>
          <button class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white" @click.prevent="newManufacturerModalClose">
            <i class="fa-solid fa-x text-[8px]"></i>
            <p>Close</p>
          </button>
        </div>
        <hr>  
        <form class="flex flex-col gap-2 md:gap-3 w-full mt-3" @submit.prevent="submitNewManufacturer">
          <div class="flex w-full items-center gap-5">
            <p>Name</p>
            <input
              v-model="name"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="text"
              placeholder="Enter manufacturer name"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" class="w-fit py-2 px-4 rounded-md bg-[#FC4B03] text-white mt-4">Add Manufacturer</button>
        </form>
      </dialog>
      <hr>
      <!-- Table -->
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full">
            <div class="overflow-hidden">
              <ManufacturerTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ManufacturerTable from '../components/ManufacturerTable.vue'
import Status from '../components/Status.vue'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'ManufacturersPage',
  components: { ManufacturerTable, Status },
  data() {
    return {
        name: ''
    };
  },
  methods: {
    newManufacturerModalOpen() {
      this.$refs.newManufacturerModal.showModal()
    },
    newManufacturerModalClose() {
      this.$refs.newManufacturerModal.close()
    },
    ...mapActions(useCounterStore, ['fetchManufacturers']),
    async fetchData() {
      try {
        await this.fetchManufacturers();
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ['addNewManufacturer']),
    async submitNewManufacturer() {
      try {
        await this.addNewManufacturer(this.name);
      } catch (err) {
        console.error(err)
      } finally {
        this.$refs.newManufacturerModal.close()
        this.fetchData()
        this.name = ''
      }
    }
  }
}
</script>

<style></style>