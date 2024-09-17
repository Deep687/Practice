<script setup>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import vector from './assets/images/hero-vector.png';
import Companies from './components/Companies.vue';
import SmartSearch from './components/SmartSearch.vue';
</script>

<template>
  <div class="background-full " 
    :style="{ 
    backgroundImage: `url(${vector})`,
    backgroundPosition: 'full', 
   
    backgroundRepeat:'repeat'

  }">
    <Header />
    <HeroSection />
    <Companies />
    <SmartSearch />
  </div>
</template>


