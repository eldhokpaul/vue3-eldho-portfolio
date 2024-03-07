import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/HomePage.vue')
const About = () => import('@/views/AboutUs.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/DefaultView.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})

export default router
