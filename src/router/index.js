import { createRouter, createWebHistory } from "vue-router";

import AlimentosView from "@/views/AlimentosView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/alimentos', component: AlimentosView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
