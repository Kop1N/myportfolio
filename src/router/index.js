import { createRouter, createWebHistory } from 'vue-router';
import PortfolioDashboard from '../views/PortfolioDashboard.vue';
import ContactPage from '../views/ContactPage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ProfilePage from '../views/ProfilePage.vue';
import CreativePage from '../views/CreativePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/profile', // Redirect root to login
  },
  {
    path: '/portfolio',
    name: 'PortfolioDashboard',
    component: PortfolioDashboard,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactPage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: PortfolioShowcase,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
  {
    path: '/creative',
    name: 'creative',
    component: CreativePage,
    meta: { requiresAuth: true }, // Add requiresAuth meta field
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
