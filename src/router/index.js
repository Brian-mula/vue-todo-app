import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/history.vue'
import SignUp from '../components/authentication/signUp.vue'
import SignIn from '../components/authentication/signIn.vue'
import Profile from '../views/profile.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component:History
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component:SignUp
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component:SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
