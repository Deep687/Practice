<template>
    <div class="background-full" 
         :style="{ 
           backgroundImage: `url(${vector})`,
           backgroundPosition: 'center', 
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover'
         }">
      <Header />
      <HeroSection />
      <Companies />
      <SmartSearch />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import HeroSection from '../components/HeroSection.vue';
  import Companies from '../components/Companies.vue'; 
  import SmartSearch from '../components/SmartSearch.vue'; 
  import Footer from '../components/Footer.vue'; 
  
  export default {
    components: {
      Header,
      HeroSection,
      Companies,
      SmartSearch,
      Footer
    },
    data() {
      return {
        vector: '' 
      };
    }
  }
  </script>