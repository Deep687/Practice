import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import ParentComponent from '../Views/ParentComponent.vue';

const routes = [
  { path: '/', component:Home  },
  { path: '/practice', component: ParentComponent },
 
];

const router = createRouter({
  history: createWebHistory(
    '/','/practice' 
  ),
  routes,
});

export default router;
