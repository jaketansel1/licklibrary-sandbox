import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import RecommendationsPage from './pages/RecommendationsPage.vue'
import LearningPathsPage from './pages/LearningPathsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recommendations', component: RecommendationsPage },
  { path: '/learning-paths', component: LearningPathsPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})