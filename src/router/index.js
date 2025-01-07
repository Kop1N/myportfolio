import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import PortfolioDashboard from '../views/PortfolioDashboard.vue';
import ContactPage from '../views/ContactPage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ProfilePage from '../views/ProfilePage.vue';
import CreativePage from '../views/CreativePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root to login
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/portfolio',
    name: 'PortfolioDashboard',
    component: PortfolioDashboard,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/portfolio/contacts',
    name: 'contacts',
    component: ContactPage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/portfolio/showcase',
    name: 'showcase',
    component: PortfolioShowcase,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/portfolio/profile',
    name: 'profile',
    component: ProfilePage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/portfolio/creative',
    name: 'creative',
    component: CreativePage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user'); // Check if user is logged in

  // If the route requires authentication and the user is not logged in
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'Login' }); // Redirect to login page
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
