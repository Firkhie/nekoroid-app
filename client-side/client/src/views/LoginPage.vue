<template>
  <section class="w-[90%] lg:w-[800px] h-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row bg-white rounded-md text-xs md:text-sm">
  <!-- Left -->
  <div class="w-full lg:flex-[50%] flex flex-col justify-center py-6 md:py-10 px-4 md:px-9 gap-2">
    <router-link to="/"><h4 class="text-[#FC4B03] pb-3">Nekoroid</h4></router-link>
    <h6>Login to Your Account</h6>
    <p class="text-gray-500 pb-4">Get into your account to checkout your cute favorite nendoroid</p>
    <form id="login-form" class="flex flex-col gap-2 md:gap-3 w-full" @submit.prevent="submitLogin">
      <div>
        <p>Email</p>
        <input
          v-model="email"
          class="bg-transparent outline-none w-full border-b-2 pt-1"
          type="email"
          id="login-email"
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
          id="login-password"
          placeholder="Enter password"
          autocomplete="off"
          required
        />
      </div>
      <button type="submit" class="w-full py-3 rounded-md bg-[#FC4B03] text-white mt-4">Login</button>
    </form>
    <p class="text-center pb-2">Don't have an account? <router-link to="/register" class="text-[#FC4B03]">Sign Up</router-link></p>
    <div class="w-full flex justify-center">
      <div class="flex gap-1 sm:gap-2 items-center justify-center py-2 px-3 rounded-md bg-gray-400 w-fit">
        <div>
          <p class="text-white sm:text-xs text-[11px]">Email: </p>
          <p class="text-white sm:text-xs text-[11px]">Pass: </p>
        </div>
        <div>
          <p class="text-white sm:text-xs text-[11px]">tester1@gmail.com </p>
          <p class="text-white sm:text-xs text-[11px]">123456 </p>
        </div>
      </div>
    </div>
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
  name: 'LoginPage',
  data() {
    return {
        email: '',
        password: '',
        image: pict
    };
  },
  methods: {
    ...mapActions(useCounterStore, ['handleLogin']),
    submitLogin() {
        this.handleLogin(this.email, this.password);
    }
  }
}
</script>

<style scoped></style>