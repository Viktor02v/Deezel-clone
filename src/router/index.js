import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' 
import Artist from '../views/ArtistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	 {
		path: '/artist',
      component: Artist
	 }
  ]
})

export default router
