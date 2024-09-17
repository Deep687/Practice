<template>
  <div
    class="container mx-auto p-4 flex flex-col md:flex-row items-center bg-bottom bg-no-repeat"
    :class="{
      'bg-bottom': true
    }"
    :style="{ backgroundImage: `url(${skyline})`,
     }"
  >
  
    <div class="textContainer text-center md:text-left mb-10 md:mb-0 md:mr-12 w-full md:w-3/5 md:px-12 md:ml-28">
      <div class="flex items-center justify-center md:justify-start space-x-2 rounded-full px-4 py-1 mb-4 w-64 bg-gray-200 ml-14 md:-ml-2">
        <div class="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center -ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.7 0-4.8 1.79-4.8 4s2.1 4 4.8 4 4.8-1.79 4.8-4-2.1-4-4.8-4zm0 4l-2.1-1.5L9.9 12l2.1 1.5L14.1 12l-.9-1.5z" />
          </svg>
        </div>
        <span class="text-sm text-gray-700 font-medium">#1 Editors Choice App of 2020</span>
      </div>

      <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 my-4 leading-tight">
        Best app for your
      </h1>
      <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 my-4 leading-tight">
        modern lifestyle
      </h1>

      <p class="text-lg text-gray-600 mb-2">
        Increase productivity with a simple to-do app
      </p>
      <p class="text-lg text-gray-600 mb-6">
        managing your personal budgets
      </p>

      <div class="flex justify-center md:justify-start space-x-4">
        <button class="btn bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition">
          Try for free
        </button>
        <button class="btn text-blue-700 font-medium hover:underline transition">
          Watch a demo video
        </button>
      </div>
    </div>

    <div class="imgContainer flex justify-center w-full md:w-1/2 mt-6 md:mt-0">
      <img :src="logo" alt="Phone with app" class="w-32 sm:w-40 md:w-60 lg:w-80" />
    </div>
  </div>
</template>

<script setup>
import logo from '../assets/images/phone.png';
import skyline from '../assets/images/skyline.png';
</script>
