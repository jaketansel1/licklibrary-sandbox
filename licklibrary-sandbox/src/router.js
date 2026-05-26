import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import RecommendationsPage from './pages/RecommendationsPage.vue'
import LearningPathsPage from './pages/LearningPathsPage.vue'
import LearningPathDetailPage from './pages/LearningPathDetailPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recommendations', component: RecommendationsPage },
  { path: '/learning-paths', component: LearningPathsPage },
  { path: '/learning-paths/:id', component: LearningPathDetailPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})