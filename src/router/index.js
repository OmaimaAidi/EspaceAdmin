import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('@/views/student/Students_list.vue'),
  },
  {
    path: '/parents',
    name: 'parents',
    component: () => import('@/views/parents/Parents_list.vue'),
  },
  {
    path: '/add-student',
    name: 'add-student',
    component: () => import('@/views/student/Add_student.vue'),
  },
  {
    path: '/login',
    name: 'pages-login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    name: 'pages-register',
    component: () => import('@/views/Auth/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// redirect to login if not connected 

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
