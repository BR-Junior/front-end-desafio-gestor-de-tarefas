import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "@/views/SignIn-SignUp/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'signUp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignIn-SignUp/SignUp.vue')
    },
    {
     path: '/task',
     name: 'task',
     // route level code-splitting
     // this generates a separate chunk (About.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import('../views/task/TaskList.vue')
    }
  ]
})

export default router
