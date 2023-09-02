<template>
  <main class="relative w-full px-6 md:px-8 lg:px-32 mt-20 md:mt-24 lg:mt-28 flex-1">
    <!-- HOME - HERO -->
    <HomeHero />

    <!-- HOME - ADDS -->
    <section class="w-full mt-5 md:mt-10 flex flex-col gap-5 sm:gap-10">
      <div class="w-full flex flex-col sm:flex-row gap-3 md:gap-5 items-center justify-center sm:justify-between">
        <div class="w-full flex-1 flex items-center justify-center sm:justify-normal pb-2 sm:pb-0 border-b-2 sm:border-b-0 sm:border-r-2 border-black">
          <h5 class="max-w-[375px] sm:pr-5 text-center sm:text-left">We provide best customers experiences</h5>
        </div>
        <p class="text-gray-500 max-w-[375px] sm:w-[250px] md:w-[375px] lg:w-[440px] text-center sm:text-left">We ensure our customers have the best shopping experiences</p>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <div class="flex flex-col sm:gap-2 p-3 md:p-5 bg-white shadow-md rounded-md">
          <i class="fa-solid fa-cubes text-sm sm:text-base lg:text-lg p-3 bg-[#FC4B03] text-white w-fit rounded-md mb-2 "></i>
          <p class="font-bold">Original Products</p>
          <p class="hidden sm:flex">We provide money back guarantee if the product are not original</p>
        </div>
        <div class="flex flex-col sm:gap-2 p-3 md:p-5 bg-white shadow-md rounded-md">
          <i class="fa-solid fa-face-laugh-beam text-sm sm:text-base lg:text-lg p-3 bg-[#FC4B03] text-white w-fit rounded-md mb-2"></i>
          <p class="font-bold">Satisfication Guarantee</p>
          <p class="hidden sm:flex">Exchange the product you've purchased if it doesn't fit on you</p>
        </div>
        <div class="flex flex-col sm:gap-2 p-3 md:p-5 bg-white shadow-md rounded-md">
          <i class="fa-solid fa-meteor text-sm sm:text-base lg:text-lg p-3 bg-[#FC4B03] text-white w-fit rounded-md mb-2"></i>
          <p class="font-bold">New Arrival Everyday</p>
          <p class="hidden sm:flex">We updates our collections almost everyday</p>
        </div>
        <div class="flex flex-col sm:gap-2 p-3 md:p-5 bg-white shadow-md rounded-md">
          <i class="fa-solid fa-truck-fast text-sm sm:text-base lg:text-lg p-3 bg-[#FC4B03] text-white w-fit rounded-md mb-2"></i>
          <p class="font-bold">Fast & Free Shipping</p>
          <p class="hidden sm:flex">We offer fast and free shipping for our loyal customers</p>
        </div>
      </div>
    </section>
    
    <!-- HOME - CATEGORIES -->
    <section class="w-full mt-7 md:mt-10 flex flex-col gap-4 md:gap-7">
      <h5>Categories</h5>
      <div class="w-full h-[350px] lg:h-[250px] grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        <HomeCategory />
      </div>
    </section>
    
    <!-- HOME - FEATURED ITEMS -->
    <section class="w-full mt-7 md:mt-10 flex flex-col gap-4 md:gap-7">
      <h5>Featured Items</h5>
      <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-5 bg-white shadow-lg px-3 md:px-5 py-8 rounded-md">
        <HomeFeature />
      </div>
      <div class="w-full flex items-center justify-center">
        <router-link to="/catalog" class="py-3 px-6 rounded-md bg-[#FC4B03] text-white w-fit font-semibold">Click to show all items</router-link>
      </div>
    </section>
  </main>
</template>

<script>
import HomeCategory from '../components/HomeCategory.vue';
import HomeHero from '../components/HomeHero.vue';
import HomeFeature from '../components/HomeFeature.vue';

export default {
    name: 'HomePage',
    components: { HomeHero, HomeCategory, HomeFeature }
}
</script>

<style scoped></style>