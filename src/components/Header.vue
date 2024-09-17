<template>
  <div class="flex flex-col md:flex-row justify-between items-center p-4 mx-4 lg:mx-24 mt-7 overflow-hidden sm:justify-between "> 
    <div class="flex items-center">
      
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-orange-400">App</h1>
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">Lab</h1>
  
      <button 
        v-if="isSmallScreen" 
        @click="toggleMenu" 
        class="bg-blue-800 text-white p-2 m-2 md:hidden flex flex-col items-center -mr-10 mt-2"> 
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>
    </div>
    <div 
      :class="[
        'flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0',
        isMenuOpen ? 'block' : (isSmallScreen || isIpadScreen ? 'hidden' : 'flex')
      ]">
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 sm: ml-5">Home</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 sm: ml-5">Key features</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 sm: ml-5">Pricing</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 sm: ml-5">Testimonial</p>
      <p class="hover:text-gray-400 cursor-pointer text-lg md:text-base py-2 sm: ml-5">FAQ</p>
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
      isMenuOpen: false, // Keep this as false initially
      isSmallScreen: window.innerWidth < 768,
   
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      const width = window.innerWidth;
      this.isSmallScreen = width < 768;
     

   
      if (!this.isSmallScreen) {  
        this.isMenuOpen = false; 
      } else {
        this.isMenuOpen = false; // Set to false for small screens
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
