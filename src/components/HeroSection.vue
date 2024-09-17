<template>
  <div
    class="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-center bg-bottom bg-no-repeat md:-mt-10"
    :style="{ backgroundImage: `url(${skyline})` }"
  >
    <div class="textContainer text-center md:text-left mb-8 md:mb-0 md:mr-8 w-full md:w-3/5 md:px-6 lg:px-12 md:ml-32 flex flex-col items-center md:items-start">
      <div class="flex space-x-2 rounded-full px-4 py-1 mb-4 w-full max-w-xs bg-gray-200">
        <div class="bg-yellow-400 text-white rounded-full w-6 h-6 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.7 0-4.8 1.79-4.8 4s2.1 4 4.8 4 4.8-1.79 4.8-4-2.1-4-4.8-4zm0 4l-2.1-1.5L9.9 12l2.1 1.5L14.1 12l-.9-1.5z" />
          </svg>
        </div>
        <span class="text-sm text-gray-700 font-medium">#1 Editors Choice App of 2020</span>
      </div>

      <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 my-2 leading-tight">Best app for your</h1>
      <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 my-2 leading-tight">modern lifestyle</h1>
      <p class="text-lg text-gray-600 mb-2">Increase productivity with a simple to-do app</p>
      <p class="text-lg text-gray-600 mb-6">managing your personal budgets</p>

      <div class="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
        <button class="btn bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition w-full md:w-auto">
          Try for free
        </button>
        <button class="btn text-blue-700 font-medium hover:underline transition w-full md:w-auto">
          Watch a demo video
        </button>
      </div>
    </div>

    <div class="imgContainer flex justify-center w-full md:w-2/5 mt-6 md:mt-0">
      <img :src="logo" alt="Phone with app" class="w-36 sm:w-48 md:w-60 lg:w-72 object-contain" />
    </div>
  </div>
</template>

<script setup>
import logo from '../assets/images/phone.png';
import skyline from '../assets/images/skyline.png';
</script>
