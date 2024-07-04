import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/Home.vue';
// import About from '../components/About.vue';
import Login from '../components/Login.vue'; // Import the Login component
import Register from '../components/Register.vue'

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
];

const router = createRouter({
  history: createWebHistory(),
  routes : routes,
});

export default router;
