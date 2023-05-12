import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '../views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SigninView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/signUpView.vue')
    },
    {
      meta:{
        auth: true
      },
      path: '/task',
      name: 'task',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TaskView.vue')
    },
    {
     path: '/task2',
     name: 'task2',
     // route level code-splitting
     // this generates a separate chunk (About.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import('../views/task/TaskList.vue')
    }
  ]
})

export default router
