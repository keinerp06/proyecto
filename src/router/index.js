import { createRouter, createWebHistory } from 'vue-router'

import VistaProyect from '@/views/VistaProyect.vue'
import ContactoView from '@/views/Contacto/ContactoView.vue'
import RestauranteView from '@/views/Restaurante/RestauranteView.vue'
import HabitacionesView from '@/views/Habitaciones/HabitacionesView.vue'
import EventoView from '@/views/Evento/EventoView.vue'

const routes = [

  {
    path: '/',
    name: 'proyeto',
    component: VistaProyect
  },
  {
    path: '/Contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/Restaurante',
    name: 'restaurante',
    component: RestauranteView
  },
  {
    path: '/Habitaciones',
    name: 'habitaciones',
    component: HabitacionesView
  },
    {
    path: '/Evento',
    name: 'eventos',
    component: EventoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
