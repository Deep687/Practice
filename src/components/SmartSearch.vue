<template>
    <div class="container mx-auto p-5 mt-16">
      <div class="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-center md:items-start">
       
      
        <div class="w-full md:w-1/2 flex justify-center md:justify-start md:ml-44">
          <img :src="img" alt="app feature" class="w-8/12 md:w-7/12 h-auto md:h-full" />
        </div>
     
       
        <div class="w-full md:w-1/2">
          <h1 class="text-xl md:text-2xl font-bold text-gray-800">
            Awesome app 
          </h1>
          <h1 class="text-xl md:text-2xl font-bold text-gray-800">
           features
          </h1>
          <p class="text-base md:text-sm text-gray-600">
            Increase productivity with a simple to-do app for 
          </p>
          <p class="text-base md:text-sm text-gray-600">
            managing your personal budgets.
          </p>
    
        
          <div class="space-y-5 md:-mt-4">
             
            <div class="flex space-x-4 items-start mt-5 md:mt-10">
              <img :src="speed" alt="speed icon" class="w-10 md:w-12 h-14 md:h-14 mt-3" />
              <div>
                <p class="text-lg md:text-lg font-semibold text-gray-800">Fast performance</p>
                <p class="text-sm  text-gray-600">Get your blood tests delivered at home,</p>
                  <p class="text-sm  text-gray-600">collect a sample from the news, </p>
                    <p class="text-sm text-gray-600">and receive your results fast.</p>
              </div>
            </div>
    
            <div class="flex space-x-4 items-start">
              <img :src="prototyping" alt="prototyping icon" class="w-10 md:w-12 h-14 md:h-14 mt-2" />
              <div>
                <p class="text-lg md:text-lg font-semibold text-gray-800">Prototyping</p>
                <p class="text-sm  text-gray-600">Efficient prototyping to get your </p>
                <p class="text-sm  text-gray-600">ideas off the ground quickly.</p>
              </div>
            </div>
    
            <div class="flex space-x-4 items-start">
              <img :src="vectorEditing" alt="vector editing icon" class="w-10 md:w-12 h-14 md:h-14 mt-2" />
              <div>
                <p class="text-lg md:text-lg font-semibold text-gray-800">Vector editing</p>
                <p class="text-sm text-gray-600">Advanced vector editing capabilities to </p>
                 <p class="text-sm  text-gray-600">streamline your design process.</p>
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
  