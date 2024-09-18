import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import ParentComponent from '../components/ParentComponent.vue';

// Define routes
const routes = [
  { path: '/', component: App },
  { path: '/practice', component: ParentComponent },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
