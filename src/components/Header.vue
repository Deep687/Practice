<template>
  <div class="flex flex-col md:flex-row justify-between items-center p-4 mx-4 md:mx-24 mt-7">
    <div class="flex items-center space-x-2 md:space-x-4">
      <h1 class="text-xl md:text-3xl font-bold text-orange-400">App</h1>
      <h1 class="text-xl md:text-3xl font-bold">Lab</h1>
    </div>

    <!-- Menu button visible only on small screens -->
    <button 
      v-if="isSmallScreen" 
      @click="toggleMenu" 
      class="bg-blue-800 rounded-2xl text-white p-2 m-2 md:hidden">
      Menu
    </button>

    <!-- Menu items visible on all screens; toggle visibility on small screens -->
    <div 
      :class="[
        'flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0',
        isSmallScreen ? (isMenuOpen ? 'block' : 'hidden') : 'flex'
      ]">
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base">Home</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base">Key features</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base">Pricing</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base">Testimonial</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base">FAQ</p>

      <button class="bg-blue-800 text-white rounded-3xl py-2 px-6 hover:bg-blue-700 text-xs md:text-sm flex items-center">
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
      isSmallScreen: window.innerWidth < 768 // Adjusted breakpoint for small screens
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth < 768; // Adjusted breakpoint
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
