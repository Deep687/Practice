<template>
    <div class="flex flex-col items-center justify-center mt-14">
      <p class="text-center text-lg font-medium mb-6">Trusted by companies like</p>
      <div class="flex flex-wrap justify-center gap-6 p-7 px-10">
        <img class="h-12 w-auto" :src="southwest" alt="Southwest">
        <img class="h-12 w-auto" :src="anubis" alt="Anubis">
        <img class="h-12 w-auto" :src="express" alt="Express">
        <img class="h-12 w-auto" :src="alonzo" alt="Alonzo">
        <img class="h-12 w-auto" :src="maniac" alt="Maniac">
      </div>
    </div>
  </template>
  
  <script>
  import maniac from '../assets/images/maniac.png';
  import southwest from '../assets/images/southwest.png';
  import anubis from '../assets/images/anubis.png';
  import alonzo from '../assets/images/alonzo.png';
  import express from '../assets/images/express.png'; 
  
  export default {
    data() {
      return {
        southwest,
        maniac,
        anubis,
        express,
        alonzo
      };
    }
  }
  </script>
  