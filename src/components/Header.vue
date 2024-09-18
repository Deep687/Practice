<template>
  <div class="flex flex-col md:flex-row justify-between items-center p-4 mx-4 lg:mx-24 mt-7 overflow-hidden sm:justify-between">
    <div class="flex items-center w-full justify-between md:w-fit">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold"><span class="text-orange-400">App</span>Lab</h1>
    

      <button 
        v-if="isSmallScreen" 
        @click="toggleMenu" 
        class="bg-blue-800 text-white p-2 m-2 md:hidden flex flex-col items-center mt-2">
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>
    </div>
    <div v-if="isSmallScreen && isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-10">
      <div class="w-64 h-full bg-white shadow-md flex flex-col p-6">
        <p v-for="(item, index) in menuItems" :key="index" class="hover:text-gray-400 cursor-pointer text-lg py-2">{{ item }}</p>
        <button class="bg-blue-800 text-white rounded-3xl py-2 px-6 hover:bg-blue-700 text-sm mt-4">Try for free</button>
      
        <button @click="toggleMenu" class="mt-auto text-red-600 text-sm underline">Close Menu</button>
      </div>
    </div>

 
    <div v-if="!isSmallScreen" class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
      <p v-for="(item, index) in menuItems" :key="index" class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 ml-5">{{ item }}</p>
      <button class="bg-blue-800 text-white rounded-3xl py-2 px-6 hover:bg-blue-700 text-xs md:text-sm flex items-center mt-2">
        Try for free
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: window.innerWidth < 768,
      menuItems: ['Home', 'Key features', 'Pricing', 'Testimonial', 'FAQ'],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth < 768;
      if (!this.isSmallScreen) {
        this.isMenuOpen = false; 
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>

</style>
