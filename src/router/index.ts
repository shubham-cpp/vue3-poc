import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomeView,
        leftSidebar: () => import('@/components/LeftSidebar.vue'),
        navBar: () => import('@/components/NavbarView.vue'),
        rightSidebar: () => import('@/components/RightSidebar.vue')
      }
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      components: {
        default: () => import('@/views/ProfileView.vue'),
        navBar: () => import('@/components/NavbarView.vue'),
        leftSidebar: () => import('@/components/LeftSidebar.vue'),
        rightSidebar: () => import('@/components/RightSidebar.vue')
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    }
  ]
})

// const { isUserLoggedIn, user } = useUserStore()

// router.beforeEach(to => {
//   if (!isUserLoggedIn && to.name !== 'Login' && to.name !== 'Register') {
//     console.log('Inside router function')
//     console.dir(user)
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }
// })
export default router
