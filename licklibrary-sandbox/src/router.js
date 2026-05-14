import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import RecommendationsPage from './pages/RecommendationsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recommendations', component: RecommendationsPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})