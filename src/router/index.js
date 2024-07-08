import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/Home.vue';
// import About from '../components/About.vue';
import Login from '../Views/Login.vue'; // Import the Login component
import Register from '../Views/Register.vue'
import Home from '../Views/Home.vue'

const routes = [

  { path: '/login',
    name : 'Login',
    component: Login },
     // Add a route for the login page
     {
      path: '/register',
      name :'Register',
      component : Register
     }
     ,{
      path: '/home',
      name :'Home',
      component : Home
     }
];

const router = createRouter({
  history: createWebHistory(),
  routes : routes,
});

export default router;
