<script setup>
import { ref } from 'vue';
const props = defineProps(["data"]);
const showFullText = ref(false); 

function toggleText() {
    showFullText.value = !showFullText.value; 
}
</script>
<template>
    <div class="bg-white rounded-lg p-6 max-w-sm mx-auto transition-transform transform hover:scale-105 m-7">
        <h3 class="text-xl font-bold text-gray-800 mb-2">{{ props.data.title }}</h3> 
        <p class="text-gray-600 mb-4">
            {{ showFullText ? props.data.body : props.data.body.slice(0, 80) + '...' }} 
        </p>
        <button @click="toggleText" class="text-blue-500">
            {{ showFullText ? 'Read Less' : 'Read More' }} </button>
    </div>
</template>