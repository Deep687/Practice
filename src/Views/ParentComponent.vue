<script setup>
import { ref, onMounted } from 'vue';
import ChildrenComponent from '../components/ChildrenComponent.vue';


let postsData = ref([]); 


const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const json = await response.json();
        postsData.value = json.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="flex flex-row flex-wrap">
        <div v-if="postsData.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="post in postsData" :key="post.id" class="m-4 p-4 border rounded shadow-lg bg-white">
                <ChildrenComponent :data="post" />
            </div>
        </div>
        <div v-else class="flex items-center justify-center">
            <p>Loading...........</p>
        </div>
    </div>
</template>


