import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import RecommendationsPage from './pages/RecommendationsPage.vue'
import LearningPathsPage from './pages/LearningPathsPage.vue'
import LearningPathDetailPage from './pages/LearningPathDetailPage.vue'
import LearningPathLessonPage from './pages/LearningPathLessonPage.vue'
import TutorsPage from './pages/TutorsPage.vue'
import TutorPage from './pages/TutorPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recommendations', component: RecommendationsPage },
  { path: '/learning-paths', component: LearningPathsPage },
  { path: '/learning-paths/:id', component: LearningPathDetailPage },
  { path: '/learning-paths/:id/lesson/:lessonId', component: LearningPathLessonPage },
  { path: '/tutors', component: TutorsPage },
  { path: '/tutors/:slug', component: TutorPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})