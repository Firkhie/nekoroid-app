<template>
   <section class="w-[90%] lg:w-[800px] h-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row bg-white rounded-md text-xs md:text-sm">
    <!-- Left -->
    <div class="w-full lg:flex-[50%] flex flex-col justify-center py-6 md:py-10 px-4 md:px-9 gap-2">
      <router-link to="/"><h4 class="text-[#FC4B03] pb-3">Nekoroid</h4></router-link>
      <h6>Create Your Account</h6>
      <p class="text-gray-500 pb-4">Let's get started by creating your account first</p>
      <form id="register-form" class="flex flex-col gap-2 md:gap-3 w-full" @submit.prevent="submitRegister">
        <div>
          <p>Full Name</p>
          <input
            v-model="fullname"
            class="bg-transparent outline-none w-full border-b-2 pt-1"
            type="text"
            id="register-fullname"
            placeholder="Enter full name"
            autocomplete="off"
            required
          />
        </div>
        <div class="pt-2">
          <p>Email</p>
          <input
            v-model="email"
            class="bg-transparent outline-none w-full border-b-2 pt-1"
            type="email"
            id="register-email"
            placeholder="Enter email address"
            autocomplete="off"
            required
          />
        </div>
        <div class="pt-2">
          <p>Password</p>
          <input
            v-model="password"
            class="bg-transparent outline-none w-full border-b-2 pt-1"
            type="password"
            id="register-password"
            placeholder="Enter password"
            autocomplete="off"
            required
          />
        </div>
        <div class="pt-2">
          <p>Phone Number</p>
          <input
            v-model="phonenumber"
            class="bg-transparent outline-none w-full border-b-2 pt-1"
            type="text"
            id="register-phonenumber"
            placeholder="Enter phone number"
            autocomplete="off"
            required
          />
        </div>
        <div class="pt-2">
          <p>Address</p>
          <input
            v-model="address"
            class="bg-transparent outline-none w-full border-b-2 pt-1"
            type="text"
            id="register-address"
            placeholder="Enter address"
            autocomplete="off"
            required
          />
        </div>
        <button type="submit" class="w-full py-3 rounded-md bg-[#FC4B03] text-white mt-4">Register</button>
      </form>
      <p class="text-center pb-2">Already have an account? <router-link to="/login" class="text-[#FC4B03]">Log In</router-link></p>
    </div>
    <!-- Right -->
    <div :style="{ backgroundImage: 'url(' + image + ')' }" class="flex-[50%] bg-cover bg-center bg-no-repeat rounded-r-md hidden lg:flex">
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import pict from '@/assets/login-pict.jpg';

export default {
  name: 'RegisterPage',
  data() {
    return {
        fullname: '',
        email: '',
        password: '',
        phonenumber: '',
        address: '',
        image: pict
    };
  },
  methods: {
    ...mapActions(useCounterStore, ['handleRegister']),
    submitRegister() {
        this.handleRegister(this.fullname, this.email, this.password);
    }
  },
}
</script>

<style scoped></style>