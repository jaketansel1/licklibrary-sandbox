import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import RecommendationsPage from './pages/RecommendationsPage.vue'
import LearningPathsPage from './pages/LearningPathsPage.vue'
import LearningPathDetailPage from './pages/LearningPathDetailPage.vue'
import LearningPathLessonPage from './pages/LearningPathLessonPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recommendations', component: RecommendationsPage },
  { path: '/learning-paths', component: LearningPathsPage },
  { path: '/learning-paths/:id', component: LearningPathDetailPage },
  { path: '/learning-paths/:id/lesson/:lessonId', component: LearningPathLessonPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})