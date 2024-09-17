<template>
  <div class="container mx-auto px-4 md:px-6 lg:px-16 py-12 mt-4 md:mt-8 overflow-hidden md:mr-32">
    <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center lg:items-start lg:ml-56">
   
      <div class="w-full md:w-1/2 flex justify-center md:justify-start">
        <img :src="img" alt="app feature" class="w-4/6 md:w-5/6 lg:w-8/12 h-auto" />
      </div>

      
      <div class="w-full md:w-1/2 md:mr-40">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center md:text-left mb-2 md:mr-10">Awesome App Features</h1>
        <p class="text-sm md:text-base lg:text-lg text-gray-600 text-center md:text-left mb-4">Increase productivity with a simple to-do app for managing your personal budgets.</p>

        <div class="space-y-6 md:space-y-8">
       
          <div class="flex space-x-4 items-start">
            <img :src="speed" alt="speed icon" class="w-10 md:w-12 lg:w-14 h-auto mt-1" />
            <div>
              <p class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">Fast Performance</p>
              <p class="text-xs md:text-sm lg:text-base text-gray-600">Get your blood tests delivered at home, collect a sample from the news, and receive your results fast.</p>
            </div>
          </div>

         
          <div class="flex space-x-4 items-start">
            <img :src="prototyping" alt="prototyping icon" class="w-10 md:w-12 lg:w-14 h-auto mt-1" />
            <div>
              <p class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">Prototyping</p>
              <p class="text-xs md:text-sm lg:text-base text-gray-600">Efficient prototyping to get your ideas off the ground quickly.</p>
            </div>
          </div>

        
          <div class="flex space-x-4 items-start">
            <img :src="vectorEditing" alt="vector editing icon" class="w-10 md:w-12 lg:w-14 h-auto mt-1" />
            <div>
              <p class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">Vector Editing</p>
              <p class="text-xs md:text-sm lg:text-base text-gray-600">Advanced vector editing capabilities to streamline your design process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../assets/images/smart-search.png';
import prototyping from '../assets/images/prototyping.png';
import speed from '../assets/images/speed.png';
import vectorEditing from '../assets/images/vector-editing.png';

export default {
  data() {
    return {
      img,
      prototyping,
      speed,
      vectorEditing,
    };
  },
};
</script>
