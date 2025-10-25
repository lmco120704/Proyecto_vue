import { createRouter, createWebHashHistory } from 'vue-router' // 👈 usa createWebHashHistory
import HomeView from '../views/HomeView.vue'
import LocationView from '../views/LocationView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 👈 cambia aquí también
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ubicacion',
      name: 'ubicacion',
      component: LocationView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CartView
    }
  ]
})

export default router
