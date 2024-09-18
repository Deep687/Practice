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
import Header from './Header.vue';
import HeroSection from './HeroSection.vue';
import Companies from './Companies.vue'; 
import SmartSearch from './SmartSearch.vue'; 
import Footer from './Footer.vue'; 

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


